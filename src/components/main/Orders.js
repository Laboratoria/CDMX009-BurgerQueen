import React, {useState, useEffect} from 'react';
import firebase from '../../config/firebase/firebase-config'
import 'firebase/firestore'
import MainNavBar from './MainNavBar';
import KitchenCard from './KitchenCard';
import KitchenModal from './KitchenModal';
import { useToasts } from 'react-toast-notifications';
import actionDenied from '../common/actionDenied';

function Orders({employee, role}) {
  const { addToast } = useToasts()
  let statusMenu = "nav-btn";
  let statusKitchen = "nav-btn";
  let statusOrders = "active-btn"; 
  let [orderDone, setOrderDone] = useState([]);
  let [isOpened, setOpened] = useState(false);
  let [orderSelected, setOrderSelected] = useState('');
  let [] = useState();


  useEffect(() => {
   
    const db = firebase.firestore();
    db.collection('orders').onSnapshot((data)=>{
      const done = data.docs.filter(doc => doc.data().listo === true)
      setOrderDone(done.map(w => w.data()));     
    })
  },[])

    function renderOrder(item){
      setOpened(true);
      setOrderSelected(item);
    }  

    console.log('done=>',orderDone)
        
    return (
      <div  className="main-container">
         <MainNavBar 
         employee={employee}
         statusMenu={statusMenu}
         statusKitchen={statusKitchen}
         statusOrders={statusOrders}  
         />
        <div className="kitchen-cards-main">
          
            {orderDone.map(item=> 
            <KitchenCard
               item={item}
               value='Listo'
               employee={employee}
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

export default Orders;  