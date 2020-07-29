import React from 'react';

function Item({product,addItemToOrder}) {
    //agregar estilos
    //imprimir precio
    return (
        <button 
                
                key={product.id}
                onClick={()=>addItemToOrder(product)}
                >
<span>{product.nameProduct} {product.price}</span>
        </button>
    );
}

export default Item;