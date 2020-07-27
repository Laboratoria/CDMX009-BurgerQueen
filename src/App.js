import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard.jsx';
import Orders from './components/orders/order/Orders';
import SignIn from './components/auth/SignIn';
import AllOrders from './components/admon/all-orders/AllOrders';
import Admin from './components/admon/Admin';
import BurgerQueen from './components/BQ/BurgerQueen.jsx';
import 'materialize-css/dist/css/materialize.min.css';
import { firebase } from './firebase/firebaseConfig';

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
          <Route path='/initial' component={BurgerQueen} />
          <Route path='/login' component={SignIn} />
          <Route path='/admin' component={Admin} />
          <Route exact path='/' render={() => <Dashboard data={data} setData={setData} />} />
          <Route path='/kitchen' render={() => <Orders />} />
          <Route path='/orders' component={AllOrders} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App; 
