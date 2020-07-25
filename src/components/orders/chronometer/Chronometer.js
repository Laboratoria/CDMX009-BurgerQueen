import React from 'react';
import { useStopwatch } from 'react-timer-hook';
import './chronometer.css';

function Chronometer() {
    const {
        seconds,
        minutes,
        start,
        pause,
    } = useStopwatch({ autoStart: false });



    return (
        <div className='chronometer'>
            <span>{minutes}</span>:<span>{seconds}</span>
            <div className='btns-chrm'>
                <button className='btn-opt-chrm' onClick={start}>Iniciar</button>
                <button className='btn-opt-chrm' onClick={pause}>Detener</button>
            </div>
        </div>
    );
}
export default Chronometer;
