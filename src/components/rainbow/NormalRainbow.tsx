import { Container, Group } from '@mantine/core';
import './NormalRainbow.css';

export default function NormalRainbow(){
    return (
        <Group mt='md' justify="center" grow gap="0">
            <Container bg='red' h='2000'/>
            <Container bg='orange' h='2000'/>
            <Container bg='yellow' h='2000'/>
            <Container bg='green' h='2000'/>
            <Container bg='blue' h='2000'/>
            <Container bg='indigo' h='2000'/>
            <Container bg='violet' h='2000'/>
        </Group>
    )
}