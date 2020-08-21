import React, {useState, useEffect} from 'react';
import firebase from '../../config/firebase/firebase-config'
import 'firebase/firestore'
import MainNavBar from './MainNavBar';
import '../../assets/styles/main.css'
import MenuNavBar from '../main/MenuNavBar'
import Card from '../main/Card'
import Ticket from './Ticket';
import Modal from '../common/Modal'
import { useToasts } from 'react-toast-notifications'
import actionDenied from '../common/actionDenied'
import sortOrders from '../common/sortOrders'
import sendToKitchen from '../common/sendToKitchen'
import {calcTotal, addProduct, subtractProduct, compareProduct, addBurger,} from '../common/menuFunctions'

function Menu({employee, role, ordersAlert, setOrdersAlert}) {
  
  const { addToast } = useToasts()
  let statusMenu = "active-btn";
  let statusKitchen = "nav-btn";
  let statusOrders = "nav-btn";
  let [menuBtn, setMenuBtn] = useState('breakfast');
  let [menuCards, setMenuCards] = useState([]);
  let [products, setProducts] = useState([]);
  let [client, setClient] = useState('');
  let [tab, setTab] = useState('');
  let [sendBtn, setSendBtn]=useState('menu-nav-btn');
  let [isOpened, setOpened] = useState(false);
  let [burger, setBurger] = useState();
  let [flavor, setFlavor] = useState({
    id: 'f1',
    name: 'res' 
  }); 
  const total2 = calcTotal(products)
  
  useEffect(() => {
    
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection(menuBtn).get()
      setMenuCards(data.docs.map(doc =>  doc.data()))
    }
    fetchData()
  },[menuBtn])

  useEffect(() => {
    
    if(client !== '' && tab !== '' && total2 !== 0){
      
      setSendBtn('active-menu-btn');
    }else{
      setSendBtn('menu-nav-btn');
    }
  },[client, tab, products])

  useEffect(() => {
   
    const db = firebase.firestore();
    db.collection('orders').onSnapshot((data)=>{
      let done = data.docs.filter(doc => doc.data().listo === true && doc.data().entregado === false)
      setOrdersAlert(sortOrders(done)); 
        
    })
  },[])

  return (
      <div className="main-container">
         <MainNavBar 
         employee={employee}
         rol={role}
         statusMenu={statusMenu}
         statusKitchen={statusKitchen}
         statusOrders={statusOrders}
         ordersAlert={ordersAlert}  
         />
         <MenuNavBar setMenuBtn={setMenuBtn}/>
         <div className="menu-container">
          <div className="cards-container">
             
             {menuCards.map(cardItem =>
             (<Card
              key={cardItem.id} 
               onClick={()=> {
                 if(role === 'cocinero'){
                  actionDenied(addToast)
                 }else{
                  compareProduct(cardItem, setOpened, setBurger, products, setProducts)
                 }
                 }} 
               name={cardItem.name}
               image={cardItem.image}
               price={cardItem.price}
             />)
             )}

          </div>
            <div className="order-container">
              <Ticket products={products} 
                total={total2} 
                onClickSub={(orderItem)=> subtractProduct(orderItem,  products, setProducts)}
                onClickAdd={(orderItem)=> addProduct(orderItem, products, setProducts)}
                onChangeCli={(client)=>{setClient(client)}}
                onChangeTab={(tab)=>setTab(tab)} 
                sendBtn={sendBtn}  
                client={client}
                tab={tab}
                onClickSend={()=>{
                    if(role === 'cocinero'){
                      actionDenied(addToast)
                    }else{
                      if(client !== '' && tab !== '' && total2 !== 0){
                        sendToKitchen(addToast,employee, client, setClient, tab, setTab, total2,  products, setProducts)
                      }else{
                        addToast('Complete todos los campos de la orden antes de enviar', { 
                          autoDismiss: true, 
                          placement:'top-center', 
                          appearance: 'warning' })
                      }
                    }
                  }}
                />
            </div>
         </div>
          <div>
            <Modal isOpened={isOpened} 
            setOpened={setOpened} 
            setFlavor={setFlavor} 
            onClickAccept={()=>addBurger(burger, flavor, setFlavor, products, setProducts )}
            
            />
          </div>   
      </div>
     
    );
  }

export default Menu;  