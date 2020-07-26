import React, { Fragment, useState, useEffect } from 'react';
import { firebase } from '../../firebase/firebaseConfig';
import Navbar from '../layout/Navbar';
import './all-orders.css';
import DetailOrders from './detailsOrder';

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
                                                <button className="waves-effect waves-light btn modal-trigger btn-details-orders" href="#modal4">Detalles</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                )}
                            </table>
                        </div>
                    </div>
                    <DetailOrders />
                </div>
            </div>
        </Fragment>
    );
}


export default AllOrders;