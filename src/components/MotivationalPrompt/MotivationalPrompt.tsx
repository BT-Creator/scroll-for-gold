import { Notification } from "@mantine/core";
import { useEffect, useRef, useState } from "react";
import { AiFillThunderbolt } from "react-icons/ai";
import { IoArrowUp, IoFlame, IoSparkles, IoThumbsUp } from "react-icons/io5";
import { PiHandsClapping, PiSword } from "react-icons/pi";

export default function MotivationalPrompt() {
    const [prompt, setPrompt] = useState({
        "id": 0,
        "title": "Good Luck!",
        "description": "Just keep scrolling and you'll get there!",
        "icon": <IoThumbsUp />
    })
    const prompts = useRef([
        {
            "id": 1,
            "title": "Nice going!",
            "description": "You've been scrolling so well, keep going 👍",
            "icon": <PiHandsClapping />,
        },
        {
            "id": 2,
            "title": "Nice scroll bruh",
            "description": "You keep on scrolling, bro, you rock 🤘",
            "icon": <AiFillThunderbolt />
        },
        {
            "id": 3,
            "title": "Sun Tzu once said...",
            "description": "\"A leader leads by example not force\" (You are that leader btw)",
            "icon": <PiSword />
        },
        {
            "id": 4,
            "title": "Power Scroll!",
            "description": "For the next 10 seconds, you can scroll twice as fast!",
            "icon": <IoSparkles/>
        },
        {
            "id": 5,
            "title": "SUPER scroll!",
            "description": "For the next 10 seconds, your scroll speed TRIPLES!",
            "icon": <IoFlame/>
        },
        {
            "id": 6,
            "title": "Top 50% of all scrollers",
            "description": "You are in the top 50% of all scrollers worldwide! Keep going!",
            "icon": <IoArrowUp />
        }
    ])

    const intervalId = useRef(0)

    useEffect(() => {
        if(intervalId.current === 0){
            intervalId.current = setInterval(() => setPrompt(
            (prompt.id === 0) 
                ? prompts.current[Math.floor(Math.random() * (prompts.current.length))]
                : prompts.current.filter((candidate) => candidate.id !== prompt.id)[Math.floor(Math.random() * (prompts.current.length))]), 
        10000)
        }
    })

    return (
        <Notification title={prompt.title} withCloseButton={false} icon={prompt.icon}>
            {prompt.description}
        </Notification>
    );
}