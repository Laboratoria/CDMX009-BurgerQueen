import React, { Fragment, useState, useEffect } from 'react';
import { db } from './firebase/firebase-config'
import Routes from './components/Routes.js';

import coffeMilk from './imgs/coffeMilk.png';
import coffe from './imgs/coffe.png';
import sandwich from './imgs/sandwich.png';
import juice from './imgs/juice.png';
import simpleBurguer from './imgs/simpleBurguer.png';
import doubleBurguer from './imgs/doubleBurguer.png';
import frenchFries from './imgs/frenchFries.png';
import onion from './imgs/onion.png';
import smallWater from './imgs/smallWater.png';
import bigWater from './imgs/bigWater.png';
import smallSoda from './imgs/smallSoda.png';
import bigSoda from './imgs/bigSoda.png';




function App() {
  const [breakfasts, saveBreakfast] = useState([
    { id: 1, dish: "Café con leche", img: coffeMilk, price: 7, quantity: 1 },
    { id: 2, dish: "Café americano", img: coffe, price: 5, quantity: 1 },
    { id: 3, dish: "Sandwich de jamón y queso", img: sandwich, price: 10, quantity: 1 },
    { id: 4, dish: "Jugo de frutas natural", img: juice, price: 7, quantity: 1 }
  ])
  const [lunchs, saveLunch] = useState([
    { id: 5, idItem: 0, dish: "Hamburguesa simple", img: simpleBurguer, price: 10, addittions: [], quantity: 1 },
    { id: 6, idItem: 0, dish: "Hamburguesa doble", img: doubleBurguer, price: 15, addittions: [], quantity: 1 },
    { id: 7, dish: "Papas fritas", img: frenchFries, price: 5, quantity: 1 },
    { id: 8, dish: "Aros de cebolla", img: onion, price: 5, quantity: 1 },
    { id: 9, dish: "Agua 500ml", img: smallWater, price: 5, quantity: 1 },
    { id: 10, dish: "Agua 750ml", img: bigWater, price: 7, quantity: 1 },
    { id: 11, dish: "Soda 500ml", img: smallSoda, price: 7, quantity: 1 },
    { id: 12, dish: "Soda 750ml", img: bigSoda, price: 7, quantity: 1 },
  ])

  const [order, setOrder] = useState({
    waiter: "",
    client: "",
    table: "",
    items: [],
    totalProducts: 0,
    total: 0,
    state: "pending" //options: ready, delivered, pending
  })



  return (
    <Fragment>
      <Routes
        breakfasts={breakfasts}
        lunchs={lunchs}
        order={order}
        setOrder={setOrder}
      />

    </Fragment>
  );
}

export default App;
