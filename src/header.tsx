import { Box, Group, Text } from "@mantine/core";

export const Header: React.FC = () => {
	return (
		<Box
			w="100%"
			mb="xl"
			h={88}
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
			}}
		>
			<Text c="white" fz={24} fw="bold">
				Muscle Mastery
			</Text>

			<Group>
				<Text fz={16} fw="bold" c="white">
					Prices
				</Text>
				<Text fz={16} fw="bold" c="white">
					Services
				</Text>
				<Text fz={16} fw="bold" c="white">
					Contact
				</Text>
			</Group>
		</Box>
	);
};
