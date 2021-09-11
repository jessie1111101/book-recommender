import React, { Component } from "react";

import { Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

class RecButton extends Component {
	render() {
		return (
			<>
				<Button
					variant="contained"
					onClick={this.handleOnClick}
					color="primary"
					size="small"
					endIcon={<SearchIcon />}
				>
					Get Recommendations
				</Button>
			</>
		);
	}
}

export default RecButton;
