import React from 'react';
import { db } from '../../../firebase/firebase-config';


const Ready = ({ readys, ready, changeOrderReady }) => {
    const { date, deliveryDate, table, state, id } = readys
    const starTime = date;
    const endTime = deliveryDate;
    let timeDifference = (endTime) - (starTime);
    let min = Math.floor(timeDifference / 60);
    //let seg = (min * 60);  
    //let segfinish = (seg / 60); 
    const Entregado = (i) => {
        console.log(id);
        let onchangeState = db.collection("orders").doc(id);
        onchangeState.update({
            "state": "delivered"
        }).then(function () {
            //alert("Registro cancelado exitosamente");

        }).catch(function (error) {
            console.error("Error updating document: ", error);
        });
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
                    {/* <button className='button-red' type="button" onClick={() => Entregado(id)}>Entregado</button> */}
                    <i className="fas fa-check-circle icon-delivered" onClick={() => Entregado(id)}></i>
                </div>
            </div>
        </div>
    )
}
export default Ready; 