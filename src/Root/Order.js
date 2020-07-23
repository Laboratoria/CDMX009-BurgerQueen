import React, { useState } from 'react';
import Menu from '../components/Menu/Menu'
import products from '../data/products';
import PreviewOrder from '../components/PreviewOrder/PreviewOrder'
import './order.css'

function Order(){

  let [order, setOrder] = useState({
    total:0,
    items:[],
    status:false,
    tableNumber:""
  });

  function setTableNumber (tableNumber) {
    setOrder({
      ...order,
      tableNumber
    })
  }

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
      order.items.concat({ productId:product.id, subTotal:product.price, quantity:1, nameProduct:product.name, typeProduct:product.type, price:product.price })
    })
  }

  function calculateTotal (items = []) {
    return items.reduce((sum, item) => sum + item.quantity * item.price, 0)
  }

  function deleteItem (deleteItemId) {
    const newItems = order.items.filter(item => item.productId !== deleteItemId)

    setOrder({
      ...order,
      items: newItems,
      total: calculateTotal(newItems)
    })

  }

  function substractItem (itemSubstract){
    console.log(itemSubstract.productId, itemSubstract.quantity)
  }

      
    return (
        <div className= "principalContainer">
            <div className= "containerProducts">
              <Menu
                addItemToOrder={addItemToOrder}
                products={products}
              />
            </div>
            <div className= "containerOrder">
              <PreviewOrder
                setTableNumber= {setTableNumber}
                order= {order}
                deleteItem={deleteItem}
                substractItem={substractItem}
              />
            </div>
        </div>
    )
}

export default Order;