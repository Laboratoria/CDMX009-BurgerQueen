import React, { useState, useEffect } from 'react';
import { db } from '../firebase-config';
import ResumeOrder from '../components/resumeOrder/ResumeOrder'
import './finish.css'

function Finish (){

    const [ordersFinish, setOrdersFinish] = useState ([]);

    const getOrder = async () => {
        db.collection('ordenes').where("status", "==", "Finish" ).onSnapshot((querySnapshot) => {
            const orders = [];
               querySnapshot.forEach(doc =>{
                   orders.push({...doc.data(), id:doc.id})
               })
               setOrdersFinish(orders);
               console.log(orders);
          });
    }

    useEffect( () => {
        getOrder()
    },[]);

    return(
        <div className="finishContainer">
            <div className="buttonsTableNumbers">
                {ordersFinish.map((order)=> (
                    <button>{order.tableNumber}</button>
                ))}
            </div>
        </div>
    )
}

export default Finish;