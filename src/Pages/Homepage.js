import React, { useState, useEffect } from "react";


import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Search from "../Components/Search";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import theme from "../theme";

const useStyles = makeStyles((theme) => ({
	"@global": {
		ul: {
			margin: 0,
			padding: 0,
			listStyle: "none",
			//bgcolor: "backgroundTheme",
		},
	},
	link: {
		margin: theme.spacing(1, 1.5),
	},
	heroContent: {
		padding: theme.spacing(8, 0, 6),
	},
	// cardHeader: {
	// 	backgroundColor:
	// 		theme.palette.type === "light"
	// 			? theme.palette.grey[200]
	// 			: theme.palette.grey[700],
	// },
	// cardPricing: {
	// 	display: "flex",
	// 	justifyContent: "center",
	// 	alignItems: "baseline",
	// 	marginBottom: theme.spacing(2),
	// },
}));

export default function Homepage(props) {
	const classes = useStyles();
	const [titles, setTitles] = useState({});

	// useEffect(() => {
	// 	fetch('/recommendations').then(
	// 		res => res.json()
	// 	).then(
	// 		data => {
	// 			setData(data);
	// 		}
	// 	);
	// }, []);

	useEffect(() => {
		fetch("/getAllTitles")
			.then((res) => res.json())
			.then((titles) => {
				setTitles(titles);
			});
	}, []);

	return (
		<div>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<React.Fragment>
					{/*The title and subtitle of the page aka HERO CONTENT*/}
					<Container
						maxWidth="sm"
						component="main"
						className={classes.heroContent}
					>
						<Typography
							component="h1"
							variant="h2"
							align="center"
							className="purple-text"
							gutterBottom
						>
							Book Recommendation
						</Typography>
						<Typography
							variant="h5"
							align="center"
							color="textSecondary"
							component="p"
						>
							Find your next read below! What is a book you enjoyed?
						</Typography>
						<h3 />
						<Search
							displayError={props.displayError}
							handleOnClick={props.handleOnClick}
							options={titles.titles}
							updateSelected={props.updateSelected}
						/>
					</Container>
				</React.Fragment>
			</ThemeProvider>
		</div>
	);
}
