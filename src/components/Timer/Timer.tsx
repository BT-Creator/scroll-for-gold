import { Text } from "@mantine/core";
import { useEffect, useState } from "react";

/**
 * TODO: Implement timer functionality
 */
interface TimerProps {
    autoStart: boolean
}

export default function Timer({autoStart}:TimerProps){
    const [active, setActive] = useState(autoStart)
    const [time, setTime] = useState(0)

    useEffect(() => {
        let interval;
        (active)
            ? interval = setInterval(() => setTime((time) => time + 10), 10)
            : clearInterval(interval)
    }, [active])

    return (
        <>
            <Text>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:{("0" + Math.floor((time / 1000) % 60)).slice(-2)}.{("0" + ((time / 10) % 100)).slice(-2)}</Text>
        </>
    );
}