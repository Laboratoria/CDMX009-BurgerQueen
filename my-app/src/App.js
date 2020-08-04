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
import {ProductsBF,ProductsFo} from './components/utils/data/Data'
import {v4 as uuidv4} from "uuid";



const App = () => {

  
  const [order,setOrder] = useState({
    nombreCliente:"",
    status:false,
    item:[],
    kitchen:[]

  })

  const addItemToOrder = (product) => {
    setOrder({...order, item: [...order.item, product]})
  }

  const sendOrderKitchen = (comanda) => {
    setOrder({...order,kitchen: [...order.kitchen,comanda]})
      console.log(order.kitchen)
  

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
