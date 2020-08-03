import React,{useState} from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from "./components/Home"
import Login from "./components/Login"
import Meseros from "./components/Meseros"
import {ProductsBF,ProductsFo} from './components/utils/data/Data'

const App = () => {
  const [order,setOrder] = useState({
    nombreCliente:"",
    status:false,
    item:[]
  })

  const addItemToOrder = (product) => {
    setOrder({...order, item: [...order.item, product]})
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
