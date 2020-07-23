import React, { Fragment, useState } from 'react';
import Decrease from './Decrease'
import AddQuantity from './AddQuantity'
import Delete from './Delete'
import Extras from './Extras';
import './Extras.scss';
function ItemSummary({ item, idUnique, idItem, dish, additions, quantity, price, order, setOrder, breakfasts, lunchs }) {


    //State Modal extras
    const [extrasModal, setExtrasModal] = useState({
        idDish: 0,
        state: false
    })


    const showModal = (dish, idUnique) => {
        console.log(dish, idUnique);

        if (dish === 'Hamburguesa simple') {
            setExtrasModal({ idDish: idUnique, state: true })
            //setExtrasModal(true)
            return
        } if (dish === 'Hamburguesa doble') {
            setExtrasModal({ idDish: idUnique, state: true })
            //setExtrasModal(true)
            return
        }

        setExtrasModal(false)

    }



    return (
        <Fragment>
            <div>
                <p
                    value={dish}
                    onClick={() => {
                        showModal(dish, idUnique)

                    }}
                >{dish}</p>
                {additions !== undefined ? (<p className="additions">{additions.join()}</p>) : null}

            </div>

            <p>{quantity}</p>

            <div className='container-arrow-increment'>
                <AddQuantity
                    idItem={idItem}
                    dish={dish}
                    order={order}
                    breakfasts={breakfasts}
                    lunchs={lunchs}
                    setOrder={setOrder}
                />

                <Decrease
                    idItem={idItem}
                    dish={dish}
                    order={order}
                    breakfasts={breakfasts}
                    lunchs={lunchs}
                    setOrder={setOrder}
                />

            </div>

            <p>${price}</p>
            <Delete
                idItem={idItem}
                order={order}
                setOrder={setOrder}
            />


            {
                extrasModal.state ? (<Extras
                    idItem={extrasModal.idDish}
                    onClose={() => setExtrasModal(false)}
                    order={order}
                    setOrder={setOrder}

                />) : null
            }
        </Fragment>


    )
}
export default ItemSummary 