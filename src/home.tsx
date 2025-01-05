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

export default function App() {
	return (
		<MantineProvider theme={theme} defaultColorScheme="dark">
			<Home />
		</MantineProvider>
	);
}
