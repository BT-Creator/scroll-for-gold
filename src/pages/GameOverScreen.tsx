import { Flex, Title, Text, Container, Button } from "@mantine/core";

export default function GameOverScreen() {
    return (
        <Container h='100vh' bg="black">
            <Flex
                justify="center"
                align="center"
                direction="column"
                wrap="wrap"
                h='100vh'
                gap="lg"
            >
                <Title order={1} c="white">Congrats!</Title>
                <Text c="white">You wasted so much time of your life!</Text>
                <Text c="white">Wanna try again?</Text>
                <Button onClick={() => window.location.reload()}>Try again</Button>
            </Flex>
        </Container>
    )
}