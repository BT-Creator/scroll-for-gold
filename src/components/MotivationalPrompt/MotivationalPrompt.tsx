import { Notification } from "@mantine/core";
import { useEffect, useRef, useState } from "react";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { IoThumbsUp } from "react-icons/io5";
import { PiHandsClapping, PiSword } from "react-icons/pi";

interface prompt {
    title: string;
    description: string;
    icon: JSX.Element;
}

function getRandomPrompt(selection: Array<prompt>){
    // TODO: Make sure that the same prompt is returned twice
    return  selection[Math.floor(Math.random() * (selection.length))];
}

export default function MotivationalPrompt() {
    const [prompt, setPrompt] = useState({
        "title": "Good Luck!",
        "description": "Just keep scrolling and you'll get there!",
        "icon": <IoThumbsUp/>
    })

    const prompts = useRef([
        {
          "title": "Nice going!",
          "description": "You've been scrolling so well, keep going 👍",
          "icon": <PiHandsClapping/>
        },
        {
          "title": "Nice scroll bruh",
          "description": "You keep on scrolling, bro, you rock 🤘",
          "icon": <AiOutlineThunderbolt/>
        },
        {
          "title": "Sun Tzu once said...",
          "description": "\"A leader leads by example not force\" (You are that leader btw)",
          "icon": <PiSword />
        }
      ])

    useEffect(() => {
        setInterval(() => setPrompt(getRandomPrompt(prompts.current)), 10000)
    }, [])

    return (
        <Notification title={prompt.title} withCloseButton={false} icon={prompt.icon}>
            {prompt.description}
        </Notification>
    );
}