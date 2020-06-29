import React from 'react';
import Experiment from '../experiment/Experiment'

const PreviewOrder = ({ordered, addProduct}) => (
        <div>
        <h2> Preview de apartado orden </h2>
        
        {ordered.length === 0
        ?
            <p>No hay elementos en el apartado orden aún</p>
        : ordered.map( elem => (
            <Experiment 
                key={elem.id}
                food={elem}
                ordered={ordered}
                addProduct={addProduct}
            />
        ))}
        </div>
)


export default PreviewOrder;