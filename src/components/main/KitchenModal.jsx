import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom';
import dbDate from '../common/dbDate'
import firebase from '../../config/firebase/firebase-config'
import 'firebase/firestore'
import { useToasts } from 'react-toast-notifications'

const modal = document.querySelector('#modal-root');

function updateOrder(id, preparando, employee, addToast, setOpened){
    console.log(id, preparando)
    const db = firebase.firestore();
    if(preparando){
       console.log('preparando') 
       let orderNotDone = 0;
       document.querySelectorAll('.orderDone').forEach((e)=>{
            if(e.checked === false){
                orderNotDone ++
            }
        })
        console.log(orderNotDone);
        if(orderNotDone !== 0){
            addToast('Aún faltan platillos por preparar', {
                autoDismiss: true,
                placement:'top-center', 
                appearance: 'warning' 
              })
        }else{
            
            db.collection('orders').doc(id).update({
                'horaListo': new Date(),
                'preparando': false,
                'listo': true,
                'status': 'Listo para entregar'
            }).then(()=>{
                console.log('orden enviada correctamente')
                addToast('La orden se ha enviado exitosamente', {
                  placement:'top-center', 
                  appearance: 'success' 
                })
                setOpened(false)
              }).catch(err=>{
                console.log(err);
                addToast('Hubo un error al enviar la orden', {
                    placement:'top-center', 
                    appearance: 'error' 
                  })
              })  
        }
    }else{
        console.log('iniciando preparacion')
        db.collection('orders').doc(id).update({
            'horaPreparacion': new Date(),
            'preparando': true,
            'status': 'Preparando',
            'cocinero': employee 
        }).then(()=>{
            console.log('orden enviada correctamente')
            addToast('La orden se ha enviado exitosamente', {
              placement:'top-center', 
              appearance: 'success' 
            })
            setOpened(false)
          }).catch(err=>{
            console.log(err);
            addToast('Hubo un error al enviar la orden', {
                placement:'top-center', 
                appearance: 'error' 
              })
          })    
    }
}

const KitchenModal = ({isOpened, setOpened, orderSelected, value, employee}) => {
    
    const { addToast } = useToasts();
    //let [sec, setSec] = useState(50);
    
    /*
    useEffect(() => {
        
        setInterval(() => { 
            
            return sec === 59 ? setSec(0) : setSec(sec=>sec+1);
                
        }, 1000);
        
    },[])
    */
     

    if(isOpened){
    return ReactDOM.createPortal(
        <div className="modal-container" >
            <div className="modal-block">
                <div className={orderSelected.preparando === false ? "modal-status-off" : "modal-status-on"}>
                </div>
                <h3 className={orderSelected.preparando === false ? 'status-red' : 'status-green'}>
                            {orderSelected.status}</h3>
                <hr/>
                <div className="modal-header">
                <table>
                    <thead>
                        <tr>
                            <td><span>No. de Orden: </span> {orderSelected.numOrden}</td>
                            <td><span>Pedido: </span> {dbDate(orderSelected.horaPedido)}</td>
                        </tr>
                    </thead>
                    <tbody> 
                        <tr>
                            <td><span>Cocinero: </span>{orderSelected.cocinero}</td>
                            <td><span>Preparación: </span> {orderSelected.preparando === false ? null : dbDate(orderSelected.horaPreparacion) }</td>
                        </tr>
                    </tbody>      
                </table>
                </div>
                <hr/>
                <div className="modal-body">
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Cant.</th>
                                <th>Orden</th>
                            </tr>
                        </thead> 
                        <tbody> 
                            {Object.values(orderSelected.orden).map((orderItem, index) =>
                                (<tr key={index}>
                                    <td>{orderSelected.preparando === false ? <span></span> : <input className="orderDone" type="checkbox"/>}
                                    </td>
                                    <td>{orderItem.number}</td>
                                    <td>{orderItem.name}</td>
                                </tr>
                                )
                            )}
                        </tbody>     
                    </table>
                </div>
                <div className="modals-btns-container">
                    <input className="active-menu-btn" 
                            type="button" 
                            value={value} 
                            onClick={()=> {updateOrder(orderSelected.id, orderSelected.preparando, employee, addToast, setOpened)}}/>
                    <input className="menu-nav-btn" 
                            type="button" 
                            value="Cancelar" 
                            onClick={()=> {setOpened(false)}}/>
                </div>   
            </div>    
        </div>,
        modal
    )}else{
     return null}
}

export default KitchenModal;