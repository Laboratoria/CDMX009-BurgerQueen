
import React from "react"
import Item from './Item'

const Desayuno =({ProductsBF, addItemToOrder}) =>{
    return(
        <div>
            {ProductsBF.map(product=>
                <Item 
                product={product}
                addItemToOrder={addItemToOrder}
                key={product.id}
                />
            )}
        </div>
    )
}

export default Desayuno