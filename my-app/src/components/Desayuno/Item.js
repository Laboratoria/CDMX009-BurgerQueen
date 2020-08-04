import React,{Fragment} from 'react';

function Item({product,addItemToOrder}) {
    //agregar estilos
    //imprimir precio
    return (
        <Fragment>
        <button className="contentProd"
                key={product.id}
                onClick={()=>addItemToOrder(product)}
                >
<span className="cont"><img  className="btnImg"src={product.src} /> {product.nameProduct} {product.price}$</span>
        </button>
        </Fragment>
    );
}


export default Item;
