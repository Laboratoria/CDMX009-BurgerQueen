import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
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

        <Route exact path="/waiter" component={InitWaiters} />

        <Route exact path="/login" component={BackgLogin} />

        <Route exact path="/breakfast" component={BreakFast} />

        <Route exact path="/restday" component={RestDay} />

        <Route exact path="/waiterregister" component={WaiterRegister} />

        <Route exact path="/waiteraccount" component={WaiterAccount} />

        <Route exact path="/kitchen" component={Kitchen} />

      </Router>

    </div>
  );
}


export default App;
