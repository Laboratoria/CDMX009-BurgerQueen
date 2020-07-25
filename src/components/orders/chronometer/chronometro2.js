import React from 'react';
import { useStopwatch } from 'react-timer-hook';

function Chronometer() {
    const {
        seconds,
        minutes,
        isRunning,
        start,
        pause,
    } = useStopwatch({ autoStart: false });

    return (
        <div>

            <div>
                <span>{minutes}</span>:<span>{seconds}</span>
            </div>
            <button className={!autoStart ? 'start' : 'stop'} onClick={start}>Start</button>
            <button onClick={pause}>Pause</button>
        </div>
    );
}
export default Chronometer;