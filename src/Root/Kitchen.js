import React, { useEffect, useState } from 'react';
import { db } from '../firebase-config';
import './Kitchen.css'


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

    function handleSendToFinishing (e) {
        console.log(e.target.value)
        // const send= 
        // const orderStatus= {
        //     ...allOrders,
            
        // }
    }

    return (
        <div className="containerKitchen">
            {allOrders.map((order) => (
                <div className="orderKitchen" key={order.id}>
                    <h4> Mesa {order.tableNumber}</h4>
                    {order.items.map((food)=>(
                        <li>{food.quantity} {food.nameProduct}</li>
                    ))}
                    <button onClick={handleSendToFinishing}>Orden lista!</button>
                </div>
            ))}
        </div>
    )
}

export default Kitchen;

/*{allOrders.map((order) => (
    <p>{order.id}</p>
    ))}*/