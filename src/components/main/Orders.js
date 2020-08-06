import React, {useState, useEffect} from 'react';
import firebase from '../../config/firebase/firebase-config'
import 'firebase/firestore'
import MainNavBar from './MainNavBar';
import KitchenCard from './KitchenCard';
import KitchenModal from './KitchenModal';
import { useToasts } from 'react-toast-notifications';
import actionDenied from '../common/actionDenied';
import dbDate from '../common/dbDate'

function updateDeliverOrder(id, entregado, employee, addToast, setOpened){
  
  const db = firebase.firestore();
  if(entregado){
      console.log('entregado') 
      db.collection('orders').doc(id).update({
        'horaPago': new Date(),
        'pagado': true,
        'status': 'Pagado'
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
      
  }else{
      console.log('Entregando')
      db.collection('orders').doc(id).update({
          'horaEntrega': new Date(),
          'entregado': true,
          'status': 'Entregado'           
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


function Orders({employee, role}) {
  const { addToast } = useToasts()
  let statusMenu = "nav-btn";
  let statusKitchen = "nav-btn";
  let statusOrders = "active-btn"; 
  let [orderDone, setOrderDone] = useState([]);
  let [orderDelivered, setOrderDelivered] = useState([]);
  let [isOpened, setOpened] = useState(false);
  let [orderSelected, setOrderSelected] = useState('');
  let [] = useState();


  useEffect(() => {
   
    const db = firebase.firestore();
    db.collection('orders').onSnapshot((data)=>{
      const done = data.docs.filter(doc => doc.data().listo === true && doc.data().entregado === false)
      const delivered = data.docs.filter(doc => doc.data().entregado === true && doc.data().pagado === false)
      setOrderDone(done.map(w => w.data())); 
      setOrderDelivered(delivered.map(w => w.data()));     
    })
  },[])

    function renderOrder(item){
      setOpened(true);
      setOrderSelected(item);
    }  

    //console.log('waiting=>',orderWaiting)
    //console.log('doing=>',orderDoing)
        
    return (
      <div  className="main-container">
         <MainNavBar 
         employee={employee}
         statusMenu={statusMenu}
         statusKitchen={statusKitchen}
         statusOrders={statusOrders}  
         />
       
       <div className="kitchen-cards-main">
          <div className="kitchen-cards-doing">
            {orderDelivered.map(item=> 
            <KitchenCard
               item={item}
               borderClass={item.mesero === employee ? 'border-green' : ''}
               statusClass={'status-green'}
               onClickOrder={()=>{
                  if(role === 'cocinero'){
                    actionDenied(addToast);
                  }else{
                    renderOrder(item)
                  }
                }  
               }
            />)}
          </div>
          <div className="kitchen-cards-waiting">
          {orderDone.map(item=> 
            <KitchenCard
               item={item}
               borderClass={item.mesero === employee ? 'border-red' : ''}
               statusClass={'status-red'}
               onClickOrder={()=>{
                  if(role === 'cocinero'){
                    actionDenied(addToast);
                  }else{
                    renderOrder(item)
                  }
                 }
               }
              />)}
          </div>
        </div>
        <div>
            <KitchenModal
            employee={employee}
            addToast={addToast}
            isOpened={isOpened} 
            setOpened={setOpened}
            modalStatusClass={orderSelected.entregado === false ? "modal-status-off" : "modal-status-on"}
            orderStatusClass={orderSelected.entregado === false ? 'status-red' : 'status-green'}
            updateOrder={()=> {updateDeliverOrder(orderSelected.id, orderSelected.entregado, employee, addToast, setOpened)}}
            
            value={orderSelected.entregado === false ? "Entregar" : "Pagado"}
            orderSelected={orderSelected}             
            />
        </div> 
      </div>
         
    );
         
  }

export default Orders;  