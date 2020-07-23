import React from 'react';
import Kitchen from './Kitchen'; 

const DeliveredOrder = ({deliveredOrder, saveDeliveryOrder}) => {
    
    return(
    <div className='item2-widtn-kitchem' >
        { deliveredOrder.length != 0 
        ? 
            deliveredOrder.map(orders =>(
                <Kitchen 
                    key= {orders.id}
                    orders = {orders}
                 />
                )
            )
        : 
        null
        }
    </div>
    )
}
 

export default DeliveredOrder;