
import React  from "react"

import Item from "../Desayuno/Item";

const Comida =({ProductsFo,addItemToOrder}) =>{
   
    return(
        <div>
            {ProductsFo.map(product =>
                <Item
                product={product}
                addItemToOrder={addItemToOrder}
                key={product.id}
                />
                )}

        </div>
    )
}

export default Comida