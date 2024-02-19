import { Group, Container } from "@mantine/core";
import { useState } from "react";
import ReactVisibilitySensor from "react-visibility-sensor";

export default function DragDropRainbow(){
    const [visible, setVisible] = useState(false)
    const wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel'

    function onChange(intersecting:boolean) {
        setVisible(intersecting);
        console.log(intersecting);
        if(intersecting){
            console.log("Locking Position")
            window.addEventListener("DOMMouseScroll", e => e.preventDefault(), false)
            window.addEventListener(wheelEvent, e => e.preventDefault(), {passive: false})
            window.addEventListener("touchmove", e => e.preventDefault(), {passive: false})
            window.addEventListener("keydown", e => console.log(e.key), false)
        }
    }

    return (
        <ReactVisibilitySensor onChange={onChange}>
            <Group justify="center" grow gap="0">
                <Container bg='red' h='99vh'/>
                <Container bg='orange' h='99vh'/>
                <Container bg='yellow' h='99vh'/>
                <Container bg='green' h='99vh'/>
                <Container bg='blue' h='99vh'/>
                <Container bg='indigo' h='99vh'/>
                <Container bg='violet' h='99vh'/>
            </Group>
        </ReactVisibilitySensor>
    )
}