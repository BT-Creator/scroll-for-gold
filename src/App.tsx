import './App.css'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import GameScreen from './pages/GameScreen';
import GameState from './contexts/GameStateContext';
import { useState } from 'react';


function App() {
  const switchGameState = () => {
    setGame((currentState) => ({
      state: !currentState.state,
      switchGameState
    }))
  }
  
  const [game, setGame] = useState({
    state: false,
    switchGameState
  })

  return (
    <MantineProvider>
      <GameState.Provider value={game}>
        {game.state
          ? <p>You lost</p>
          : <GameScreen /> }
      </GameState.Provider>
    </MantineProvider>
  )
}

export default App
