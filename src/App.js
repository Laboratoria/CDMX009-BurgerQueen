import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard.jsx';
import Orders from './components/orders/Orders';
import SignIn from './components/auth/SignIn';
import AllOrders from './components/admon/AllOrders.js';
import Admin from './components/admin/Admin';
import BurgerQueen from './components/BQ/BurgerQueen.jsx'
import 'materialize-css/dist/css/materialize.min.css';
import { firebase } from './firebase/firebaseConfig';

function App() {

  //const [firebaseUser, setFirebaseUser] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect (() => {
    setLoading(true);
    const unsuscribe = firebase.auth().onAuthStateChanged(user => {
      console.log('usuario', user);
      //setFirebaseUser(user);
      setLoading(false);
    });
    return unsuscribe;
  }, [])


  const [datos, setDatos] = useState({
    numeroMesa: '',
    numeroComensales: '',
    productos: [],
    total: '',
    propina: '',
    nuevoTotal: '',
    metodoPagar: ''
  });

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path='/initial' component={BurgerQueen} />
          <Route path='/signin' component={SignIn} />
          <Route path='/admin' component={Admin} />
          <Route exact path='/' render={() => <Dashboard datos={datos} setDatos={setDatos} />} />
          <Route path='/orders' render={() => <Orders datos={datos} setDatos={setDatos} />} />
          <Route path='/admon' component={AllOrders} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App; 