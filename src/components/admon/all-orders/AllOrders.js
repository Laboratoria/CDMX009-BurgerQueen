import React, { Fragment, useState, useEffect } from 'react';
import { firebase } from '../../../firebase/firebaseConfig';
import './all-orders.css';

import Navbar from '../../layout/Navbar';
import DetailOrders from './detailsOrder';

export function useAllOrder() {
    const [allOrder, setAllOrder] = useState([]);

    useEffect(() => {
        firebase
            .firestore()
            .collection('orders')
            .orderBy('date', 'desc')
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

    const [orderSelected, setOrderSelected] = useState({
        id: '',
        order: [],
        table: '',
        total: '',
        people: '',
        date: '',
        hour: '',
        deliveryTime: '',
        status: 'pendiente'
    });

    const viewReceipt = (order) => {
        setOrderSelected(order);
    };

    return (
        <Fragment>
            <div className='bck-imag-orders'>
                <Navbar />
                <div className='container'>
                    <h1 className='title-admin white-text'>Ordenes Totales</h1>
                    <div>
                        <div class="input-field col s12">
                            <select>
                                <option value="" disabled selected>Filtrar ordenes:</option>
                                <option value="1">Mesero</option>
                                <option value="2">Fecha</option>
                            </select>
                        </div>
                    </div>
                    <div className='table-elements'>
                        <div className='table-container'>
                            <table className='table-elements'>
                                <thead>
                                    <tr className='header-table'>
                                        <th className='title-table'>Fecha y hora</th>
                                        <th className='title-table'>No. de orden</th>
                                        <th className='title-table'>Tiempo de entrega</th>
                                        <th className='title-table'>Total</th>
                                        <th className='title-table'>Orden</th>
                                    </tr>
                                </thead>
                                {orders.map((order) =>
                                    <tbody key={order.id}>
                                        <tr>
                                            <td className='title-table'>{order.date}</td>
                                            <td className='title-table'>{order.id}</td>
                                            <td className='title-table'>{order.waitTime}</td>
                                            <td className='title-table'>${order.total}.00</td>
                                            <td className='title-table'>
                                                <div className=' btn-detail'>
                                                    <button className="waves-effect waves-light btn modal-trigger btn-details-orders" href="#modal4" onClick={() => viewReceipt(order)}>Detalles</button>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                )}
                            </table>
                        </div>
                    </div>
                    <DetailOrders orderSelected={orderSelected} />
                </div>
            </div>
        </Fragment>
    );
}


export default AllOrders;