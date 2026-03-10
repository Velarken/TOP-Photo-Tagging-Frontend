import { useEffect, useState } from "react";

export function Timer({}) {

    const [isTimerRunning,setIsTimerRunning] = useState(false);
    const [currentSeconds,setCurrentSeconds] = useState(40);
    const [currentMinutes,setCurrentMinutes] = useState(59);
    const [currentHours,setCurrentHours] = useState(1);

    useEffect(() => {
        if (isTimerRunning) {
            const intervalID = setInterval(() => {
                if (currentSeconds < 59) {
                    setCurrentSeconds((currentSeconds) => currentSeconds + 1);
                } else if (currentSeconds == 59 && currentMinutes < 59) {
                    setCurrentSeconds(0);
                    setCurrentMinutes((currentMinutes) => currentMinutes + 1);
                } else if (currentMinutes == 59) {
                    setCurrentSeconds(0);
                    setCurrentMinutes(0);
                    setCurrentHours((currentHours) => currentHours +1)
                } else {
                    setCurrentSeconds(0);
                    setCurrentMinutes((currentMinutes) => currentMinutes + 1);
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