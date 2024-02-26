import { Text } from "@mantine/core";
import { useEffect, useState } from "react";

interface TimerProps {
    autoStart: boolean
}

export default function Timer({autoStart}:TimerProps){
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [active, _setActive] = useState(autoStart)
    const [time, setTime] = useState(0)

    useEffect(() => {
        let interval;
        (active)
            ? interval = setInterval(() => setTime((time) => time + 10), 20)
            : clearInterval(interval)
    }, [active])

    return (
        <>
            <Text>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:{("0" + Math.floor((time / 1000) % 60)).slice(-2)}.{("0" + ((time / 10) % 100)).slice(-2)}</Text>
        </>
    );
}