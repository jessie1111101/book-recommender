import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

import Copyright from "./Copyright";

const useStyles = makeStyles((theme) => ({
	footer: {
		borderTop: `1px solid ${theme.palette.divider}`,
		marginTop: theme.spacing(8),
		// paddingTop: theme.spacing(3),
		paddingBottom: theme.spacing(3),
		// [theme.breakpoints.up("sm")]: {
		// 	paddingTop: theme.spacing(6),
		// 	paddingBottom: theme.spacing(6),
		// },
	},
}));
export default function Footer() {
	const classes = useStyles();
	return (
		<div>
			<Container maxWidth="md" component="footer" className={classes.footer}>
				<Box mt={5}>
					<Copyright />
				</Box>
			</Container>
		</div>
	);
}
