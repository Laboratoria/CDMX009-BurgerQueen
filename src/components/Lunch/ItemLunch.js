import React from 'react'
import shortid from 'shortid'

const ItemLunch = ({ idItem, img, dish, price, lunchs, order, setOrder }) => {

    const updateLunchs = (idItem, price) => {
        //Items selected
        const productSelect = lunchs.filter(lunch => lunch.id === idItem)[0]

        //In case of burguer add unique id to add additions
        if (productSelect.dish === 'Hamburguesa simple' || productSelect.dish === 'Hamburguesa doble') {
            productSelect.idItem = shortid.generate()

        }

        //Update state with items, sum price
        setOrder({ ...order, items: [...order.items, productSelect] })

    }

    return (

        <div className="dish">
            <img
                name="dishes"
                id={idItem}
                src={img}
                alt={dish}
                value={price}
                className="img-menu"
                onClick={() => {
                    updateLunchs(idItem, price)

                }}
            ></img>
            <p>{dish}</p>
            <p>${price}.00</p>
        </div>
    )
}


export default ItemLunch