import { Router, Route, Switch } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./App.scss";

import CssBaseline from "@material-ui/core/CssBaseline";

import history from "./history";
import TopBar from "./Components/TopBar";
import BookRecommendation from "./Pages/BookRecommendation";
import Homepage from "./Pages/Homepage";
import Footer from "./Components/Footer";

export default function App() {

	const [selected, setSelected] = useState("");
	const [displayError, setDisplayError] = useState(false);

	const handleOnClick = () => {
		if (selected == "") {
			setDisplayError(true);
		} else {
			setDisplayError(false);
			console.log("router display results " + selected);
			history.push("/recommendation");
		}
	};

	const updateSelected = (title) => {
		setSelected(title);
	};

	const goHome = () => {
		setSelected("");
		history.push("/");
	};

	return (
		<div>
			<CssBaseline />
			<TopBar goHome={goHome} />
			<Router history={history}>
				<Switch>
					<Route path="/recommendation">
						<BookRecommendation book={selected} />
					</Route>
					<Route path="/">
						<Homepage
							handleOnClick={handleOnClick}
							displayError={displayError}
							updateSelected={updateSelected}
						/>
					</Route>
				</Switch>
			</Router>
			<h5 />
			<Footer />
		</div>
	);
}
