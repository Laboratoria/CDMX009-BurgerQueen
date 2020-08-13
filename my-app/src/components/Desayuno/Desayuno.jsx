
import React from "react"
import Item from './Item'
import { useForm } from "react-hook-form";

const Desayuno = ({ ProductsBF, addItemToOrder }) => {
    return (
        <div>
            {ProductsBF.map(product =>
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