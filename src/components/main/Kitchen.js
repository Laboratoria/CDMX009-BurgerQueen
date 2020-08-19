import React, {useState, useEffect} from 'react';
import firebase from '../../config/firebase/firebase-config'
import 'firebase/firestore'
import MainNavBar from './MainNavBar';
import KitchenCard from './KitchenCard';
import KitchenModal from './KitchenModal';
import { useToasts } from 'react-toast-notifications';
import actionDenied from '../common/actionDenied';
import dbDate from '../common/dbDate'
import timer from '../common/timer'
import sortOrders from '../common/sortOrders'
import updateKitchenOrder from '../common/updateKitchenOrder'


function Kitchen({employee, role, ordersAlert}) {
  const { addToast } = useToasts()
  let statusMenu = "nav-btn";
  let statusKitchen = "active-btn";
  let statusOrders = "nav-btn"; 
  let [orderWaiting, setOrderWaiting] = useState([]);
  let [orderDoing, setOrderDoing] = useState([]);
  let [isOpened, setOpened] = useState(false);
  let [orderSelected, setOrderSelected] = useState('');
  let [sec, setSec] = useState(0);
  let [min, setMin] = useState(0);
  let [hour, setHour] = useState(0);

  useEffect(() => {
   
    const db = firebase.firestore();
    db.collection('orders').onSnapshot((data)=>{
      const waiting = data.docs.filter(doc => doc.data().preparando === false && doc.data().listo === false)
      const doing = data.docs.filter(doc => doc.data().preparando === true && doc.data().listo === false)
      
      setOrderWaiting(sortOrders(waiting)); 
      setOrderDoing(sortOrders(doing));     
    })
  },[])

    function renderOrder(item){
      setOpened(true);
      setOrderSelected(item);
      if(item.preparando==true){
        let timerData = timer(item.horaPreparacion)
        setHour(timerData.hours);
        setMin(timerData.minutes);
        setSec(timerData.seconds);
      }
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
            {orderDoing.map(item=> 
            <KitchenCard
               item={item}
               role={role}
               borderClass={item.cocinero === employee ? 'border-green' : ''}
               statusClass={'status-green'}
               horaPreparacion={item.preparando && dbDate(item.horaPreparacion)}
               onClickOrder={()=>{
                  if(role === 'mesero'){
                    actionDenied(addToast);
                  }else{
                    renderOrder(item)
                  }
                }  
               }
            />)}
          </div>
          <div className="kitchen-cards-waiting">
          {orderWaiting.map(item=> 
            <KitchenCard
               item={item}
               role={role}
               statusClass={'status-red'}
               onClickOrder={()=>{
                  if(role === 'mesero'){
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
            addToast={addToast}
            isOpened={isOpened} 
            setOpened={setOpened}
            modalStatusClass={orderSelected.preparando === false ? "modal-status-off" : "modal-status-on"}
            orderStatusClass={orderSelected.preparando === false ? 'status-red' : 'status-green'}
            updateOrder={()=> {updateKitchenOrder(orderSelected.id, orderSelected.preparando, employee, addToast, setOpened)}}
            value={orderSelected.preparando ? 'Listo' : 'Preparar'}
            orderSelected={orderSelected}   
            sec={sec}
            setSec={setSec}
            min={min}
            setMin={setMin}
            hour={hour}
            setHour={setHour}  
            />
        </div>   
      </div>
    );
  }

export default Kitchen;  