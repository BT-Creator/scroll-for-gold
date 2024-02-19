import { Group, Container, Notification, Affix, Transition } from "@mantine/core";
import { useState } from "react";
import ReactVisibilitySensor from "react-visibility-sensor";

function generateRainbow(randomized: boolean) {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    if (!randomized) {
        return colors.map(color => <Container h="99vh" bg={color}></Container>)
    } else {
        const elements = []
        while (colors.length > 0) {
            const index = Math.floor(Math.random() * colors.length)
            const color = colors[index];
            elements.push(<Container h="99vh" bg={color}></Container>)
            colors.splice(index, 1)
            console.log(color);
        }
        return elements
    }

}

export default function DragDropRainbow() {
    const [intersecting, setIntersecting] = useState(false)
    const wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel'

    function onChange(intersecting: boolean) {
        setIntersecting(intersecting);
        if (intersecting) {
            window.addEventListener("DOMMouseScroll", e => e.preventDefault(), false)
            window.addEventListener(wheelEvent, e => e.preventDefault(), { passive: false })
            window.addEventListener("touchmove", e => e.preventDefault(), { passive: false })
            window.addEventListener("keydown", e => console.log(e.key), false)
        }
    }

    return (
        <>
            <ReactVisibilitySensor onChange={onChange}>
                <Group justify="center" grow gap="0">
                    {generateRainbow(intersecting)}
                </Group>
            </ReactVisibilitySensor>
            <Transition
                mounted={intersecting}
                transition="slide-left"
                timingFunction="ease"
                duration={400}>
                {() => (
                    <Affix position={{ top: 10, right: 10 }}>
                        <Notification withCloseButton={false} title="Hmmmm... Something's wrong">
                            You'll need to put the rainbow in the correct order if you want to continue
                        </Notification>
                    </Affix>
                )}
            </Transition>
        </>
    )
}