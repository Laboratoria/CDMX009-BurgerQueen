import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Logo from './components/Logo/Logo.js';
import BackgLogin from './components/BackgLogin';
import InitWaiter from './components/InitWaiter'
import './App.css';

function App() {
  return (
    <div className="App">
        <Router>

{/* PAGINA LOGIN */}
{/*           <Route path="/">
            <BackgLogin />
          </Route> */}

{/* PAGINA-1 MESERO */}
          
          <Route path="/waiter">
            <InitWaiter />
          </Route>


          </Router>
      

    </div>
  );
}



export default App;
