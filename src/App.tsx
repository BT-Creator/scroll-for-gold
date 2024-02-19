import './App.css'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import Rainbow from './components/rainbow/Rainbow'

function App() {
  return (
    <MantineProvider>
      <section>
        <h1>Scroll for Gold</h1>
        <p>At the end of the page, there's a pot of gold, just for you! Just scroll down and try to get it ^^</p>
      </section>
      <Rainbow/>
    </MantineProvider>
  )
}

export default App
