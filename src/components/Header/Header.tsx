import './Header.module.css'
import { Group, Text } from "@mantine/core";

export default function Header(){
    return (
        <Group justify="space-between" p="lg" bg="black" wrap="nowrap">
            <Text size="md" fw={700} c="white">Scroll For Gold</Text>
            <a href="https://uselessweb.weareimd.be">Part of IMD's useless websites</a>
        </Group>
    );
}