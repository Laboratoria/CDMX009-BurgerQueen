import React from 'react';
import Menu from '../Menu/Menu'

const PreviewOrder = ({ordered, addProduct}) => (
        <div>
        <h2> Preview de apartado orden </h2>
        
        {ordered.length === 0
        ?
            <p>No hay elementos en el apartado orden aún</p>
        : ordered.map( elem => (
            <Menu 
                key={elem.id}
                food={elem}
                ordered={ordered}
                addProduct={addProduct}
            />
        ))}
        </div>
)


export default PreviewOrder;