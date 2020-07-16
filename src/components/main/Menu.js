import React, {useState, useEffect} from 'react';
import firebase from '../../config/firebase/firebase-config'
import 'firebase/firestore'
import MainNavBar from './MainNavBar';
import '../../assets/styles/main.css'
import MenuNavBar from '../main/MenuNavBar'
import Card from '../main/Card'
import Ticket from './Ticket';


const calcTotal = (products) => products.reduce((sum, curr) => sum + curr.price, 0);
/*
const enviarACocina = ({ products }) => {
  const total = calcTotal(products);
  return db.coleccion('orders').set({ products, total })
}*/

function Menu({employee}) {
  let statusMenu = "active-btn";
  let statusKitchen = "nav-btn";
  let statusOrders = "nav-btn";
  let [menuBtn, setMenuBtn] = useState('breakfast');
  let [menuCards, setMenuCards] = useState([]);
  let [products, setProducts] = useState([]);
     
  useEffect(() => {
    
    console.log('renderizo menu');
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection(menuBtn).get()
      setMenuCards(data.docs.map(doc =>  doc.data()))
    }
    fetchData()
  },[menuBtn])


  
  function addProduct(item){
   
    // el item ya esta
    if (products.find((i) => i.name === item.name)) {
      const newProducts = products.map((item2) => {
        if (item.name === item2.name ) {
          return {
            ...item2,
            number: item2.number + 1,
            price: item2.price + item.price
          }
        }
        return item2;
      })
      setProducts(newProducts)
      
    } else { // hay q agregar al item
      setProducts((products) => [...products, {
        name: item.name,
        number: 1,
        price: item.price
      }])
      
    }
    
    console.log(products);
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
             
             {menuCards.map(item =>
             (<Card
               onClick={()=> addProduct(item)} 
               name={item.name}
               image={item.image}
               price={item.price}
             />)
             )}

          </div>
          <div className="order-container">
            <Ticket products={products} total={total2}/>
          </div>
         </div>
             { /*<button onClick={() => enviarACocina({ products, nroMesa })} value="Enviar a cocina" />*/}
      </div>
     
    );
  }

export default Menu;  