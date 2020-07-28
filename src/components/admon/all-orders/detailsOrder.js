import React, { Fragment } from 'react';
import './detail-order.css';
import logoBQ from '../../../img/logo-receipt.png';
import barras from '../../../img/barras.png';

function DetailOrders({ orderSelected }) {

    const order = orderSelected;

    return (
        <Fragment>
            <div id="modal4" className="modal scroll mod-end-order">
                <div className="modal-content end-order ">
                    <div>
                        <div>
                            <p className='title-receipt'> Comprobante de orden </p>
                        </div>
                        <div className='resume-receipt'>
                            <div className='header-receipt'>
                                <img src={logoBQ} alt='logoBQ' className='logo-receipt' />
                                <p className='text-header-receipt resume'>Resumen de pedido</p>
                                <p className='text-header-receipt'>Av. Paseo de la Reforma 222, Juárez, Cuauhtémoc, 06600 Ciudad de México, CDMX</p>
                            </div>
                            <div className='division'></div>
                            <div className='general-info-order'>
                                <p><b>Fecha:</b> {order.date}</p>
                                <p><b>Hora: </b>{order.hour}</p>
                                <p><b>No de comensales: </b> {order.people}</p>
                                <p><b>No de mesa: </b> {order.table}</p>
                                <p><b>Mesero :</b> Xel Jimenez</p>
                                <p><b>Método de pago:</b> {order.payment}</p>
                                <p><b>No. de orden: </b>{order.id}</p>
                            </div>
                            <div className='division'></div>
                            <div>
                                <table className='table-resume-order-receipt'>
                                    <thead>
                                        <tr>
                                            <th className='text-resume-order'>Cant.</th>
                                            <th>Producto</th>
                                            <th className='text-resume-order'>Precio</th>
                                            <th className='text-resume-order'>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {order.order.map(item => (
                                            <tr>
                                                <td className='text-resume-order'>{item.quantity}</td>
                                                <td >{item.item}</td>
                                                <td className='text-resume-order'>$ {item.price}.00</td>
                                                <td className='text-resume-order'>$ {item.price * item.quantity}.00</td>
                                            </tr>

                                        ))}
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td>Total</td>
                                            <td className='total-receipt'>$ {order.total * 0.85}.00</td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td>Propina:</td>
                                            <td className='total-receipt'>15%</td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td><b>Nuevo Total:</b></td>
                                            <td className='total-resume-order'>$ {order.total}.00</td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                            <div className='division'></div>
                            <div className='goodbye'>
                                <p>¡Gracias por tu visita!</p>
                                <p>Regresa pronto</p>
                            </div>
                            <div>
                                <img src={barras} className='logo-receipt' alt='barra' />
                            </div>
                        </div>
                    </div>
                    <div className='footer-modal-receipt'>
                        <button className='btn-print-order'><a href="#!" class="modal-close waves-effect waves-yellow btn-flat" >Imprimir comprobante</a></button>
                    </div>
                </div>
            </div>
        </Fragment >
    );
}

export default DetailOrders;