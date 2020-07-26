import React, { useEffect, useState, Fragment } from 'react';
import './orders.css';
import Navbar from '../../layout/Navbar';
import EditOrder from '../edit-order/EditOrder';
import OrderFinished from '../order-finished/OrderFinished';
import { firebase } from '../../../firebase/firebaseConfig';
import editImage from '../images/edit.svg';
import Chronometer from '../chronometer/Chronometer';
import BtnStatus from '../status/BtnStatus';

export function useOrder() {
    const [order, setOrder] = useState([]);

    const date = new Date();
    const currentDay = [date.getDate(), date.getMonth(), date.getFullYear()].join('/');

    useEffect(() => {
        firebase
            .firestore()
            .collection('orders')
            .where("date", "==", currentDay)
            .where("endingOrder", "==", 'no')
            .orderBy('hour', 'desc')
            .limit(10)
            .onSnapshot((snapshot) => {
                const newOrder = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setOrder(newOrder);
            });
    }, [currentDay]);
    return order;
}

function Orders({ datos }) {

    const order = useOrder();
    const [orderFinished, setOrderFinished] = useState({
        table: '',
        people: '',
        order: '',
        payment: '',
        total: '',
        date: '',
        hour: '',
        deliveryTime: '',
        status: 'pendiente'
    });

    const finishedOrder = (item) => {
        setOrderFinished(item);
    };

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

    const editBtn = (item) => {
        setOrderSelected(item);
    };

    const changeOrder = (item) => {
        setOrderSelected(item);

    };

    return (
        <Fragment>
            <div className='bck-imag-orders'>
                <Navbar datos={datos} />
                <div className='row order-h2'>
                    <h2 className='white-text kitchen-title'>Cocina</h2>
                </div>
                <div className='resume-box'>
                    {
                        order.map(item => (
                            <div className='post-it'>
                                <div className='text-order-resume'>
                                    <div className='table-info'>
                                        <p className='table-info'>Mesa {item.table}</p>
                                        <p className='table-info'>{item.hour}</p>
                                        {<img src={editImage} onClick={() => { editBtn(item); }} alt='edit' className="waves-effect waves-light btn modal-trigger mod-edit" href="#modal2" />}
                                    </div>
                                    <Chronometer item={item} />
                                    <div>
                                        <div className='list-products scroll'>
                                            {item.order.map(a => (
                                                <form action="#">
                                                    <p className='chosen-item'>
                                                        <label className='item-ordered'>
                                                            <input className='box' type="checkbox" />
                                                            <span className='black-text text-item'>{a.item}
                                                            </span>
                                                            <span className='black-text num-item'>{a.quantity}</span>
                                                        </label>
                                                    </p>
                                                </form>
                                            ))}
                                        </div>
                                    </div>
                                    <div className='btn-opt-order'>
                                        <button class="waves-effect waves-light btn modal-trigger  btn-change-status" href="#modal3" onClick={() => changeOrder(item)}>status</button>
                                        <button className="waves-effect waves-light btn modal-trigger end-btn" href="#modal1" onClick={() => finishedOrder(item)} >Finalizar</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    <OrderFinished orderFinished={orderFinished} />
                    <EditOrder orderSelected={orderSelected} />
                    <BtnStatus orderSelected={orderSelected} />
                </div>
            </div>
        </Fragment >

    );
}
export default Orders;

