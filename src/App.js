import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Order from './Root/Order';
import Kitchen from './Root/Kitchen';
import Finish from './Root/Finish'
import Navigation from './components/Nav/Navigation'

function App() {
  return (
    <BrowserRouter>
    <Navigation />
    <Switch>
      <Route path="/Kitchen" component={Kitchen}/>
      <Route path="/Finish" component={Finish}/>
      <Route path="/" component={Order}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
