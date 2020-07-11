import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard.jsx';
import Orders from './components/orders/Orders'
import SignIn from './components/auth/SignIn';
import BurgerQueen from './components/BQ/BurgerQueen.jsx'
import 'materialize-css/dist/css/materialize.min.css';

function App() {

  const [datos, setDatos] = useState({
    numeroMesa: '',
    numeroComensales: '',
    productos: [],
    total: '',
    propina: '',
    nuevoTotal: '',
    metodoPagar: '',
  })

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path='/initial' component={BurgerQueen} />
          <Route path='/signin' component={SignIn} />
          <Route exact path='/' render={() => <Dashboard datos={datos} setDatos={setDatos} />} />
          <Route path='/orders' render={() => <Orders datos={datos} setDatos={setDatos} />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App; 