import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import CssBaseline from "@material-ui/core/CssBaseline";

import history from "./history";
import TopBar from "./Components/TopBar";
import BookRecommendation from "./Pages/BookRecommendation/BookRecommendation";
import Footer from "./Components/Footer";

// const useStyles = makeStyles((theme) => ({
// 	"@global": {
// 		ul: {
// 			margin: 0,
// 			padding: 0,
// 			listStyle: "none",
// 		},
// 	},
// 	link: {
// 		margin: theme.spacing(1, 1.5),
// 	},
// 	heroContent: {
// 		padding: theme.spacing(8, 0, 6),
// 	},
// 	cardHeader: {
// 		backgroundColor:
// 			theme.palette.type === "light"
// 				? theme.palette.grey[200]
// 				: theme.palette.grey[700],
// 	},
// cardPricing: {
// 	display: "flex",
// 	justifyContent: "center",
// 	alignItems: "baseline",
// 	marginBottom: theme.spacing(2),
// },
// }));

// const tiers = [
// 	{
// 		title: "TITLE1",
// 		subheader: "HOW WELL RATED",
// 		price: "0",
// 		description: [
// 			"DESCRIPTION1",
// 			"DESCRIPTION4",
// 			"DESCRIPTION7",
// 			"DESCRIPTION10",
// 		],
// 		buttonText: "BUTTON TEXT MAYBE PURCHASE??",
// 		buttonVariant: "outlined",
// 	},
// 	{
// 		title: "TITLE2",
// 		subheader: "HOW WELL RATED",
// 		price: "15",
// 		description: [
// 			"DESCRIPTION2",
// 			"DESCRIPTION5",
// 			"DESCRIPTION8",
// 			"DESCRIPTION11",
// 		],
// 		buttonText: "BUTTON TEXT MAYBE PURCHASE???",
// 		buttonVariant: "contained",
// 	},
// 	{
// 		title: "TITLE3",
// 		subheader: "HOW WELL RATED",
// 		price: "30",
// 		description: [
// 			"DESCRIPTION3",
// 			"DESCRIPTION6",
// 			"DESCRIPTION9",
// 			"DESCRIPTION12",
// 		],
// 		buttonText: "BUTTON TEXT MAYBE PURCHASE",
// 		buttonVariant: "outlined",
// 	},
// ];

export default function App() {
	// const classes = useStyles();

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
			<CssBaseline />
			<TopBar />
			<Router history={history}>
				<Switch>
					<Route path="/recommendation">
						<BookRecommendation />
					</Route>
					<Route path="/">
						<h1>Search</h1>
					</Route>
				</Switch>
			</Router>
			<Footer />
		</div >
	);
}