import React, { Component } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Box, Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const style = makeStyles({
	titleItemRight: {
		color: "white",
		top: "50%",
		height: 30,
		float: "right",
		position: "relative",
		transform: "translateY(10%)",
	},
});

const RecButton = (props) => {
	const classes = style();
	return (
		<div>
			<Box className={classes.titleBar}>
				<Button
					className={classes.titleItemRight}
					variant="contained"
					onClick={props.handleOnClick}
					color="primary"
					size="small"
					endIcon={<SearchIcon />}
				>
					Get Recommendations
				</Button>
			</Box>
		</div>
	);
};

export default RecButton;
