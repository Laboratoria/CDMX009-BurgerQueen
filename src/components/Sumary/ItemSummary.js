import React, { Fragment, useState } from 'react';
import Decrease from './Decrease'
import Add from './Add'
import Delete from './Delete'
import Extras from './Extras';
import './Extras.scss';
function ItemSummary({ item, idUnique, idItem, dish, additions, quantity, price, order, setOrder, breakfasts, lunchs }) {


    //State Modal extras
    const [extrasModal, setExtrasModal] = useState({
        idDish: 0,
        state: false
    })
    //const [extrasModal, setExtrasModal] = useState(false)

    const showModal = (dish, idUnique) => {
        //console.log(e.target.getAttribute('value'));
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
        /* if (e.target.getAttribute('value') === 'Hamburguesa simple') {
            setExtrasModal(true)
            return
        } if (e.target.getAttribute('value') === 'Hamburguesa doble') {
            setExtrasModal(true)
            return
        } */

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
                <Add
                    idItem={idItem}
                    dish={dish}
                    order={order}
                    breakfasts={breakfasts}
                    lunchs={lunchs}
                    setOrder={setOrder}
                />
                {/*  <i className="fas fa-sort-up arrow-increment"
                    onClick={() => {
                        addQuantity(idItem)

                    }}
                ></i> */}
                <Decrease
                    idItem={idItem}
                    dish={dish}
                    order={order}
                    breakfasts={breakfasts}
                    lunchs={lunchs}
                    setOrder={setOrder}
                />
                {/* <i className="fas fa-sort-down"
                    onClick={() =>
                        decreaseQuantity(idItem)

                    }
                ></i> */}
            </div>

            <p>${price}</p>
            <Delete
                idItem={idItem}
                order={order}
                setOrder={setOrder}
            />
            {/* <i className="fas fa-minus-circle icon-delete"
                onClick={() => removeProductSummary(idItem)} ></i> */}


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