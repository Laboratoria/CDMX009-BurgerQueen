import React, { useState } from 'react';
import Menu from '../components/Menu/Menu'
import PreviewOrder from '../components/PreviewOrder/PreviewOrder'

function Order(){

    const [products, setProducts] = useState (
      [
        {id:1, name:"Sandwich de jamón y queso", price:5,  img:"https://cutt.ly/eik6Mgu", quantity: 1},
        {id:2, name:"Agua chica", price:5,  img:"https://cutt.ly/LilqkMQ", quantity: 1},
        {id:3, name:"Agua mediana", price:7,  img:"https://cutt.ly/7ile1MF", quantity: 1},
        {id:4, name:"Aros de cebolla", price:5,  img:"https://cutt.ly/iile6sl", quantity: 1},
        {id:5, name:"Café americano", price:5,  img:"https://cutt.ly/bilry71", quantity: 1},
        {id:6, name:"Café con leche", price:7,  img:"https://cutt.ly/1ilrhF3", quantity: 1},
        {id:7, name:"Hamburguesa doble pollo", price:15,  img:"https://cutt.ly/yilrnBm", quantity: 1},
        {id:8, name:"Hamburguesa doble res", price:15,  img:"aqui", quantity: 1},
        {id:9, name:"Hamburguesa doble vegetariana", price:15,  img:"aqui", quantity: 1},
        {id:10, name:"Hamburguesa sencilla pollo", price:10,  img:"aqui", quantity: 1},
        {id:11, name:"Hamburguesa sencilla res", price:10,  img:"aqui", quantity: 1},
        {id:12, name:"Hamburguesa sencilla vegetariana", price:10,  img:"aqui", quantity: 1},
        {id:13, name:"Jugo de frutas", price:7,  img:"aqui", quantity: 1},
        {id:14, name:"Papas fritas", price:10,  img:"aqui", quantity: 1},
        {id:15, name:"Refresco chico", price:7,  img:"aqui", quantity: 1},
        {id:16, name:"refresco mediano", price:10,  img:"aqui", quantity: 1}
      ]
    )

    const [ OrderOfProducts, setOrderOfProducts ] = useState([]);

    

    return (
        <div>
            <p>Hey! soy la ventana en donde vas a ordenar</p>
            { products.map(product => (
               <Menu
               key = {product.id} 
               food = {product}
               foods = {products} 
               ordered = {OrderOfProducts} ////Este es como el carrito
               addProduct = {setOrderOfProducts}
             />
            ))}
            <PreviewOrder
              ordered = {OrderOfProducts} ////Este es como el carrito
              addProduct = {setOrderOfProducts}
            />
        </div>
    )
}

export default Order;