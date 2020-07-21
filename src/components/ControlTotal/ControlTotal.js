import React, { Fragment } from 'react';
import './ControlTotal.scss';

const ControlTotal = ({ order, setOrder }) => {

    //Precio y cantidad del producto, incluido el aumento en cantidad de item
    const priceProducts = order.items.map(product => product.price)
    //console.log(priceProducts);
    const quantityProducts = order.items.map(product => product.quantity)
    //console.log(quantityProducts);

    //Se suman los precios que tenemos en un array
    let sumPrice = priceProducts.reduce((a, b) => a + b, 0)
    //console.log(sumPrice);

    //Se suman la cant de los productos que tenemos en un array
    let sumQuantity = quantityProducts.reduce((a, b) => a + b, 0)
    //console.log(sumQuantity);

    //Se agregan como propiedades del state
    if (sumPrice !== 0) {
        order.total = sumPrice
        order.totalProducts = sumQuantity
        //setOrder({ ...order, total: sum })
    }



    return (
        <Fragment>

            <div className="total-order">
                <div className="total"><p>Productos: {sumQuantity} </p></div>
                <div className="total">
                    <p>Total: ${sumPrice}.00</p></div>
            </div>

        </Fragment>

    )
}

export default ControlTotal