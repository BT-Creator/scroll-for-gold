import { createContext } from "react";

const GameState = createContext({
    state: {},
    switchGameState: () => {}
})

export default GameState