import React from 'react';
import Experiment from '../experiment/Experiment'

const PreviewOrder = ({setOrderOfProducts}) => {
    console.log(setOrderOfProducts)
    return (
        <div>
        <h2> Preview de apartado orden </h2>
        
        {setOrderOfProducts.map( elem => (
            <Experiment 
                key={elem.id}
                product={elem}
            />
        ))}
        </div>
    )
}


export default PreviewOrder;