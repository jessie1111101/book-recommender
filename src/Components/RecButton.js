import React, { Component } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Box, Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { ThemeProvider } from "@material-ui/styles";

import theme from "../theme";

const style = makeStyles({
	titleItemRight: {
		//		color: "white",
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
			<ThemeProvider theme={theme}>
				<Box className={classes.titleBar}>
					<Button
						className={classes.titleItemRight}
						variant="contained"
						onClick={props.handleOnClick}
						color="secondary"
						size="small"
						endIcon={<SearchIcon />}
					>
						Get Recommendations
					</Button>
				</Box>
			</ThemeProvider>
		</div>
	);
};

export default RecButton;
