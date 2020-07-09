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
  let [products, setProducts] = useState([]);
  let [quantity, setQuantity] = useState(products);
   
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

  
  function addProduct(item){
    
    console.log("click!");
    
    
    
    if(products.length == 0){
      setProducts([...products,{
        name: item.name,
        number: 1,
        price: item.price
      }])
      
    }else{
      let a = products.filter((e) => item.name === e.name);
      
      if(a.length ==! 0){
        
      quantity.map((e,index)=>{
          if(e.name === item.name){
            e.number += 1
            e.price = item.price*e.number
                       
          }
        })
       setProducts(quantity); 
      }else{
        console.log('no está')
        setProducts([...products,{
          name: item.name,
          number: 1,
          price: item.price
        }])
      }

    }
    setQuantity(products);
    console.log('quantity =>', quantity);
  }
   
  console.log(products);
  
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
          {products.map(item =>
             (<p>
              {item.number}  {item.name}  {item.price}
              </p>
             )
             )}
             
          </div>
         </div>
         
      </div>
     
    );
  }

export default Menu;  