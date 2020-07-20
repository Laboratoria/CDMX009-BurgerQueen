import React, { useRef, useState, useEffect } from 'react';

const Chronometer = () => {
    const intervalRef = useRef();

    const [state, setState] = useState({ //aqui determinamos que el contador este estatico con un valor de 0
        total: 0,
        minutes: 0,
        isCounting: false,
    });

    useEffect(() => () => clearInterval(intervalRef.current), []); //retornar el cronometro a 0?

    const { total, minutes, isCounting } = state;

    const onStartBtnClick = () => {
        const clickTime = new Date().getTime();
        if (!isCounting) {
            intervalRef.current = setInterval(() => {
                const totalTime = total + new Date().getTime() - clickTime;
                setState({ total: totalTime, isCounting: true });
                if (totalTime > 5999) {
                    console.log('segundo');
                    const minAdd = minutes + 1;
                    setState({ total: 0, minutes: minAdd, isCounting: true });
                }
            }, 1000);
        } else {
            clearInterval(intervalRef.current);
            const totalTime = total + new Date().getTime() - clickTime;
            setState({ isCounting: false, total: totalTime });
        }
    };

    const onClearBtnClick = () => {
        clearInterval(intervalRef.current);
        setState({ isCounting: false, total: 0 });
    };

    return (
        <section>
            <div className="timer">{minutes} : {Math.floor(total / 1000)} ms</div>
            <button
                className={isCounting ? "button button--stop" : "button button--start"}
                onClick={onStartBtnClick}
            >
                {isCounting ? 'STOP' : (total !== 0 ? 'CONTINUE' : 'START')}
            </button>

            <button className="button" onClick={onClearBtnClick}>
                CLEAR
        </button>
        </section>
    );
};

export default Chronometer; 