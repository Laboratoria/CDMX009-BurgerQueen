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


const calcTotal = (products) => products.reduce((sum, curr) => sum + curr.price, 0);

const sendToKitchen = (addToast,employee, client, setClient, tab, setTab, total2, products, setProducts) => {
  
  const date = new Date();
  let id = employee+'_'+tab+'_'+date.getTime();
  const db = firebase.firestore(); 

  const fecthCount = async () => {
  
  }

  const fetchData = async () => {
    
    const count = await db.collection('counter').doc('counter').get()
     
    const NunOrder = count.data().ordersCount + 1;

    await db.collection('counter').doc('counter').update({
      'ordersCount': NunOrder
    })
    
    await db.collection('orders').doc(id).set({
        'id': id,
        'mesero': employee,
        'cocinero': '',
        'cliente': client, 
        'mesa': tab,
        'total': total2,
        'horaPedido': date,
        'horaPreparacion': '',
        'horaEntrega': '',
        'status': 'Por preparar',
        'preparando': false,
        'listo' : false,
        'entregado': false,
        'numOrden': NunOrder, 
        'orden':{}
    })
  }

  fetchData().then(()=>{
    products.map((product, index) =>{
      db.collection('orders').doc(id).update({
        ['orden.producto_'+index]:{
          'id': product.id,
          'name': product.name,
          'number': product.number,
          'price': product.price,
          'uPrice': product.uPrice
        }
      })
    })
  }).then(()=>{
    console.log('orden enviada correctamente')
    addToast('La orden se ha enviado exitosamente', {
      placement:'top-center', 
      appearance: 'success' 
    })
    setProducts([]);
    setTab('');
    setClient('');
  }).catch(err=>{
    console.log(err);
    addToast('Hubo un error al enviar la orden', {
      placement:'top-center', 
      appearance: 'error' 
    })
  })
}

function Menu({employee, role}) {
  
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
  
  useEffect(() => {
    
    console.log('renderizo menu');
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection(menuBtn).get()
      setMenuCards(data.docs.map(doc =>  doc.data()))
    }
    fetchData()
  },[menuBtn])

  useEffect(() => {
    
    if(client !== '' && tab !== '' && total2 !== 0){
      console.log('Puedo enviar a cocina');
      setSendBtn('active-menu-btn');
    }else{
      setSendBtn('menu-nav-btn');
    }
  },[client, tab, products])

  function addProduct(cardItem){
        // el item ya esta
    if (products.find((i) => i.id === cardItem.id)) {
      const newProducts = products.map((newItem) => {
        if (cardItem.id === newItem.id ) {
          return {
            ...newItem,
            number: newItem.number + 1,
            price: newItem.price + newItem.uPrice
          }
        }
        return newItem;
      })
      setProducts(newProducts)
      
    } else { // hay q agregar al item
      setProducts((products) => [...products, {
        id: cardItem.id,
        name: `${cardItem.name}`,
        number: 1,
        price: cardItem.price,
        uPrice: cardItem.price
      }])
    }
  }

  function subtractProduct(orderItem){
   
    console.log('quita producto', orderItem);
    
    if(orderItem.number > 1){
      const newProducts = products.map((newItem) => {
        if (orderItem.id === newItem.id) {
          return {
            ...newItem,
            number: newItem.number - 1,
            price: newItem.price - newItem.uPrice
          }
        }
       return newItem;
      })
      setProducts(newProducts)
    }else{
      let newProducts = products.map((newItem) => newItem)
      newProducts = newProducts.filter(e => e.id !== orderItem.id)
      setProducts(newProducts)
    }
  }

  function compareProduct(cardItem){
    if(cardItem.id === 'h1' || cardItem.id === 'h2'){
      setOpened(true);
      setBurger(cardItem);
    }else{
      addProduct(cardItem)
    }
  } 
  
  function addBurger(){
    console.log('se mando sabor y extra', burger);
    console.log(flavor);
   // console.log(extra);
    let cardItem = {
      id: burger.id+flavor.id,
      name: `${burger.name} ${flavor.name}`,
      price: burger.price
    }

    let extras =[];
    document.querySelectorAll('.extra').forEach((e)=>{
      if(e.checked){
      let extra = {
        id: e.id,
        name: e.value,
        uPrice: 1 
      }
      extras.push(extra)
      }  
   })

    console.log(extras);
    if(extras.length !== 0){
      for(let i in extras){
        cardItem = {
          id: cardItem.id+extras[i].id,
          name: `${cardItem.name} | ${extras[i].name}`,
          price: cardItem.price + extras[i].uPrice 
        }
      }
    }
    
    setFlavor({
      id: 'f1',
      name: 'res' 
    });
    
    addProduct(cardItem);
    console.log(cardItem);
  }

  const total2 = calcTotal(products)
  
    return (
      <div className="main-container">
         <MainNavBar 
         employee={employee}
         statusMenu={statusMenu}
         statusKitchen={statusKitchen}
         statusOrders={statusOrders} 
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
                  compareProduct(cardItem)
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
                onClickSub={(orderItem)=> subtractProduct(orderItem)}
                onClickAdd={(orderItem)=> addProduct(orderItem)}
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
                        addToast('Complete todos los campos de la orden antes de enviar', { autoDismiss: true, placement:'top-center', appearance: 'warning' })
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
            onClickAccept={addBurger}
            
            />
          </div>   
      </div>
     
    );
  }

export default Menu;  