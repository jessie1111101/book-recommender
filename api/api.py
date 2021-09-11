import flask

app = flask.Flask(__name__)

@app.route('/recommendations')
def get_recommendations():
    return {'recommendations': ["Book 1", "Book 2", "Book 3"]}

app.run(debug=True)