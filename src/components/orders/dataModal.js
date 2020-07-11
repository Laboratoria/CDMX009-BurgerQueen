
import React, { Fragment } from 'react'

import './order-finished.css'

function DataModal() {
    return (
        <Fragment>
            <div class=''>
                <h5>Resumen del pedido</h5>
                <div className=''>
                    <div class=" col s12">
                        <select>
                            <option value="" className='' disabled selected>metodo de pago</option>
                            <option value="1">Efectivo</option>
                            <option value="2">Tarjeta de credito</option>
                            <option value="3">Ambos</option>
                        </select>

                    </div>
                    <div className=''>
                        <p>total:</p>
                        <p>$350.00</p>
                    </div>
                </div>
                <form action="#">
                    <h5>Agregar propina</h5>
                    <p>
                        <label>
                            <input name="group1" type="radio" checked />
                            <span>Si</span>
                        </label>
                        <div class="col s12">
                            <select>
                                <option value="" disabled selected>Porcentaje de propina</option>
                                <option value="1">10%</option>
                                <option value="2">15%</option>
                                <option value="3">otro</option>
                            </select>
                        </div>
                    </p>
                    <p>Total a pagara </p>
                    <p>
                        <label>
                            <input name="group1" type="radio" />
                            <span>No</span>
                        </label>
                    </p>
                </form>
                <form action="#">
                    <h5>¿Estas segura de finalizar el pedido?</h5>
                    <p>
                        <label>
                            <input name="group1" type="radio" checked />
                            <span>Si</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input name="group1" type="radio" />
                            <span>No</span>
                        </label>
                    </p>
                </form>
            </div>
            <div class="modal-footer">
                <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
            </div>
        </Fragment >
    )
}

export default DataModal;