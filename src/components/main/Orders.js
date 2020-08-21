import React, {useState, useEffect} from 'react';
import firebase from '../../config/firebase/firebase-config'
import 'firebase/firestore'
import MainNavBar from './MainNavBar';
import KitchenCard from './KitchenCard';
import KitchenModal from './KitchenModal';
import { useToasts } from 'react-toast-notifications';
import actionDenied from '../common/actionDenied';
import sortOrders from '../common/sortOrders'
import updateDeliverOrder from '../common/updateDeliverOrder'

function Orders({employee, role, ordersAlert, setOrdersAlert}) {
  const { addToast } = useToasts()
  let statusMenu = "nav-btn";
  let statusKitchen = "nav-btn";
  let statusOrders = "active-btn"; 
  let [orderDone, setOrderDone] = useState([]);
  let [orderDelivered, setOrderDelivered] = useState([]);
  let [isOpened, setOpened] = useState(false);
  let [orderSelected, setOrderSelected] = useState('');
 
  useEffect(() => {
   
    const db = firebase.firestore();
    db.collection('orders').onSnapshot((data)=>{
      let done = data.docs.filter(doc => doc.data().listo === true && doc.data().entregado === false)
      const delivered = data.docs.filter(doc => doc.data().entregado === true && doc.data().pagado === false)
      setOrderDone(sortOrders(done));
      setOrdersAlert(sortOrders(done)); 
      setOrderDelivered(sortOrders(delivered));     
    })
  },[])

    function renderOrder(item){
      setOpened(true);
      setOrderSelected(item);
    }  
        
    return (
      <div  className="main-container">
         <MainNavBar 
         employee={employee}
         rol={role}
         statusMenu={statusMenu}
         statusKitchen={statusKitchen}
         statusOrders={statusOrders}
         ordersAlert={ordersAlert} 
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
            updateOrder={()=> {updateDeliverOrder(orderSelected.id, orderSelected.entregado, addToast, setOpened)}}
            value={orderSelected.entregado === false ? "Entregar" : "Pagado"}
            orderSelected={orderSelected}             
            />
        </div> 
      </div>
    );
  }

export default Orders;  