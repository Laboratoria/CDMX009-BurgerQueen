import React, { Fragment } from 'react';
import './detail-order.css';

function DetailOrders() {

    return (
        <Fragment>
            <div id="modal4" class="modal scroll mod-end-order">
                <div class="modal-content end-order ">
                    <div>
                        <p className='title-opt-end-order'> Comprobante de orden </p>
                    </div>
                    <div className='resume-receipt'>
                        <div>
                            <h3>Burger Queen</h3>
                            <p>Resumen de pedido</p>
                            <p>Av. Paseo de la Reforma 222, Juárez, Cuauhtémoc, 06600 Ciudad de México, CDMX</p>

                        </div>
                        <div>-----------------------------</div>
                        <div>
                            <p>fecha: </p>
                            <p>Hora: </p>
                            <p>No de comensales: </p>
                            <p>No de mesa: </p>
                            <p>No. de orden: 00001</p>
                            <p>Mesero: Xel Jimenez</p>
                            <p>Método de pago</p>

                        </div>
                        <div >
                            <table >
                                <thead>
                                    <tr >
                                        <th>Cantidad</th>
                                        <th>Producto</th>
                                        <th>Precio</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody >
                                    <tr>
                                        <td >1</td>
                                        <td >2</td>
                                        <td >3</td>
                                        <td >4</td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td>Total</td>
                                        <td>$100.00</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td>Propina:</td>
                                        <td>15%</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td>Nuevo Total:</td>
                                        <td>$300.00</td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                        <div>
                            <p>¡Gracias por tu visita!</p>
                            <p>Regresa pronto</p>
                        </div>
                    </div>
                </div>
                <div>
                    <button>Imprimir comprobante</button>
                </div>
            </div>
        </Fragment >
    );
}

export default DetailOrders;