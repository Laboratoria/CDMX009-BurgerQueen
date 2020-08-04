import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { firebase } from './firebase/firebaseConfig';
import 'materialize-css/dist/css/materialize.min.css';

import Dashboard from './components/dashboard/Dashboard.jsx';
import Orders from './components/orders/order/Orders';
import SignIn from './components/auth/SignIn';
import AllOrders from './components/admon/all-orders/AllOrders';
import Admin from './components/admon/Admin';
import BurgerQueen from './components/BQ/BurgerQueen.jsx';

function App() {

  useEffect(() => {
    const unsuscribe = firebase.auth().onAuthStateChanged(user => {
      return user;
    });
    return unsuscribe;
  }, []);

  const [data, setData] = useState({
    numeroMesa: '',
    numeroComensales: '',
    productos: [],
    total: '',
  });

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' render={() => <BurgerQueen />} />
          <Route path='/login' render={() => <SignIn />} />
          <Route path='/admin' render={() => <Admin />} />
          <Route path='/dashboard' render={() => <Dashboard data={data} setData={setData} />} />
          <Route path='/kitchen' render={() => <Orders />} />
          <Route path='/orders' render={() => <AllOrders />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App; 
