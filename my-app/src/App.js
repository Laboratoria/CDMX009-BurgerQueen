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
import {v4 as uuidv4} from "uuid";


const App = () => {

  
  const [order,setOrder] = useState({
    nombreCliente:"",
    status:false,
    item:[]
  })

  const addItemToOrder = (product) => {
    setOrder({...order, item: [...order.item, product]})
  }
  
  const {item} = order

  const usersData =[
    {id:uuidv4(), name:"Shei",num:"1",ordenP:" "}
]

const {users, setUsers} =useState(usersData);
// agregar usuario y numero de mesa en un futuro todo el pedido 
const addUser= (user) =>{
user.id =uuidv4()
user.ordenP=setOrder
setUsers([
    ...users,
    user
])
}


  
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
            addUser ={addUser}  
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
