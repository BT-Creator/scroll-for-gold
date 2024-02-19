import './App.css'
import '@mantine/core/styles.css';
import { MantineProvider, Flex, Container } from '@mantine/core';
import NormalRainbow from './components/rainbow/NormalRainbow'
import HeroHeading from './components/HeroHeading/HeroHeading';
import Header from './components/Header/Header';

function App() {
  return (
    <MantineProvider>
      <Header/>
      <Container fluid>
        <Flex
        gap="md"
        justify="center"
        align="center"
        direction="column"
        wrap="nowrap">
        <HeroHeading 
          title='Scroll for Gold'
          text="At the end of the page, there's a pot of gold, just for you! Just scroll down and try to get it ^^"/>
        <NormalRainbow/>
      </Flex>
      </Container>
    </MantineProvider>
  )
}

export default App
