import { Box, Group, Image, Stack, Text } from "@mantine/core";

export const Explainer: React.FC = () => {
	return (
		<Box py={144}>
			<Group justify="space-between" align="flex-start" gap={48}>
				<Box flex={1}>
					<Stack gap={32}>
						<Text fz={84} fw="bold" lh={1.25}>
							About Muscle Mastery
						</Text>
						<Text fz={24} c="dimmed">
							At Vitality Fit, we're passionate about helping you achieve your
							fitness goals and lead a healthier, happier life. With our
							personalized approach to personal training, we prioritize your
							unique needs, preferences, and fitness levels to design a program
							that works just for you.
						</Text>
						<Image src="guy.webp" style={{ borderRadius: 16 }} />
					</Stack>
				</Box>
				<Box flex={1}>
					<Stack gap={32}>
						<Text fz={48} lh={1.1}>
							We believe in fostering a positive and inclusive atmosphere where
							you can feel comfortable and confident.
						</Text>
						<Text fz={24} c="dimmed">
							We're not just about workouts; we're about building relationships
							and empowering individuals to live their healthiest lives. Join
							our community today and experience the difference that
							personalized training and unwavering support can make in your
							journey to vitality and well-being.
						</Text>
					</Stack>
				</Box>
			</Group>
		</Box>
	);
};
