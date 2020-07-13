import React from 'react';
import {
  BrowserRouter as Router,
  //Switch,
  Route,
  //Link
} from "react-router-dom";

import BackgLogin from './components/BackgLogin';
import InitWaiters from './components/InitWaiter';
import BreakFast from './components/BreakFast';
import RestDay from './components/RestDay';
import WaiterRegister from './components/WaiterRegister';
import WaiterAccount from './components/WaiterAccount';
import Kitchen from './components/Kitchen';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>

        <Route exact path="/">
          <BackgLogin />
        </Route>

        <Route exact path="/waiter">
          <InitWaiters />
        </Route> 

        <Route exact path="/login">
          <BackgLogin />
        </Route>

        <Route exact path="/breakfast">
          <BreakFast />
        </Route>

        <Route exact path="/restday">
          <RestDay />
        </Route>

        <Route exact path="/waiterregister">
          <WaiterRegister />
        </Route>           

        <Route exact path="/waiteraccount">
          <WaiterAccount />
        </Route> 

        <Route exact path="/kitchen">
          <Kitchen />
        </Route> 

      </Router>

    </div>
  );
}


export default App;
