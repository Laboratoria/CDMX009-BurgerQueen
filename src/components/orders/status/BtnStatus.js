import React, { Fragment } from 'react';
import './btn-status.css';
import { firebase } from '../../../firebase/firebaseConfig';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function BtnStatus({ orderSelected }) {

    const updateDoc = async (e) => {
        e.preventDefault();
        console.log(orderSelected.id);

        await firebase
            .firestore()
            .collection('orders')
            .doc(orderSelected.id)
            .update({
                status: 'finalizado'
            })
            .then(function () {
                console.log("Document successfully updated!");
            })
            .catch(function (error) {
                console.error("Error updating document: ", error);
            });

        toast.success('Pedido listo para entrega' + ' Mesa ➞ ' + orderSelected.table, {
            className: 'order-ready',
            position: "top-right",
            type: 'dark',
            autoClose: false,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
        });
    };

    return (
        <Fragment>
            <div className='row resume-status'>
                <div id="modal3" className="modal status-opt">
                    <div className="input-field col s12  status-menu">
                        <p className='title-opt-end-order'>Status del pedido</p>
                        <select>
                            <option value="" disabled selected>Pendiente</option>
                            <option value="1">Terminada</option>
                            <option value="3">Cancelada</option>
                        </select>
                    </div>
                    <div class="modal-footer">
                        <button href="#!" class="modal-close waves-effect waves-yellow btn-flat btn-update-status" onClick={updateDoc}>Cambiar</button>
                    </div>
                </div>
            </div>
        </Fragment >
    );
}

export default BtnStatus;