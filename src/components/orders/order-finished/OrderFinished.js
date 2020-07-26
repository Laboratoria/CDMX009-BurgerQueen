import React, { Fragment, useState } from 'react';
import { firebase } from '../../../firebase/firebaseConfig';
import './order-finished.css';

function OrderFinished({ orderFinished }) {
    const [totalWithTip, setTotalWithTip] = useState(0);
    const [paymentMethod, setPaymentMethod] = useState('');

    const sendOrderFinished = () => {
        firebase
            .firestore()
            .collection('orders')
            .doc(orderFinished.id)
            .update({
                endingOrder: 'si',
                total: totalWithTip,
                payment: paymentMethod,
            })
            .then(function () {
                console.log("Document successfully updated!");
            })
            .catch(function (error) {
                console.error("Error updating document: ", error);
            });
    };

    const paymentMethodSelected = (e) => {
        const method = e.target.value;
        setPaymentMethod(method);
    };
    console.log(paymentMethod);

    const newTotalCalculated = (tip) => {
        const newTotal = tip * orderFinished.total;
        setTotalWithTip(newTotal.toFixed(2));
    };

    return (
        <Fragment>

            <div id="modal1" class="modal scroll mod-end-order">
                <div class="modal-content end-order ">
                    <div>
                        <p className='title-opt-end-order'> Método de pago </p>
                        <div className='opt text-black'>
                            <select className='opt black-text' onChange={paymentMethodSelected}>
                                <option value="" disabled selected>Elige una opción</option>
                                <option className='opt text-red' value="Efectivo">Efectivo</option>
                                <option className='opt' value="tarjetaCredito" >Tarjeta de crédito</option>
                                <option className='opt' value="tarjetaDebito">Tarjeta de regalo</option>
                            </select>
                        </div>
                        <div>
                            <p className='total-order-finished'>Total: {orderFinished.total}</p>
                        </div>
                    </div>
                    <div>
                        <p className='title-opt-end-order'> Agregar propina</p>
                        <form action="#">
                            <p>
                                <label>
                                    <input name="group1" type="radio" checked onClick={() => { newTotalCalculated(1); }} />
                                    <span className='total-order-finished'>No</span>
                                </label>
                            </p>
                            <p>
                                <label>
                                    <input name="group1" type="radio" checked onClick={() => { newTotalCalculated(1.10); }} />
                                    <span className='total-order-finished'>10%</span>
                                </label>
                            </p>
                            <p>
                                <label>
                                    <input name="group1" type="radio" onClick={() => { newTotalCalculated(1.15); }} />
                                    <span className='total-order-finished'>15%</span>
                                </label>
                            </p>
                            <div>
                                <p className='total-order-finished'>Total incluyendo propina: {totalWithTip}</p>
                            </div>
                        </form>
                    </div>
                    <div>
                        <p className='title-opt-end-order'>Obtener comprobante</p>
                        <div className=''>
                            <select className='options'>
                                <option value="" disabled selected>Elige una opción</option>
                                <option className='opt' value="1">Si</option>
                                <option className='opt' value="2">No</option>
                            </select>
                        </div>
                    </div>
                    <div class="modal-footer btn-accept">
                        <button className='btn-end-edit-order'>
                            <a href="#!" class="modal-close waves-effect waves-green btn-flat" onClick={sendOrderFinished}>Aceptar</a>
                        </button>
                    </div>
                </div>
            </div>
        </Fragment >
    );
}

export default OrderFinished;