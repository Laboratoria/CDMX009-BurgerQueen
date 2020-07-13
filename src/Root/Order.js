import React, { useState } from 'react';
import Menu from '../components/Menu/Menu'
// import PreviewOrder from '../components/PreviewOrder/PreviewOrder'
import product from '../data/products';

const uniqid = require('uniqid');

function Order(){

  let [products, setProducts] = useState(product);
  let [order, setOrder]=useState({
    nombre:"",
    total:0,
    items:[],
    status:false,
    pay:false
  });

  //
    function addProduct(id)  {
      //esta funcion la vas a dejar de usar
      product.forEach((elem)=> {
        if (elem.id === id) {
          elem.quantity += 1;
          
          elem.total = elem.quantity*elem.price;//este procesamiento va en aaItemToOrder
          setProducts(product)
        }
      })
    }

    

    function addItemToOrder (ide){
      //primero validar order.items para saber si existe un elemento con el mismo id
      
      let datos=order.items[0].name 
      console.log(datos)

      products.forEach((item)=> {
        //if (item.id === ide){
          item.quantity += 1;
          item.total = item.quantity*item.price;
          setOrder({...order,items:[...order.items, item]})
        //}
      })
      console.log(order.items)
      //si existe entonce  order.items.quantity +1
      //si no existe entonces order.items, elemento
      //Tambien desde aqui puedes manipular order.item.total 
      // setOrder({...order,items:[...order.items,elemento]})
    }



      // function addItems (items, newItem) {
    //   const found = items.find(product => product.id === newItem.id);
    //   let newItems = [];
    //   if (found) {
    //     found.quantity +=1;
    //     newItems = items.filter(item => item.id !== found.id);
    //     newItems.push(found)
    //   } else {
    //     newItem.quantity = 1
    //     newItems.push(newItem)
    //   }

    //   return newItems;
    // }
      


    return (
        <div>
            <p>Hey! soy la ventana en donde vas a ordenar</p>
               <Menu
               order = {order}
               addProduct = {addProduct}
               addItemToOrder={addItemToOrder}
             />
            {/* <PreviewOrder
              ordered = {OrderOfProducts} ////Este es como el carrito
              addProduct = {setOrderOfProducts}
            /> */}
        </div>
    )
}

export default Order;