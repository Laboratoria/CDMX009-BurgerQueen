import React, { Fragment } from 'react';
import ItemBreakfast from './ItemBreakfast.js'
import './Menus.scss';


const Breakfast = ({ breakfasts, order, setOrder }) => {

    return (
        <Fragment>
            {breakfasts.map(breakfast => (

                < ItemBreakfast
                    key={breakfast.id}
                    idItem={breakfast.id}
                    img={breakfast.img}
                    dish={breakfast.dish}
                    price={breakfast.price}
                    breakfasts={breakfasts}
                    order={order}
                    setOrder={setOrder}
                />


            ))}

        </Fragment >

    )
}

export default Breakfast

