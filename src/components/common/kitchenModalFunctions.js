import React from 'react'
import dbDate from '../common/dbDate'
import firebase from '../../config/firebase/firebase-config'
import 'firebase/firestore'

export function cancelOrder(id, setOpened){
    const db = firebase.firestore();
    db.collection("orders").doc(id).delete().then(function() {
        console.log("Document successfully deleted!");
        setOpened(false);
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
}

export function timerRender(orderSelected, sec, setSec, min, setMin, hour, setHour){
    if(orderSelected.preparando == true){
        
        let a;
        let b;
        let c;
        
        setTimeout(() => {
            
            if(sec == 59){
                  setSec(0);
                if(min ==59){
                  setMin(0)
                  setHour(hour+1)    
                }else{
                  setMin(min+1)  
                }
                
            }else{
                setSec(sec+1)
            }         
        }, 1000);
        
        if(hour<10){
            a = '0'
        }else{
            a = ''
        }
        if(min<10){
            b = '0'
       }else{
            b = ''
       }
       if(sec<10){
            c = '0'
       }else{
            c = ''
       }

       return  <div className='timer-container'>
                    <p className="timer"> {a}{hour}:</p>
                    <p className="timer"> {b}{min}:</p> 
                    <p className="timer"> {c}{sec}</p>
               </div>
    }else{
        return
    }
}

export function employeeElement(orderSelected){
    if(orderSelected.listo === true){
        return <td><span>Mesero: </span>{orderSelected.mesero}</td>
    } else{
        return <td><span>Cocinero: </span>{orderSelected.cocinero}</td>
    }
}   

export function cancelOrderBtn(orderSelected, setOpened){
    if(orderSelected.listo === false){
        return <p className='cancel-order'
                  onClick={()=> cancelOrder(orderSelected.id, setOpened)}      
                >Cancelar orden</p>
    }else{
        return 
    }
}

export function timeDoneElement(orderSelected){
    if(orderSelected.listo === true){
        return <td><span>Listo: </span> {dbDate(orderSelected.horaListo)}</td>
    } else{
        return <td><span>Preparación: </span> {orderSelected.preparando === false ? null : dbDate(orderSelected.horaPreparacion) }</td>
    }
} 

export function customerElement(orderSelected){
    if(orderSelected.listo === true){
        return <tr>
                 <td><span>Cliente: </span> {orderSelected.cliente}</td>
                 <td><span>Mesa: </span> {orderSelected.mesa}</td>
               </tr>
    } else{
        return 
    }
} 

export function totalElement(orderSelected){
    if(orderSelected.listo === true){
        return  <tfoot>
                    <tr>
                        <td></td> 
                        <td></td>    
                        <td className="table-total"><span>Total: </span></td>
                        <td className="table-total-cant"><span>$ {orderSelected.total}</span></td>          
                    </tr>                       
                </tfoot> 
    } else{
        return 
    }
} 