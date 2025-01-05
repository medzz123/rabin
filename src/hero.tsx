import { Box, Button, Group, Stack, Text } from "@mantine/core";
import type React from "react";
import { Stat } from "./stat";

export const Hero: React.FC = () => {
	return (
		<Group w="100%" h="100%" align="center" justify="space-between" my="xl">
			<Stack flex={1} gap="xl">
				<Text fz={24} fw="bold">
					Customize for real results
				</Text>
				<Text fz={84} fw="bold" lh={1}>
					Achieve your fitness goals
				</Text>

				<Group>
					<Button size="lg" variant="outline">
						Services
					</Button>
					<Button size="lg">Get in touch</Button>
				</Group>
			</Stack>
			<Box flex={1}>
				<Group justify="flex-end">
					<Box>
						<Stat number={350} label="Total transformations" />
						<Stat number={5000} label="Training sessions" />
						<Stat number={50} label="Community events" />
						<Stat number={100} label="Educational content pieces" />
					</Box>
				</Group>
			</Box>
		</Group>
	);
};
