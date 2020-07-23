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




function App() {
//   let [order,setorder]=useState({
//     nombreCliente:"",
//     status:false,
//     item:[]
//   })

//   let setItemToOrder=()=> 
//   function addItemToOrder(product){
//     setOrder({...order, items:[...order.items, product]}) 
//  }

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
            <Meseros />
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
