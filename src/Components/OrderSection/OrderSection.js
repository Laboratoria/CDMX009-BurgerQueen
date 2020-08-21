import React, {useState} from 'react';
import { Row } from 'antd'
import Order from '../Order/Order'
import IndexMenu from '../Menu/IndexMenu'
import Header from '../Header/Header';
import {db} from '../../firebase';

const OrderSection = () => {
  let [carrito,setCarrito]=useState({
    nombreCliente:"",
    total:0,
    item:[],
    status:false,
    pay:false,
    mesa:"",
    orden: (""+Math.random()).substring(2,7),
    mesero: ""
  })

  const initialStateCarrito = {
    nombreCliente:"",
    total:0,
    item:[],
    status:false,
    pay:false,
    mesa: "",
    orden: (""+Math.random()).substring(2,7),
    mesero: ""
  }

  function addProducto(producto){
    setCarrito({...carrito, item:[...carrito.item,producto]})
  }

  const deleteProducto = (id) => {
    setCarrito({...carrito, item: carrito.item.filter(item => item.id !== id)})
  }

  const suma = () => {
    let costs = carrito.item.map(item => item.subtotal);
    let result = costs.reduce((acc, el) => acc + el, 0);
    carrito.total = result;
    return result;
  }
  let total = suma();

  const guardar = async () => {
    carrito.fecha = Date.now()
    await db.collection('orders').doc().set(carrito);
    setCarrito({ ...initialStateCarrito })

}
const clientName = (e) => {
  let name = e.target.value;
  setCarrito({...carrito, nombreCliente: name})
}
function handleChange(value) {
  setCarrito({...carrito,mesa: value})
}
console.log(carrito.item)
const nuevoCarrito = {
  ...carrito,
  item: carrito.item.map(i => ({
    ...i,
    item: i.item + ' ' + i.extras.filter(e => e.checked)
                                 .map(e => e.ingrediente)
                                 .join(', ')
  }))
}
  
  return ( 
    <Row className= 'content' justify='space-around'>
      <Header />
      <IndexMenu carrito={carrito} addProducto={addProducto} setCarrito={setCarrito} />
      <Order carrito={carrito} setCarrito={setCarrito} deleteProducto={deleteProducto} total={total} guardar={guardar} clientName={clientName} handleChange={handleChange} nuevoCarrito={nuevoCarrito}/>
    </Row>      
  );
  }
   
export default OrderSection;