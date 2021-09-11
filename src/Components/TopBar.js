import React from "react";

import { AppBar } from "@material-ui/core";
//import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
//import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";

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
}));

export default function TopBar() {
	const classes = useStyles();
	return (
		<div>
			<AppBar
				position="static"
				color="default"
				elevation={0}
				className={classes.appBar}
			>
				<Toolbar className={classes.toolbar}>
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
					{/* <Button
						href="#"
						color="primary"
						variant="outlined"
						className={classes.link}
						//onClick = {}
					>
						Login
					</Button> */}
				</Toolbar>
			</AppBar>
			;
		</div>
	);
}
