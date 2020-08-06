import React, { useEffect, useState } from 'react';
import { db } from '../firebase-config';
import './Kitchen.css'


function Kitchen (){

    const [allOrders, setAllOrders] = useState([])

    const getOrder = async () => {
     db.collection('ordenes').where("status", "==", "inKitchen" ).onSnapshot((querySnapshot) => {
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
        allOrders.map((order)=>{
            if(e.target.name === order.id){
                db.collection("ordenes").doc(order.id).update({
                    status:"Finish"
                }).then(function() {
                    console.log("cambio de estado hecho :)");
                    console.log(allOrders)
                  }); 
            }
        })
    }

    return (
        <div className="containerKitchen">
            {allOrders.map((order) => (
                <div className="orderKitchen" key={order.id}>
                    <h4> Mesa {order.tableNumber}</h4>
                    <div className="itemsKitchen">
                        {order.items.map((food)=>(
                            <li>{food.quantity} {food.nameProduct}</li>
                        ))}
                    </div>
                    <div className="contentButton">
                        <button className="buttonKitchenSend" name={order.id} onClick={handleSendToFinishing}>Orden lista!</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Kitchen;