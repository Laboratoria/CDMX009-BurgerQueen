import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import './App.css';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Switch>
        <Route path ='/' component={Dashboard} />
      </Switch>
      <h1>hola mundo</h1>
    </div>
    </BrowserRouter>
  );
}

export default App; 