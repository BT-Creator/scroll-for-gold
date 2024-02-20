import './App.css'
import '@mantine/core/styles.css';
import { MantineProvider, Flex, Container } from '@mantine/core';
import Rainbow from './components/Rainbow/Rainbow'
import HeroHeading from './components/HeroHeading/HeroHeading';
import Header from './components/Header/Header';
import ReactVisibilitySensor from 'react-visibility-sensor';
import { useState } from 'react';

/**
 * TODO: Add timer that activates when HeroHeading is not intersecting
 * TODO: Add periodic notification that motivates users with fake info
 * TODO: Add quit button that changes text multiple times
 */

function App() {
  const [intersect, setIntesect] = useState(true)

  function onChange(intersecting: boolean) {
    setIntesect(intersecting);
    if (!intersecting) {
      window.addEventListener("DOMMouseScroll", e => e.preventDefault(), false)
      window.addEventListener('onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel', e => e.preventDefault(), { passive: false })
      window.addEventListener("touchmove", e => e.preventDefault(), { passive: false })
      window.addEventListener("keydown", e => console.log(e.key), false)
    }
  }

  return (
    <MantineProvider>
      <Header />
      <Container fluid>
        <Flex
          gap="0"
          justify="center"
          align="center"
          direction="column"
          wrap="nowrap">
          <ReactVisibilitySensor onChange={onChange}>
            <HeroHeading
              title='Scroll for Gold'
              text="At the end of the page, there's a pot of gold, just for you! Just scroll down and try to get it ^^" />
          </ReactVisibilitySensor>
          <Rainbow />
        </Flex>
      </Container>
    </MantineProvider>
  )
}

export default App
