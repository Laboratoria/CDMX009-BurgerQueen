import React from 'react'
import dbDate from '../common/dbDate'
import firebase from '../../config/firebase/firebase-config'
import 'firebase/firestore'

export function cancelOrderFromKitchen(id){
    console.log('Cancelando', id)
    
    const db = firebase.firestore();
    db.collection("orders").doc(id).update({
        'status':'CANCELADO'
    }).then(function() {
        console.log("Document successfully canceled!");
        
    }).catch(function(error) {
        console.error("Error canceling document: ", error);
    });
}

export function cancelOrderBtn(item, role){
    if(item.listo === false && role==='mesero'){
        return <p className='cancel-order-card'
                onClick={()=> cancelOrderFromKitchen(item.id)}      
               >Cancelar orden</p>
    }else{
        return 
    }
}

export function timeDoneElement(item, horaPreparacion){
    return item.listo 
     ? <td><span>Listo: </span> {dbDate(item.horaListo)}</td>
     : <td><span>Preparación: </span> {horaPreparacion}</td>
}  

export function timeDeliveredElement(item){
    return item.listo ?  (
        <tr>
          <td></td>
          <td><span>Entregado: </span> {item.entregado === true ? dbDate(item.horaEntrega) : null}</td>
        </tr>
        ) : null
} 

