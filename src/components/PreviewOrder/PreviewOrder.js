import React from 'react';

const PreviewOrder = ({order}) => (
    
        <div>
        <h2> Preview de apartado orden </h2>
        
        
        {order.items.length === 0
        ?
            <p>No hay elementos en el apartado orden aún</p>
        : order.items.map( elem => ( 
                <div key={elem.id}>
                    <div>{elem.quantity} {elem.nameProduct} </div>
                    {/* <div> {elem.quantity*elem.price} </div> */}

                </div>
                
        ))}
        </div>
)


export default PreviewOrder;