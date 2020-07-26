import React, { Fragment } from 'react';
import { firebase } from '../../../firebase/firebaseConfig';
import 'materialize-css/dist/css/materialize.min.css';
import '../client-Info/clientInfo.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();
const ClientInfoForm = ({ data, setData }) => {

    const handleInputChange = (e) => {

        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };

    const now = new Date();
    const hour = [now.getHours(), now.getMinutes()].join(':');
    const date = [now.getDate(), now.getMonth(), now.getFullYear()].join('/');

    const sendData = async (e) => {
        e.preventDefault();
        if (data.productos < 1) {
            toast.error('Ingresa productos a la orden', {
                className: 'toast-error center-align',
                hideProgressBar: true
            });
            return;
        }
        if (!data.numeroMesa.trim()) {
            toast.error('Ingresa número de mesa', {
                className: 'toast-error center-align',
                hideProgressBar: true
            });
            return;
        }
        if (!data.numeroComensales.trim()) {
            toast.error('Ingresa número de comensales', {
                className: 'toast-error center-align',
                hideProgressBar: true
            });
            return;
        }
        try {
            const db = firebase.firestore();
            const newOrder = {
                table: data.numeroMesa,
                people: data.numeroComensales,
                order: data.productos,
                payment: '',
                total: data.total,
                date: date,
                hour: hour,
                waitTime: '',
                status: 'pending',
                endingOrder: 'no',
            };

            await db.collection('orders').add(newOrder);

            toast.success('Pedido enviado a cocina!', {
                className: 'toast-resume black-text center-align',
                hideProgressBar: true
            });
        }
        catch (error) {
            console.log(error);
        }
    };
    return (
        <Fragment>
            <form className='form-container' onSubmit={sendData}>
                <div className='row'>
                    <div className='col m6'>
                        <div className="btn-dropdown info-container select-number table-number">
                            <select name='numeroMesa' onChange={handleInputChange} >
                                <option value="" disabled selected>Nº mesa</option>
                                <option className='white-text' value="1" >Mesa 1</option>
                                <option value="2" >Mesa 2</option>
                                <option value="3" >Mesa 3</option>
                                <option value="4" >Mesa 4</option>
                                <option value="5" >Mesa 5</option>
                                <option value="6" >Mesa 6</option>
                                <option value="7" >Mesa 7</option>
                                <option value="8" >Mesa 8</option>
                                <option value="9" >Mesa 9</option>
                                <option value="10" >Mesa 10</option>
                            </select>
                        </div>
                    </div>
                    <div className='col m6'>
                        <div className="btn-dropdown info-container select-number person-number">
                            <select name='numeroComensales' onChange={handleInputChange} >
                                <option value="" disabled selected>Nº comensales</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                            </select>
                        </div>

                    </div>
                </div>
                <div className='row div-submit'>
                    <button className='btn-submit' type='submit'>Enviar</button>
                </div>
            </form>
        </Fragment >
    );
};

export default ClientInfoForm;