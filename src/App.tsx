import './App.css'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import GameScreen from './pages/GameScreen';
import GameState from './contexts/GameStateContext';
import { useState } from 'react';
import GameOverScreen from './pages/GameOverScreen';


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
          ? <GameOverScreen/>
          : <GameScreen/> }
      </GameState.Provider>
    </MantineProvider>
  )
}

export default App
