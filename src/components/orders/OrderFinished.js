import React, { Fragment, useState } from 'react';

import TipOption from './TipOption'
import pendingIcon from './images/pending.svg';
/* import cancelIcon from './images/cancel.svg';
import readyIcon from './images/ready.svg'; */
import './order-finished.css'

function OrderFinished() {

    const [visible, setVisible] = useState(false);

    return (
        <Fragment>
            <a class="waves-effect waves-light btn modal-trigger" href="#modal1">Finalizar</a>

            <div id="modal1" class="modal scroll">
                <div class="modal-content">
                    <div>
                        <p className='title-Opt'> Método de pago </p>
                        <div className=''>
                            <select className='options'>
                                <option value="" disabled selected>Elige una opción</option>
                                <option className='opt' value="1">Efectivo</option>
                                <option className='opt' value="2">Tarjeta de crédito</option>
                                <option className='opt' value="3">Tarjeta de regalo</option>
                            </select>
                        </div>
                        <div>
                            <p>Total: $200.00</p>
                        </div>
                    </div>
                    <div>
                        <p className='title-Opt'> Agregar propina</p>
                        <div className='' >
                            <select className='options'>
                                <option value="" disabled selected>Elige una opción</option>
                                <option className='opt' onClick={() => setVisible(false)}>No</option>
                                <option className='opt' onClick={() => setVisible(true)}> Si</option>
                            </select>
                        </div>
                        <div>
                            {
                                visible ? (<div>no se agrega propina</div>) : (<TipOption />)
                            }
                        </div>

                    </div>
                    <div>
                        <p className='title-Opt'>Obtener comprobante</p>
                        <div className=''>
                            <select className='options'>
                                <option value="" disabled selected>Elige una opción</option>
                                <option className='opt' value="1">Si</option>
                                <option className='opt' value="2">No</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <p className='title-Opt'>¿Estas segura de finalizar la orden?</p>
                        <div className=''>
                            <select className='options'>
                                <option value="" disabled selected>Elige una opción</option>
                                <option className='opt' value="1">Si</option>
                                <option className='opt' value="2">No</option>
                            </select>
                        </div>
                    </div>
                    <div class="modal-footer btn-accept">
                        <a href="#!" class="modal-close waves-effect waves-green btn-flat">Aceptar</a>
                    </div>
                </div>
            </div>
        </Fragment >
    )
}

export default OrderFinished;