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

    const [resume, setResume] = useState ([]);

    function handlerOrderFinish(id) {
        const food = [];
        ordersFinish.map((order =>{
            if(id === order.id){
                food.push({order})
            }
        }))
        console.log(food)
        setResume(food);
    }

    function resetResume (){
        setResume([]);
    }

    function handlerOrderPay (id){
        ordersFinish.map((resume =>{
            if (resume.id === id){
                db.collection("ordenes").doc(resume.id).update({
                    status:"Pay"
                }).then(function() {
                    console.log("cambio de estado hecho :)");
                    resetResume()
                  }); 
            }
        }))
    }

    return(
        <div className="finishContainer">
            <div className="buttonsTableNumbers">
                <p>Mesas con órdenes activas</p>
                <div>
                    {ordersFinish.map((order)=> (
                        <button key={order.id} onClick={()=>handlerOrderFinish(order.id)}>{order.tableNumber}</button>
                    ))}
                </div>
            </div>
            <div className="containerResumeOrder">
                <ResumeOrder
                    resume={resume}
                    handlerOrderPay={handlerOrderPay}
                />
            </div>
        </div>
    )
}

export default Finish;