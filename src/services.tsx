import { Box, Group, Stack, Text } from "@mantine/core";
import { IconBodyScan, IconDumpling, IconPencil } from "@tabler/icons-react";
import { ServiceCard } from "./service_card";

export const Services: React.FC = () => {
	return (
		<Box py={144}>
			<Stack gap={32}>
				<Text fz={84} fw="bold">
					Services
				</Text>
				<Text fz={24} maw={960} mb="xl">
					Discover a range of tailored services designed to meet your fitness
					needs and elevate your training experience. Whether you're a beginner
					looking to kickstart your fitness journey or an experienced athlete
					seeking to enhance performance, our services are crafted to deliver
					results that exceed expectations.
				</Text>
				<Group align="stretch" gap={32}>
					<ServiceCard
						icon={IconDumpling}
						title="Personalized Training Sessions"
						description="Enjoy one-on-one sessions with our expert trainers, where every exercise is customized to your fitness level and goals. Whether you prefer strength training, cardio, or flexibility-focused workouts, we've got you covered."
					/>
					<ServiceCard
						icon={IconPencil}
						title="Nutritional Guidance"
						description="Achieve optimal results with personalized nutritional plans tailored to complement your training regimen. Our nutrition experts will work with you to create a balanced and sustainable eating plan that fuels your body and supports your fitness goals."
					/>
					<ServiceCard
						icon={IconBodyScan}
						title="Group Fitness Classes"
						description="Join our dynamic group fitness classes for an energizing workout experience in a supportive community setting. From high-intensity interval training (HIIT) to yoga and Pilates, our classes cater to diverse fitness preferences and levels."
					/>
				</Group>
			</Stack>
		</Box>
	);
};
