import React, { useState } from 'react';
import {
  // BrowserRouter as Router,
  Switch,
  Route,
  HashRouter
  //Link
} from "react-router-dom";

import RestDay from './components/RestDay';
import Kitchen from './components/Kitchen';
import BreakFast from './components/BreakFast';
import BackgLogin from './components/BackgLogin';
import InitWaiters from './components/InitWaiter';
import WaiterAccount from './components/WaiterAccount';
import WaiterRegister from './components/WaiterRegister';
import KitchenRegister from './components/KitchenRegister';

import 'react-bootstrap/dist/react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

const products = [
  {
    id: 1,
    name: 'Cafe Americano',
    price: 5.00,
    total: 0,
    image: 'american-coffe.jpg'
  },
  {
    id: 2,
    name: 'Cafe con Leche',
    price: 7.00,
    total: 125.00,
    image: 'coffe-milk.jpg'
  },
  {
    id: 3,
    name: 'Sandwich',
    price: 7.00,
    total: 125.00,
    image: 'sandwich.jpg'
  },
  {
    id: 4,
    name: 'Jugo',
    price: 10.00,
    total: 125.00,
    image: 'orange-juice.jpg'
  }
]

function App() {
  const initialDataClient = {
    numorder: '',
    namewaiter: '',
    nameclient: '',
    numtable: '',
    numpeople: '',
    items: []
  }

  const [client, setClient] = useState(initialDataClient);

  const [order, setOrder] = useState({
    items: []
  });

  const addItemToOrder = (product) => {
    let newItems = [];

    if (client.items.find((i) => i.id === product.id)) {
      newItems = client.items.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      })
    } else {
      newItems = [...client.items, { ...product, quantity: 1 }]
    }

    setClient({
      ...client,
      items: newItems
    })
  }

  const deleteItem = (position) => {
    if (position > -1) {
      client.items.splice(position, 1);
    }
    console.log(client.items)

    setClient({
      ...client,
      items: client.items
    })

  }

  return (
    <div className="App">

      <HashRouter>
        <Switch>
          <Route exact path="/">
            <BackgLogin />
          </Route>

          <Route exact path="/waiter">
            <InitWaiters client={client} setClient={setClient} order={order} setOrder={setOrder} />
          </Route>

          <Route exact path="/login">
            <BackgLogin />
          </Route>

          <Route exact path="/breakfast">
            <BreakFast client={client} setClient={setClient} products={products} addItemToOrder={addItemToOrder} deleteItem={deleteItem} /* order={order} setOrder={setOrder} */ />
          </Route>

          <Route exact path="/restday">
            <RestDay client={client} setClient={setClient} />
          </Route>

          <Route exact path="/waiterregister">
            <WaiterRegister client={client} setClient={setClient} /* order={order} setOrder={setOrder} */ />
          </Route>

          <Route exact path="/kitchenregister">
            <KitchenRegister client={client} setClient={setClient} /* order={order} setOrder={setOrder} */ />
          </Route>

          <Route exact path="/waiteraccount">
            <WaiterAccount client={client} setClient={setClient} /* order={order} setOrder={setOrder} */ />
          </Route>

          <Route exact path="/kitchen">
            <Kitchen client={client} setClient={setClient} /* order={order} setOrder={setOrder} */ />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
