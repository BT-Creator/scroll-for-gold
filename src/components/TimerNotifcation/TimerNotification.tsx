import { Notification } from "@mantine/core";
import { IoStopwatch } from "react-icons/io5";
import Timer from "../Timer/Timer";

interface TimerNotifcationProps {
    autoStart: boolean
}

export default function TimerNotification({ autoStart }: TimerNotifcationProps) {
    return (
        <Notification  title="Timer" withCloseButton={false} icon={<IoStopwatch/>}>
            <Timer autoStart={autoStart} />
        </Notification>
    );
}