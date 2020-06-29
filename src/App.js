import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard.jsx';
import SignIn from './components/auth/SignIn';
import './App.css';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path ='/' component={Dashboard} />
        <Route path='/signin' component={SignIn} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App; 
