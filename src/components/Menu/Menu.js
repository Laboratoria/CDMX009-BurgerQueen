import React from 'react';
import './menu.css'


const Menu = ({products,addItemToOrder}) => {

    return (
        <div className="containerProducts">
            {
                products.map(product=>(
                    (product.type === "breakfast") ?
                    <div className="containerBreakfast">
                    <img
                    key= {product.id}
                    className='ImgsProducts'
                    alt= {product.name}
                    src= {product.img}
                     onClick={() =>{
                          addItemToOrder(product)
                        }}
                    />
                    </div>
                    :
                    <div className="containerDinner">
                    <img
                    key= {product.id}
                    className='ImgsProducts'
                    alt= {product.name}
                    src= {product.img}
                     onClick={() =>{
                          addItemToOrder(product)
                        }}
                    />
                    </div>
                ))
            } 
        </div>
    )
}
export default Menu;

