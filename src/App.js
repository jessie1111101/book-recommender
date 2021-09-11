import React from "react";
import { Router } from "react-router-dom";

import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import StarIcon from "@material-ui/icons/StarBorder";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import history from "./history";
import TopBar from "./Components/TopBar";
import BookRecommendation from "./Pages/BookRecommendation/BookRecommendation";
import Footer from "./Components/Footer";

/*
	return (
		<div>
			{(typeof data.recommendations === 'undefined' ? (
				<p>Loading...</p>
			) : (
				data.recommendations.map((book, i) => (
					<p key={i}>{book}</p>
				))
			)
			)}
		</div>
	);
} */

const useStyles = makeStyles((theme) => ({
	"@global": {
		ul: {
			margin: 0,
			padding: 0,
			listStyle: "none",
		},
	},
	link: {
		margin: theme.spacing(1, 1.5),
	},
	heroContent: {
		padding: theme.spacing(8, 0, 6),
	},
	cardHeader: {
		backgroundColor:
			theme.palette.type === "light"
				? theme.palette.grey[200]
				: theme.palette.grey[700],
	},
	// cardPricing: {
	// 	display: "flex",
	// 	justifyContent: "center",
	// 	alignItems: "baseline",
	// 	marginBottom: theme.spacing(2),
	// },
}));

const tiers = [
	{
		title: "TITLE1",
		subheader: "HOW WELL RATED",
		price: "0",
		description: [
			"DESCRIPTION1",
			"DESCRIPTION4",
			"DESCRIPTION7",
			"DESCRIPTION10",
		],
		buttonText: "BUTTON TEXT MAYBE PURCHASE??",
		buttonVariant: "outlined",
	},
	{
		title: "TITLE2",
		subheader: "HOW WELL RATED",
		price: "15",
		description: [
			"DESCRIPTION2",
			"DESCRIPTION5",
			"DESCRIPTION8",
			"DESCRIPTION11",
		],
		buttonText: "BUTTON TEXT MAYBE PURCHASE???",
		buttonVariant: "contained",
	},
	{
		title: "TITLE3",
		subheader: "HOW WELL RATED",
		price: "30",
		description: [
			"DESCRIPTION3",
			"DESCRIPTION6",
			"DESCRIPTION9",
			"DESCRIPTION12",
		],
		buttonText: "BUTTON TEXT MAYBE PURCHASE",
		buttonVariant: "outlined",
	},
];

export default function App() {
	const classes = useStyles();

	// const [data, setData] = useState({});
	// const [search, setSearch] = useState({});

	// useEffect(() => {
	// 	fetch('/recommendations').then(
	// 		res => res.json()
	// 	).then(
	// 		data => {
	// 			setData(data);
	// 		}
	// 	);
	// }, []);

	// useEffect(() => {
	// 	fetch('/search/' + 'harry').then(
	// 		res => res.json()
	// 	).then(
	// 		search => {
	// 			setSearch(search)
	// 		}
	// 	);
	// }, []);

	return (
		<div>
			<Router history={history}>
				<BookRecommendation />
			</Router>
		</div>
	);
}

// import React from "react";
// import BookRecommendation from "./Pages/BookRecommendation";

// export default function App() {
// 	return (
// 		<div>
// 			<BookRecommendation />
// 		</div>
// 	);
// }
