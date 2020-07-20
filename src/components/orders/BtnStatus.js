import React from 'react';
import pendingIcon from './images/pending.svg';
/* import cancelIcon from './images/cancel.svg';
import readyIcon from './images/ready.svg'; */
//import './btn-status.css'
import { Fragment } from 'react';


const BtnStatus = () => {
    return (
        <div>hiiiiiiiiiiiiiii
           <select className="input-field col s12 list-status">
                <option className='' value="" disabled selected>Status</option>
                <option value="1">Pendiente</option>
                <option value="2">Completado</option>
                <option value="3">Cancelado</option>
            </select> 
        </div>
    )
}

export default BtnStatus