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
    let found = order.items.find(({ productId })=> productId === product.id)
    setOrder({
      ...order,
      items: found ?
      order.items.map(
        item=>(
          item.productId === product.id ? {...item, quantity:item.quantity+1, subTotal: product.price*item.quantity } 
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
    console.log(order)
    let found = order.items.find(({ productId })=> productId === itemSubstract.productId)
    const newItems = order.items.filter(item => item.productId !== itemSubstract.productId)
    if (found){
      order.items.map( item => {
        if (itemSubstract.productId === item.productId){
          if (item.quantity === 1){
            setOrder({
              ...order,
              items: newItems,
              total: calculateTotal(newItems)
            })
          } else if (item.quantity >=2) {
            console.log('Aquí restamos cantidad')
            setOrder({
              ...order,
              quantity:item.quantity-1, 
              subTotal: itemSubstract.price*item.quantity
            })
          }
        }
      })
    }
  }

      
    return (
        <div className= "principalContainer">
              <Menu
                addItemToOrder={addItemToOrder}
                products={products}
              />
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