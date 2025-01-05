import { Box, Text } from "@mantine/core";

type StatProps = {
	number: number;
	label: string;
};

export const Stat: React.FC<StatProps> = (props) => {
	const { number, label } = props;

	return (
		<Box maw={250} py={16}>
			<Text ta="right" lts={-1} fz={48} fw="bold">
				{number}+
			</Text>
			<Text ta="right" fz={18} fw="bold">
				{label}
			</Text>
		</Box>
	);
};
