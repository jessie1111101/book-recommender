import React from "react";

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

export default function BookRecommendation() {
	const classes = useStyles();

	return (
		<div>
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
						color="textPrimary"
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
										<Button
											fullWidth
											variant={tier.buttonVariant}
											color="primary"
										>
											{tier.buttonText}
										</Button>
									</CardActions>
								</Card>
							</Grid>
						))}
					</Grid>
				</Container>
			</React.Fragment>
		</div>
	);
}
