import React,{useState} from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from "./components/Home"
import Cocina from "./components/Cocina"
import Login from "./components/Login"
import Meseros from "./components/Meseros"
import Caja from "./components/Caja"
import {ProductsBF,ProductsFo} from './components/utils/data/Data'
import {v4 as uuidv4} from "uuid";
import {db} from "./components/firebase"



const App = () => {

  
  const [order,setOrder] = useState({
    nombreCliente:"",
    status: 'placed', // placed= colocada, prepared= parepada, delivered = entregada
    item:[],
    kitchen:[]
  })

  const addItemToOrder = (product) => {
    setOrder({...order, item: [...order.item, product]})
  }

  const sendOrderKitchen = async(comanda) => {
    console.log(comanda)
    // orders.map(order => order.placedAt.toDate().toISOString())
    setOrder({...order, kitchen: [...order.kitchen,comanda]})
    await db.collection('orders').doc().set({...order, ...comanda, placedAt: new Date()});
      
  

  }

  const deleteItem = (id) => {
    let yaEliminado = false;
    const newItems = order.item.filter((item) =>  {
      if (yaEliminado) {
        return true;
      }
      yaEliminado = yaEliminado || item.id === id;
      return item.id !== id;
    });
    setOrder({...order, item: newItems})
  }
  
  const {item} = order

  

  
  return (
    <div className="App">
      <Router>
      <div>
        <ul>
         
        </ul>

        <Switch>
        <Route path="/Caja">
            <Caja/>
            </Route>
        <Route path="/Cocina">
            <Cocina />
          </Route>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/Meseros">
            <Meseros
            comanda={item} 
            ProductsBF={ProductsBF}
            ProductsFo={ProductsFo}
            addItemToOrder={addItemToOrder}
            deleteItem={deleteItem}
            sendOrderKitchen={sendOrderKitchen}


             />
          </Route>
          <Route path="/">
            <Login />
          </Route>
          
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
