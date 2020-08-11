import React, { Fragment } from 'react';
import './menu.css'


const Menu = ({products,addItemToOrder}) => {

    return (
        <div className="containerImages">
            <div className="containerBreakfast">
                {
                    products.map(product=> (
                        (product.type === "breakfast") ? 
                            <img
                                key= {product.id}
                                className='ImgsProducts'
                                alt= {product.name}
                                src= {product.img}
                                onClick={() =>{
                                addItemToOrder(product)
                                }}
                            />
                        :
                        <Fragment/>
                    ))
                }
            </div>
            <div className="containerDinner">
                {
                    products.map(product => (
                        (product.type === "dinner") ?
                            <img
                            key= {product.id}
                            className='ImgsProducts'
                            alt= {product.name}
                            src= {product.img}
                            onClick={() =>{
                                addItemToOrder(product)
                                }}
                            />
                        : <Fragment/>
                    ))
                }
            </div>
        </div>
    )
}
export default Menu;

