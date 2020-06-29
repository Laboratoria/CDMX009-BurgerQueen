import React from 'react';

const Experiment = ({food, order, addProduct, foods}) => {
    
    const {name, img, id} = food;

    const SelectProduct = id => {
        const product = foods.filter(elem => elem.id === id)
        addProduct([
            ...order,
            product
        ]);
    }

    return (
        <div>
            <img alt= {name} src= {img} onClick={() => SelectProduct(id)}/>
        </div>  
    )
}
export default Experiment;
