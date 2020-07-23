import React from 'react';
import { db } from '../../../firebase/firebase-config';

const Pending = ({ pendings, pending, changePending }) => {

    const { table, state, id } = pendings
    const deletList = (id) => {
        const newPending = pending.filter(pendings => pendings.id !== id);
        changePending(newPending);
        //console.log(id);  
        let onchangeState = db.collection("orders").doc(id);
        onchangeState.update({
            "state": "cancel"
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
                </div>
                <div className='list'>
                    {table}
                </div>
                <div className='list'>
                    <p className="list-orange" >
                        {state == 'pending' ? 'Pendiente' : null}
                    </p>
                </div>
                <div className='list'>
                    <a>
                        <i
                            className="fa fa-minus-circle icono"
                            onClick={() => deletList(id)}
                        ></i>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Pending; 