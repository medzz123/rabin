import { Box } from "@mantine/core";
import { Explainer } from "./explainer";
import { Header } from "./header";
import { Hero } from "./hero";
import classes from "./home.module.css";
import { HowItWorks } from "./how_it_works";
import { Services } from "./services";

export const Home: React.FC = () => {
	return (
		<Box className={classes.home}>
			<Box mih="100vh" className={classes.container_with_video}>
				<video
					className={classes.video_background}
					src="video.mp4"
					autoPlay
					loop
					muted
				/>
				<Box className={classes.hero}>
					<Box h="100%" className={classes.container}>
						<Header />
						<Hero />
					</Box>
				</Box>
			</Box>
			<Box style={{ backgroundColor: "#061414" }}>
				<Box className={classes.container}>
					<Explainer />
					<Services />
					<HowItWorks />
				</Box>
			</Box>
		</Box>
	);
};
