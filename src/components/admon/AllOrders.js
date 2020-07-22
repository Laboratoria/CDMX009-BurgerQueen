import React, { Fragment, useState, useEffect } from 'react';
import { firebase } from '../../firebase/firebaseConfig';
import Navbar from '../layout/Navbar';
import './admon.css';

export function useAllOrder() {
    const [allOrder, setAllOrder] = useState([]);

    const date = new Date;
    const currentDay = [date.getDate(), date.getMonth(), date.getFullYear()].join('/');
    console.log('ese es el dia', currentDay);

    useEffect(() => {
        firebase
            .firestore()
            .collection('orders')
            .orderBy('hour', 'desc')
            .limit(30)
            .onSnapshot((snapshot) => {
                const newOrder = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setAllOrder(newOrder);
            });
    }, []);
    return allOrder;
}

function AllOrders() {
    const orders = useAllOrder();

    return (
        <Fragment>
            <div className='admon-bkg'>
                <Navbar />
                <div className='row order-h2'>
                    <h2 className='white-text'>Ordenes</h2>
                </div>
                <div>
                    <p className='white-text'>Filtrar las ordernes por:</p>
                    <div class="input-field col s12">
                        <select>
                            <option value="" disabled selected>Elige una opción</option>
                            <option value="1">Mesero</option>
                            <option value="2">Fecha</option>
                        </select>
                    </div>
                </div>
                <div className='table-container'>
                    <table>
                        <thead>
                            <tr className='header-table'>
                                <th className='title-table'>Fecha y hora</th>
                                <th className='title-table'>No. de orden</th>
                                <th className='title-table'>Mesero</th>
                                <th className='title-table'>Total</th>
                                <th className='title-table'>Orden</th>
                            </tr>
                        </thead>
                        {orders.map((order) =>
                            <tbody key={order.id}>
                                <tr>
                                    <td className='title-table'>{order.date}</td>
                                    <td className='title-table'>{order.id}</td>
                                    <td className='title-table'>Bren Carranco</td>
                                    <td className='title-table'>${order.total}.00</td>
                                    <td className='title-table'>
                                        <button className='btn-details-orders'>Detalles</button>
                                    </td>
                                </tr>
                            </tbody>
                        )}
                    </table>
                </div>
            </div>
        </Fragment>
    );
}


export default AllOrders;