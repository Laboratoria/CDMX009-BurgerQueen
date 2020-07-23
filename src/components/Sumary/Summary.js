import React, { Fragment } from 'react';
import ItemSummary from './ItemSummary.js';
import './Summary.scss';

const Summary = ({ order, setOrder, breakfasts, lunchs }) => {

    return (
        <Fragment>

            < div className="container-summary"  >
                {
                    order.items.map(dish => (

                        <ItemSummary
                            key={dish.id}
                            idItem={dish.id}
                            idUnique={dish.idItem}
                            dish={dish.dish}
                            additions={dish.addittions}
                            quantity={dish.quantity}
                            price={dish.price}
                            order={order}
                            setOrder={setOrder}
                            breakfasts={breakfasts}
                            lunchs={lunchs}
                        />

                    ))
                }


            </div >


        </Fragment>

    )
}

export default Summary
