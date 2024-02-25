import { Flex, Title, Text, Container, Button } from "@mantine/core";
import { useContext } from "react";
import GameState from "../contexts/GameStateContext";

export default function GameOverScreen(){
    const gameState = useContext(GameState)

    return(
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
                <Button onClick={() => gameState.switchGameState()}>Try again</Button>
            </Flex>
        </Container>
    )
}