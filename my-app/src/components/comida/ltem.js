import React,{Fragment} from 'react';

function Item({product,addItemToOrder}) {
    //agregar estilos
    //imprimir precio
    return (
        <Fragment>
        <button 
                
                key={product.id}
                onClick={()=>addItemToOrder(product)}
                >
<span>{product.nameProduct} {product.price}</span>
        </button>
        </Fragment>
    );
}

export default Item;