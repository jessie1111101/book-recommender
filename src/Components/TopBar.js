import React from "react";
import history from "../history";

import { AppBar } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
//import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

import theme from "../theme";

const useStyles = makeStyles((theme) => ({
	// "@global": {
	// 	ul: {
	// 		margin: 0,
	// 		padding: 0,
	// 		listStyle: "none",
	// 	},
	// },
	appBar: {
		borderBottom: `1px solid ${theme.palette.divider}`,
	},
	toolbar: {
		flexWrap: "wrap",
	},
	toolbarTitle: {
		flexGrow: 1,
	},
	link: {
		margin: theme.spacing(1, 1.5),
	},
	button: {
		color: "rgb(76, 83, 145)",
		border: "rgb(76, 83, 145)",
	},
}));

export default function TopBar(props) {
	const classes = useStyles();
	return (
		<div>
			<ThemeProvider theme={theme}>
				<AppBar
					position="static"
					elevation={0}
					className={classes.appBar}
					color="primary"
				>
					<Toolbar className={classes.toolbar}>
						<span class="material-icons-outlined md-38">psychology</span>
						<Typography
							variant="h6"
							color="inherit"
							noWrap
							className={classes.toolbarTitle}
						>
							Big Brain Team - PennApps XXII
						</Typography>
						{/* <nav>
						<Link
							variant="button"
							color="textPrimary"
							href="#"
							className={classes.link}
							//onClick={}
						>
							Take a Test to get your Recommendation!
						</Link>
					</nav> */}
						<Button
							href="#"
							color="primary"
							variant="outlined"
							className={(classes.link, classes.button)}
							onClick={props.goHome}
						>
							Home
						</Button>
					</Toolbar>
				</AppBar>
			</ThemeProvider>
		</div>
	);
}
