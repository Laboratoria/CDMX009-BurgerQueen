import React from 'react';

function Item({product,addItemToOrder}) {
    //agregar estilos
    //imprimir precio
    return (
        <button className="contentProd"
                key={product.id}
                onClick={()=>addItemToOrder(product)}
                >
<span className="cont"><img  class="btnImg"src={product.src} /> {product.nameProduct} {product.price}$</span>
        </button>
    );
}


export default Item;
