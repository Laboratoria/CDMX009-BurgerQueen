import React from 'react';
import { ordersSetDelivered } from '../../../firebase/firebase-config';;


const Ready = ({ readys, ready, changeReady }) => {

    const { date, deliveryDate, table, state, id } = readys

    const starTime = date;
    const endTime = deliveryDate;
    let timeDifference = (endTime) - (starTime);
    let min = Math.floor(timeDifference / 60);
    const Entregado = (i) => {
        const newDelivered = ready.filter(read => read.id !== id);
        changeReady(newDelivered);
        ordersSetDelivered(id);
    }
    return (
        <div >
            <div className='contentList' >
                <div className='list'>
                    {min} min
                </div>
                <div className='list'>
                    {table}
                </div>
                <div className='list'>
                    <p className="list-green" >
                        {state == 'ready' ? 'Listo' : null}
                    </p>
                </div>
                <div className='list'>
                    <i className="fas fa-check-circle icon-delivered" onClick={() => Entregado(id)}></i>
                </div>
            </div>
        </div>
    )
}
export default Ready; 