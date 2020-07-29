import React  from "react"
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
//   } from "react-router-dom";
// import Acomp from "../Acomp";
// import Burguer from "../Burguer";
// import Bebida from "../Bebida";
import Item from "../Desayuno/Item";

const Comida =({ProductsFo,addItemToOrder}) =>{
    //lo mismo que desayuno
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