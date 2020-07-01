import React, { useEffect, useState } from 'react';
//import OrderCooking from '../components/OrderCooking/OrderCooking'
import { db } from '../firebase-config';
//import Order from './Order';

function Kitchen (){

    const [allOrders, setAllOrders] = useState([])

    const getOrder = async () => {
     db.collection('ordenes').onSnapshot((querySnapshot) => {
         const orders = [];
            querySnapshot.forEach(doc =>{
                orders.push({...doc.data(), id:doc.id})
            })
            console.log(orders);
            setAllOrders(orders);
       });
    };

    useEffect( () => {
        getOrder()
    },[]);

    return (
        <div>
            {allOrders.map((order) => (
                <div key={order.id}>
                    <h4> Mesa {order.table}</h4>
                    <p>Nro de orden {order.nroOrder}</p>
                    {order.foodOrder.map((food)=>(
                        <li>{food.name}</li>
                    ))}
                    <button>Orden lista!</button>
                </div>
            ))}
        </div>
    )
}

export default Kitchen;

/*{allOrders.map((order) => (
    <p>{order.id}</p>
    ))}*/