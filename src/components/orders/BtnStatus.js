import React, { Fragment } from 'react';
import './btn-status.css'

function BtnStatus() {
    return (
        <Fragment>
            <select className="input-field col s12 list-status">
                <option className='' value="" disabled selected>Status</option>
                <option value="1">Pendiente</option>
                <option value="2">Completado</option>
                <option value="3">Cancelado</option>
            </select>
        </Fragment>
    )
}

export default BtnStatus