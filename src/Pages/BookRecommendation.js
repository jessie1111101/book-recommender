import React, { useState, useEffect } from "react";

import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Grid from "@material-ui/core/Grid";
import StarIcon from "@material-ui/icons/StarBorder";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { IsoRounded } from "@material-ui/icons";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import theme from "../theme";

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
				? "#F9CA5C"
				: theme.palette.grey[700],
	},
	button: {
		color: "rgb(76, 83, 145)",
		border: "rgb(76, 83, 145)",
	},
	// cardPricing: {
	// 	display: "flex",
	// 	justifyContent: "center",
	// 	alignItems: "baseline",
	// 	marginBottom: theme.spacing(2),
	// },
}));

export default function BookRecommendation(props) {
	const classes = useStyles();
	const { book } = props;

	const [card, setCard] = useState({});
	const [tiers, setTiers] = useState([
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
			image: "https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png"
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
			image: "https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png"
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
			image: "https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png"
		},
	]);

	useEffect(() => {
		fetch("/recommendations/" + encodeURIComponent(book))
			.then((res) => res.json())
			.then((recs) => {
				setTiers(populateBooks(recs));
			});
	}, []);

	const populateBooks = (recs) => {
		var tiers = [];
		for (let i = 0; i < 3; i++) {
			const currentCard = {
				title: recs[i].title,
				subheader: recs[i].authors,
				price: "0",
				description: [
					"Original Publication Year: " + recs[0].original_publication_year,
					"Average Rating: " + recs[0].average_rating,
				],
				buttonText: "Purchase",
				buttonVariant: "outlined",
				image: "https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png"
			};
			fetch("/search/" + encodeURIComponent(recs[i].title))
				.then((res) => res.json())
				.then((data) => {
					currentCard.image = data && data.books && data.books.work ?
						data.books.work.constructor !== Array ? data.books.work.best_book.image_url
							: data.books.work[0].best_book.image_url
						: "https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png";
					setCard(currentCard);
				});
			tiers.push(currentCard);
		}

		return tiers;
	};

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
							Find your next read below!
						</Typography>
					</Container>
					{/*End of title/subtitle segment or HERO CONTENT*/}
					<Container maxWidth="md" component="main">
						<Grid container spacing={5} alignItems="flex-end">
							{tiers.map((tier) => (
								<Grid
									item
									key={tier.title}
									xs={12}
									sm={tier.title === "Enterprise" ? 12 : 6}
									md={4}
								>
									<Card>
										<CardHeader
											title={tier.title}
											subheader={tier.subheader}
											titleTypographyProps={{ align: "center" }}
											subheaderTypographyProps={{ align: "center" }}
											action={tier.title === "Pro" ? <StarIcon /> : null}
											className={classes.cardHeader}
										/>
										<CardContent>
											<ul>
												{tier.description.map((line) => (
													<Typography
														component="li"
														variant="subtitle1"
														align="center"
														key={line}
													>
														{line}
													</Typography>
												))}
											</ul>
										</CardContent>
										<CardActions>
											<img
												src={tier.image}
												alt="new"
											/>
											{/* <Button
												fullWidth
												variant={tier.buttonVariant}
												className={classes.button}
											>
												{tier.buttonText}
											</Button> */}
										</CardActions>
									</Card>
								</Grid>
							))}
						</Grid>
					</Container>
				</React.Fragment>
			</ThemeProvider>
		</div>
	);
}
