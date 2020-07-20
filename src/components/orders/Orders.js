import React,  { useEffect, useState } from 'react'
import './orders.css'
import Navbar from '../layout/Navbar'
import BtnStatus from './BtnStatus'
import OrderFinished from './OrderFinished'
import { firebase } from '../../firebase/firebaseConfig';

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
    }))
    setOrder(newOrder)
    })
    }, [])
    return order;
    } 


function Orders({ datos }) {
    const order = useOrder();
    console.log('es order:', order)


    const now = new Date();
    const time = [now.getHours(), now.getMinutes()];
    const day = time.join(':');
    console.log(day)


    return (
        <div>
        <Navbar datos={datos} />
        <div className='dashboard'>
            <div className='row order-h2'>
                <h2 className='white-text'>Mis ordenes</h2>
            </div>
            <div >
            {
                            order.map(item => (
                                <div className='col m12 resume-box'>
                                <div className='post-it'>
                                    <div className='text-order-resume'>
                                        <div className='table-info'>
                                            <p className='table-info'>Mesa {item.table}</p>
                                            <p className='table-info'>{item.date}</p>
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
                                            <div className='green'>
                                            <div>    <OrderFinished /></div>
                                            <div></div>
                                            
   
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            ))
                        }
            </div >
        </div >
        </div>
    )
}

export default Orders; 