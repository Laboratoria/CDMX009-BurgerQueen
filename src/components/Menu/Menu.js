import React, { Fragment } from 'react';

const Menu = ({food, ordered, addProduct, foods}) => {
    
    const {name, img, id, price} = food;

    const SelectProduct = id => {
        const product = foods.filter(elem => elem.id === id)
        addProduct([
            ...ordered, 
            product[0]
        ]);
    }

    const DeleteFood = id => {
        const order = ordered.filter(elem => elem.id !== id)
        addProduct(order)
    }

    return (
        <div>
            { foods
                ?
                    (
                        <img alt= {name} src= {img} onClick={() => SelectProduct(id)}/>
                    )
                : 
                    (
                        <Fragment>
                            <p>{name}</p>
                            <p>{price}</p>
                            <button 
                            onClick={() => DeleteFood(id)}
                            >Eliminar</button>
                        </Fragment>
                    )
                }
        </div>
    )
}
export default Menu;
