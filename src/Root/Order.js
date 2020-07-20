import React, { useState } from 'react';
import Menu from '../components/Menu/Menu'
import products from '../data/products';
import PreviewOrder from '../components/PreviewOrder/PreviewOrder'

function Order(){
  let uniqid = require('uniqid');

  let [order, setOrder] = useState({
    id:"",
    total:0,
    items:[],
    status:false,
    tableNumber:"",
    pay:false
  });


    function addItemToOrder (product){
      //primero validar order.items para saber si existe un elemento con el mismo id
      let found = order.items.find(({ productId })=> productId === product.id)
      setOrder({
        ...order,
        items: found ?
        order.items.map(
          item=>(
            item.productId === product.id ? { ...Order, ...item, quantity:item.quantity+1, subTotal: product.price*item.quantity } 
            :item
          )
        )
        : 
        order.items.concat({ productId:product.id, subTotal:product.price, quantity:1, nameProduct:product.name, price:product.price })
      })
    }

    function addTotalToOrder(product){
      console.log(order.items[0])
    }
      
    return (
        <div>
            <p>Hey! soy la ventana en donde vas a ordenar</p>
               <Menu
               addItemToOrder={addItemToOrder}
               products={products}
               addTotalToOrder={addTotalToOrder}
              />
            <PreviewOrder
              order= {order}
            />
        </div>
    )
}

export default Order;