import { Group, Text } from "@mantine/core";

export default function Header(){
    return (
        <Group justify="space-between" p="lg" bg="black" wrap="nowrap">
            <Text size="md" fw={700} c="white">Scroll For Gold</Text>
            <Text size="sm" c="white" >Part of IMD's useless websites</Text>
        </Group>
    );
}