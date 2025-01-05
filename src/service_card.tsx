import { Card, Stack, Text, ThemeIcon } from "@mantine/core";
import type { Icon, IconProps } from "@tabler/icons-react";

type ServiceCardProps = {
	icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<Icon>>;
	title: string;
	description: string;
};

export const ServiceCard: React.FC<ServiceCardProps> = (props) => {
	const { icon, title, description } = props;

	const Icon = icon;

	return (
		<Card
			flex={1}
			miw={250}
			bg="#1C2A1B"
			radius={32}
			padding="xl"
			style={{ border: "3px solid #DBF934" }}
		>
			<Stack gap={16}>
				<ThemeIcon
					size={64}
					radius={32}
					styles={{
						root: {
							border: "2px solid #DBF934",
							backgroundColor: "#303E1F",
						},
					}}
				>
					<Icon size={28} color="#DBF934" />
				</ThemeIcon>
				<Text fz={24} fw="bold">
					{title}
				</Text>
				<Text fz={16}>{description}</Text>
			</Stack>
		</Card>
	);
};
