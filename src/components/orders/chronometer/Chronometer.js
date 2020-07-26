import React from 'react';
import { useStopwatch } from 'react-timer-hook';
import { firebase } from '../../../firebase/firebaseConfig';
import './chronometer.css';

function Chronometer({ item }) {

    const {
        seconds,
        minutes,
        start,
        pause,
    } = useStopwatch({ autoStart: false });

    const totalTime = async (minutes, seconds) => {
        const total = minutes + ':' + seconds + 'minutos';

        await firebase
            .firestore()
            .collection('orders')
            .doc(item.id)
            .update({
                waitTime: (total)
            })
            .then(function () {
                console.log("Document successfully updated!");
            })
            .catch(function (error) {
                console.error("Error updating document: ", error);
            });
    };

    return (
        <div className='chronometer'>
            <span>{minutes}</span>:<span>{seconds}</span>
            <div className='btns-chrm'>
                <button className='btn-opt-chrm' onClick={start}>Iniciar</button>
                <button className='btn-opt-chrm' onClick={pause}>Detener</button>
                <button className='btn-update-time' onClick={() => { totalTime(minutes, seconds); }}></button>
            </div>
        </div>
    );
}
export default Chronometer;
