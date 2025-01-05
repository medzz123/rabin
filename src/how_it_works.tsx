import { Box,  List, Stack, Text } from "@mantine/core";

export const HowItWorks: React.FC = () => {
	return (
		<Box py={144}>
			<Stack gap={32}>
				<Text fz={84} fw="bold">
					How It Works
				</Text>
				<Text fz={24} maw={960}>
					Embark on your fitness journey with ease by following these simple
					steps to get started with Vitality Fit. Our streamlined process
					ensures that you receive personalized attention from day one, setting
					you up for success on your path to improved health and vitality.
				</Text>

				<List type="ordered">
					<List.Item>
						Schedule a complimentary consultation with one of our knowledgeable
						trainers. During this session, we'll discuss your fitness goals,
						assess your current fitness level, and tailor a plan that aligns
						with your objectives and preferences.
					</List.Item>
				</List>
			</Stack>
		</Box>
	);
};
