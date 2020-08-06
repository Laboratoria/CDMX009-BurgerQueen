import React, {useState, useEffect} from 'react';
import firebase from '../../config/firebase/firebase-config'
import 'firebase/firestore'
import MainNavBar from './MainNavBar';
import KitchenCard from './KitchenCard';
import KitchenModal from './KitchenModal';
import { useToasts } from 'react-toast-notifications';
import actionDenied from '../common/actionDenied';
import dbDate from '../common/dbDate'

function updateKitchenOrder(id, preparando, employee, addToast, setOpened){
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
              'entregado':false, 
              'pagado': false,
              'status': 'Por entregar'
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
               borderClass={item.cocinero === employee ? 'border-green' : ''}
               statusClass={'status-green'}
               horaPreparacion={item.preparando === false ? null : dbDate(item.horaPreparacion) }
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
            addToast={addToast}
            isOpened={isOpened} 
            setOpened={setOpened}
            modalStatusClass={orderSelected.preparando === false ? "modal-status-off" : "modal-status-on"}
            orderStatusClass={orderSelected.preparando === false ? 'status-red' : 'status-green'}
            updateOrder={()=> {updateKitchenOrder(orderSelected.id, orderSelected.preparando, employee, addToast, setOpened)}}
            value={orderSelected.preparando === false ? "Preparar" : "Listo"}
            orderSelected={orderSelected}             
            />
        </div>   
      </div>
    );
  }

export default Kitchen;  