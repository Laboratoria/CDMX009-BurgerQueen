import React, { Fragment } from 'react';
import './ControlTotal.scss';

const ControlTotal = ({ order, setOrder }) => {

    //Price and quantity from product, include the increase in item quantity
    const priceProducts = order.items.map(product => product.price)
    //console.log(priceProducts);
    const quantityProducts = order.items.map(product => product.quantity)
    //console.log(quantityProducts);

    //Sum of prices in the array
    let sumPrice = priceProducts.reduce((a, b) => a + b, 0)
    //console.log(sumPrice);

    //Sum of quantity of products in the array 
    let sumQuantity = quantityProducts.reduce((a, b) => a + b, 0)
    //console.log(sumQuantity);

    //Add as properties of state
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