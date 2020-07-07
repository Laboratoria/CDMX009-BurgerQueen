import React, { Fragment } from 'react';
import pendingIcon from './images/pending.svg';
/* import cancelIcon from './images/cancel.svg';
import readyIcon from './images/ready.svg'; */
import './orders.css'

function OrderFinished() {
    return (
        <Fragment>
            <a class="waves-effect waves-light btn modal-trigger" href="#modal2">finalizar</a>
            <div className='row resume-status'>
                <div id="modal2" class="modal">
                    <div class="modal-content">
                        <h4>resumen del pedido</h4>
                        <div class="input-field blue col s12">
                            <select>
                                <option value="" className='blue' disabled selected>metodo de pago</option>
                                <option value="1">efectivo</option>
                                <option value="2">tarjeta de credito</option>
                                <option value="3">ambos</option>
                            </select>

                        </div>
                        <p>total:</p>
                        <p>$350.00</p>
                        <form action="#">
                            <h4>agregar propina</h4>
                            <p>
                                <label>
                                    <input name="group1" type="radio" checked />
                                    <span>si</span>
                                </label>
                                <div class="input-field col s12">
                                    <select>
                                        <option value="" disabled selected>Choose your option</option>
                                        <option value="1">10%</option>
                                        <option value="2">15%</option>
                                        <option value="3">otro</option>
                                    </select>
                                </div>
                            </p>
                            <p>total a pagara   </p>
                            <p>
                                <label>
                                    <input name="group1" type="radio" />
                                    <span>no</span>
                                </label>
                            </p>
                        </form>
                        <form action="#">
                            <h4>¿estas segura de finalizar el pedido?</h4>
                            <p>
                                <label>
                                    <input name="group1" type="radio" checked />
                                    <span>si</span>
                                </label>
                            </p>
                            <p>
                                <label>
                                    <input name="group1" type="radio" />
                                    <span>no</span>
                                </label>
                            </p>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
                    </div>
                </div>
            </div>
        </Fragment >
    )
}

export default OrderFinished;