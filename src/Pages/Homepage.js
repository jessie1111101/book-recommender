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
import Search from "../Components/Search";

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

export default function Homepage() {
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
        fetch('/getAllTitles').then(
            res => res.json()
        ).then(
            titles => {
                setTitles(titles)
            }
        );
    }, []);

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
                        Find your next read below! What is a book you enjoyed?
					</Typography>
                    <Search options={titles.titles} />
                </Container>

            </React.Fragment>
        </div>
    );
}
