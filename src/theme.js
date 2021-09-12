import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
	palette: {
		primary: {
			light: "#F49493",
			main: "#FFFFFF",
			dark: "#4f9b94",
			contrastText: "#4C5391",
		},
		secondary: {
			light: "#9fa8da",
			main: "#F9CA5C",
			dark: "#Dark",
			contrastText: "#4C5391",
		},
		textPrimary: {
			main: "#4C5391",
		},
		background: {
			default: "#e4f0e2",
			contrastText: "#4C5391",
		},
	},
});

export default theme;
