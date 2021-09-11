import flask
from urllib.request import urlopen
import xmltodict
import json

import numpy as np
import pandas as pd
import sklearn.feature_extraction.text
import sklearn.metrics.pairwise

app = flask.Flask(__name__)


TfidVectorizer = sklearn.feature_extraction.text.TfidfVectorizer
linear_kernel = sklearn.metrics.pairwise.linear_kernel

book_csv_url = 'https://raw.githubusercontent.com/zygmuntz/goodbooks-10k/master/books.csv'
#df_books = pd.read_csv(book_csv_url)
df_books = pd.read_csv('../goodreads_10k/books.csv')
books_df = df_books[['book_id', 'original_title', 'authors']]
books_df = books_df.sort_values('book_id')


books_df

book_tags_url = 'https://github.com/zygmuntz/goodbooks-10k/blob/master/book_tags.csv?raw=true'
#book_tags = pd.read_csv(book_tags_url)
book_tags = pd.read_csv('../goodreads_10k/book_tags.csv')

book_tags

tags_url = 'https://raw.githubusercontent.com/zygmuntz/goodbooks-10k/master/tags.csv'
#tags = pd.read_csv(tags_url)
tags = pd.read_csv('../goodreads_10k/tags.csv')

merge_tags = pd.merge(book_tags, tags, left_on='tag_id', right_on='tag_id', how='inner')

merge_tags

book_tags = pd.merge(df_books, merge_tags, left_on='book_id',
                     right_on='goodreads_book_id', how='inner')

auth_book_tags = book_tags.groupby('book_id')['tag_name'].apply(' '.join).reset_index()
auth_book_tags

df_books = pd.merge(df_books, auth_book_tags,
                   left_on='book_id', right_on='book_id', how='inner')
df_books.head()

df_books['combined'] = pd.Series(df_books[['authors','tag_name']]
                                .fillna('').values.tolist()).str.join(' ')

df_books['combined']

tf_combined = TfidVectorizer(analyzer='word',ngram_range=(1, 2)
                              ,min_df=0, stop_words='english')

tfidf_matrix_combined = tf_combined.fit_transform(df_books['combined'])

cosine_sim_combined = linear_kernel(tfidf_matrix_combined,
                                    tfidf_matrix_combined)

info = df_books[['title','authors','original_publication_year', 'average_rating']]
indices = pd.Series(df_books.index, index=df_books['title'])

@app.route('/recommendations')
def get_recommendations(title="Romeo and Juliet", num_recommendations = 3):

    idx = indices[title]
    sim_scores = list(enumerate(cosine_sim_combined[idx]))
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)
    sim_scores = sim_scores[1:num_recommendations+1]
    book_indices = [i[0] for i in sim_scores]
    
    result_df = info.iloc[book_indices]
    result_df = result_df.reset_index()
    result_df.drop('index',inplace=True, axis=1)
    return result_df.to_json(orient='index')

print(get_recommendations())

@app.route("/search/<query>", methods = ['GET'])
def search(query):
    if not query:
        return {'books': {}}
    response_string = 'https://www.goodreads.com/search/index.xml?format=xml&key=Ev590L5ibeayXEVKycXbAw&q=' + query # quote(request.form.get("title"))  
    xml = urlopen(response_string)
    data = xml.read()
    xml.close()
    data = xmltodict.parse(data)
    gr_data = json.dumps(data)
    goodreads_fnl = json.loads(gr_data)
    gr = goodreads_fnl['GoodreadsResponse']['search']['results']

    return {'books': gr}

app.run(debug=True)