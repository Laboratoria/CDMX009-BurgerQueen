import React from 'react';
import './menu.css'


const Menu = ({products,addItemToOrder,addTotalToOrder}) => {

    return (
        <div>
            {
                products.map(product=>(
                    <img
                    key= {product.id}
                    className='ImgsProducts'
                    alt= {product.name}
                    src= {product.img}
                     onClick={() =>{
                          addItemToOrder(product)
                          addTotalToOrder()
                        }}/>
                ))
            } 
        </div>
    )
}
export default Menu;

