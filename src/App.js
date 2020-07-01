import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard.jsx';
import Orders from './components/orders/Orders'

function App() {

  const [datos, setDatos] = useState({
    nombre: 'Xel',
    numeroMesa: '2',
    numeroComensales: '2',
  })

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar datos={datos} setDatos={setDatos} />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/orders' component={Orders} datos={datos} setDatos={setDatos} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App; 