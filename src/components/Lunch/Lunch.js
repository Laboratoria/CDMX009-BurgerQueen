import React, { Fragment } from 'react';
import ItemLunch from './ItemLunch.js'
import './Menus.scss';

const Lunch = ({ lunchs, order, setOrder }) => {


    return (
        <Fragment>
            {lunchs.map(lunch => (
                <ItemLunch
                    key={lunch.id}
                    idItem={lunch.id}
                    img={lunch.img}
                    dish={lunch.dish}
                    price={lunch.price}
                    lunchs={lunchs}
                    order={order}
                    setOrder={setOrder}
                />

            ))}

        </Fragment >

    )
}


export default Lunch

