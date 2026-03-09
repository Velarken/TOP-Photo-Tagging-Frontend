import { useEffect, useState } from "react";

export function Timer({}) {

    const [isTimerRunning,setIsTimerRunning] = useState(false);
    const [currentSeconds,setCurrentSeconds] = useState(40);
    const [currentMinutes,setCurrentMinutes] = useState(0);
    const [currentHours,setCurrentHours] = useState(0);

    useEffect(() => {
        if (isTimerRunning) {
            const intervalID = setInterval(() => {
                if (currentSeconds < 59) {
                    setCurrentSeconds((currentSeconds) => currentSeconds + 1)
                } else if (currentSeconds == 59) {
                    setCurrentSeconds(0)
                    setCurrentMinutes((currentMinutes) => currentMinutes + 1)
                } else {
                    setCurrentSeconds(0);
                    setCurrentMinutes((currentMinutes) => currentMinutes + 1)
                }

            }, 1000)
            return () => clearInterval(intervalID)
        }
    }, [currentSeconds,currentMinutes,isTimerRunning])

    return (
        <>
            <button onClick={() => setIsTimerRunning(!isTimerRunning)}>
                {isTimerRunning
                ? 'Pause Game'
                : 'Resume Game'
                }</button>
            <div className="timer-display">
                {currentHours + ' : ' + currentMinutes + ' : ' + currentSeconds}
            </div>
        </>
    )
}
export default Timer;