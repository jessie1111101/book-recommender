import React from "react";

import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

export default function Copyright() {
	return (
		<Typography variant="body2" color="primary" align="center">
			{"Copyright © Big Brain - PennApps XXII"}
			{/* <Link color="primary" href="https://material-ui.com/">
				
			</Link> */}{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}
