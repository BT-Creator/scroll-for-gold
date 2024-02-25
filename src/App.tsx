import './App.css'
import '@mantine/core/styles.css';
import { MantineProvider, Flex, Container, Affix, Button } from '@mantine/core';
import Rainbow from './components/Rainbow/Rainbow'
import HeroHeading from './components/HeroHeading/HeroHeading';
import Header from './components/Header/Header';
import ReactVisibilitySensor from 'react-visibility-sensor';
import { useRef, useState } from 'react';
import TimerNotification from './components/TimerNotifcation/TimerNotification';
import MotivationalPrompt from './components/MotivationalPrompt/MotivationalPrompt';

/** 
 * TODO: Add quit button that changes text multiple times
 */

function App() {
  const [intersect, setIntesect] = useState(true)
  const [quitText, setQuitText] = useState("I give up 😞")
  const quitStrings = useRef([
    "Are you sure?",
    "Like, really?",
    "But, Gold!",
    "Last chance...",
  ])

  function onChange(intersecting: boolean) {
    setIntesect(intersecting);
    if (!intersecting) {
      window.addEventListener("DOMMouseScroll", e => e.preventDefault(), false)
      window.addEventListener('onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel', e => e.preventDefault(), { passive: false })
      window.addEventListener("touchmove", e => e.preventDefault(), { passive: false })
      window.addEventListener("keydown", e => console.log(e.key), false)
    }
  }

  function onClick(){
    if(quitStrings.current.length > 0){
      const nextText = quitStrings.current[0]
      setQuitText(nextText)
      quitStrings.current = quitStrings.current.filter(text => text !== nextText)
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
          {!intersect &&
            <Affix position={{ top: 10, left: 10 }}>
              <MotivationalPrompt />
            </Affix>}
          {!intersect &&
            <Affix position={{ bottom: 10, left: 10 }}>
              <TimerNotification autoStart/>
            </Affix>}
          {!intersect &&
            <Affix position={{bottom: 10, right: 10}}>
              <Button onClick={onClick}>{quitText}</Button>
            </Affix>
          }
          <Rainbow />
        </Flex>
      </Container>
    </MantineProvider>
  )
}

export default App
