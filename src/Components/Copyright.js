import React from "react";

import Typography from "@material-ui/core/Typography";
// import Link from "@material-ui/core/Link";
import { ThemeProvider } from "@material-ui/styles";

import theme from "../theme";

export default function Copyright() {
	return (
		<ThemeProvider theme={theme}>
			<Typography variant="body2" color="textPrimary" align="center">
				{"Copyright © Big Brain - PennApps XXII"}
				{/* <Link color="primary" href="https://material-ui.com/">
				
			</Link> */}{" "}
				{new Date().getFullYear()}
				{"."}
			</Typography>
		</ThemeProvider>
	);
}
