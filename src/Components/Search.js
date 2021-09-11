import React, { Component } from 'react';

import { Autocomplete } from '@material-ui/lab';
import { TextField } from '@material-ui/core';

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: "",
        }
    }

    setSelected = (title) => this.setState({ selected: title });

    render() {
        let { options } = this.props;

        return (
            <Autocomplete
                id="search-box"
                options={options}
                style={{ width: 600 }}
                renderInput={(params) => <TextField {...params} label="Enter a book title" variant="outlined" />}
                onChange={e => this.setSelected(e.target.innerHTML)}
            />
        );
    }
}
export default Search;
