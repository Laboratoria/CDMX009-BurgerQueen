import React, {useState, useEffect} from 'react';
import firebase from '../../config/firebase/firebase-config'
import 'firebase/firestore'
import MainNavBar from './MainNavBar';
import '../../assets/styles/main.css'
import MenuNavBar from '../main/MenuNavBar'
import Card from '../main/Card'

function Menu({employee}) {
  let statusMenu = "active-btn";
  let statusKitchen = "nav-btn";
  let statusOrders = "nav-btn";
  let [menuBtn, setMenuBtn] = useState('breakfast')
  let [menuCards, setMenuCards] = useState([]);
  let products = [];

  useEffect(() => {
    
    console.log('renderizo menu');
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection(menuBtn).get()
      /*
      data.docs.map(doc => {
        console.log(doc.data());
       // menuCards.push(doc.data())
      })*/
      setMenuCards(data.docs.map(doc =>  doc.data()))
    }
    fetchData()
  },[menuBtn])

  function addProduct(name){
    console.log("click!", name);
    
    products.push(name);
    console.log(products);
  }
  
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
               onClick={()=> addProduct(item.name)} 
               name={item.name}
               image={item.image}
               price={item.price}
             />)
             )}

          </div>
          <div className="order-container">
          {products.forEach(item =>
             (<p>
                algo
             </p>
             )
             )}
          </div>
         </div>
         
      </div>
     
    );
  }

export default Menu;  