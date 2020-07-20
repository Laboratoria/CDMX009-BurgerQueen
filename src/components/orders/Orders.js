import React, { useEffect, useState, Fragment } from 'react';
import './orders.css';
import Navbar from '../layout/Navbar';
import EditOrder from './EditOrder';
import OrderFinished from './OrderFinished';
import { firebase } from '../../firebase/firebaseConfig';
import editImage from './images/edit.svg';
import Chronometer from '../dashboard/client-Info/Chronometer';

export function useOrder() {
    const [order, setOrder] = useState([]);
    
    useEffect(() => {
        firebase
            .firestore()
            .collection('orders')
            .onSnapshot((snapshot) => {
                const newOrder = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setOrder(newOrder);
            });
    }, []);
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
    });

    const finishedOrder = (item) => {
        setOrderFinished(item);
    };

    const editBtn = (item) => {
        console.log('sirve click', item.id);
    };

  return (
        <Fragment>
            <div className='dashboard'>
                <Navbar datos={datos} />
                <div className='row order-h2'>
                    <h2 className='white-text'>Mis ordenes</h2>
                </div>
                <div >
                    {
                        order.map(item => (
                            <div className='col m12 resume-box' key={item.id} >
                                <div className='post-it'>
                                    <div className='text-order-resume'>
                                        <div className='table-info'>
                                            <p className='table-info'>Mesa {item.table}</p>
                                            <p className='table-info'>{item.date}</p>
                                            <Chronometer />

                                            {<img src={editImage} onClick={() => { editBtn(item); }} alt='edit' className="waves-effect waves-light btn modal-trigger" href="#modal2" />
                                            }
                                        </div>
                                        <div>
                                        <div className='list-products scroll'>
                                        {item.order.map(a => (                                    
                                                <form action="#">
                                                    <p className='chosen-item'>
                                                        <label className='item'>
                                                            <input className='box' type="checkbox" />
                                                            <span className='black-text text-item'>{a.item}
                                                            </span>
                                                            <p className='black-text num-item'>1</p>
                                                        </label>
                                                    </p>
                                                </form>
                                           ))  }
                                            </div>
                                        </div>
                                        <div>
                                            <button className="waves-effect waves-light btn modal-trigger" href="#modal1" onClick={() => finishedOrder(item)} >Finalizar</button>
                                            <div>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    <OrderFinished orderFinished={orderFinished} setOrderFinished={setOrderFinished} />
                    <EditOrder />
                </div>
            </div>
        </Fragment >

    );
}
export default Orders;  

