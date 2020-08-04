import React, {useState, useEffect} from 'react';
import firebase from '../../config/firebase/firebase-config'
import 'firebase/firestore'
import MainNavBar from './MainNavBar';
import KitchenCard from './KitchenCard';
import KitchenModal from './KitchenModal';
import { useToasts } from 'react-toast-notifications';
import actionDenied from '../common/actionDenied';

function Kitchen({employee, role}) {
  const { addToast } = useToasts()
  let statusMenu = "nav-btn";
  let statusKitchen = "active-btn";
  let statusOrders = "nav-btn"; 
  let [orderWaiting, setOrderWaiting] = useState([]);
  let [orderDoing, setOrderDoing] = useState([]);
  let [isOpened, setOpened] = useState(false);
  let [orderSelected, setOrderSelected] = useState('');
  let [] = useState();


  useEffect(() => {
   
    const db = firebase.firestore();
    db.collection('orders').onSnapshot((data)=>{
      const waiting = data.docs.filter(doc => doc.data().preparando === false && doc.data().listo === false)
      const doing = data.docs.filter(doc => doc.data().preparando === true && doc.data().listo === false)
      setOrderWaiting(waiting.map(w => w.data())); 
      setOrderDoing(doing.map(w => w.data()));     
    })
  },[])

    function renderOrder(item){
      setOpened(true);
      setOrderSelected(item);
    }  

    console.log('waiting=>',orderWaiting)
    console.log('doing=>',orderDoing)
    
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
            {orderDoing.map(item=> 
            <KitchenCard
               item={item}
               value='Listo'
               employee={employee}
               borderClass={item.cocinero === employee ? 'border-green' : ''}
               statusClass={'status-green'}
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
            employee={employee}
            addToast={addToast}
            isOpened={isOpened} 
            setOpened={setOpened}
            value={orderSelected.preparando === false ? "Preparar" : "Listo"}
            orderSelected={orderSelected}             
            />
        </div>   
      </div>
    );
  }

export default Kitchen;  