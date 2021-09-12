import React, { Component } from "react";

import { Autocomplete } from "@material-ui/lab";
import { TextField, Button } from "@material-ui/core";

import history from "../history";
import RecButton from "./RecButton";

class Search extends Component {
	constructor(props) {
		super(props);

		this.state = {
			selected: "",

			displayError: false,
		};
	}

	setSelected = (title) => this.setState({ selected: title });

	handleOnClick = () => {
		if (this.state.selected == "") {
			this.setState({ displayError: true });
		} else {
			this.setState({ displayError: false });
			console.log("router display results " + this.state.selected);
			history.push("/recommendation");
		}
	};

	render() {
		let { options } = this.props;
		let { displayError } = this.state;

		return (
			<>
				<Autocomplete
					id="search-box"
					options={options}
					style={{ width: 600 }}
					disableClearable={true}
					renderInput={(params) => (
						<TextField
							{...params}
							label="Enter a book title"
							variant="outlined"
						/>
					)}
					onChange={(e) => this.setSelected(e.target.innerHTML)}
				/>
				<h3 />
				<RecButton />
				{displayError ? (
					<div className="red-text">Please select a book</div>
				) : null}
			</>
		);
	}
}
export default Search;
