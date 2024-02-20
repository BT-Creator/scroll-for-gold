import { Container, Group } from '@mantine/core';
import './Rainbow.css';

export default function Rainbow(){
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

    return (
        <Group justify="center" grow gap="0">
            {colors.map(color => <Container bg={color} h='2000'/>)}
        </Group>
    )
}