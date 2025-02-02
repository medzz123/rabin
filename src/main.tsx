import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "@mantine/core/styles.css";

import { MantineProvider, Text, createTheme } from "@mantine/core";
import { Home } from ".";

const theme = createTheme({
	fontFamily: '"Space Grotesk", serif',
	headings: { fontFamily: '"Space Grotesk", serif' },
	components: {
		Text: Text.extend({
			defaultProps: {
				c: "white",
			},
		}),
	},
});

const  App = () => {
	return (
		<MantineProvider theme={theme} defaultColorScheme="dark">
			<Home />
		</MantineProvider>
	);
}


const root = document.getElementById("root");

if (root) {
	createRoot(root).render(
		<StrictMode>
			<App />
		</StrictMode>,
	);
} else {
	console.error("Found no element root!");
}
