import React from 'react'
import shortid from 'shortid'

const ItemLunch = ({ idItem, img, dish, price, lunchs, order, setOrder }) => {

    const updateLunchs = (idItem, price) => {
        //console.log(idItem);
        //Items seleccionados
        const productSelect = lunchs.filter(lun => lun.id === idItem)[0]
        //console.log(productSelect);
        //console.log(productSelect.idItem);

        //En caso de ser hamburguesa se agrega un id unico para poder agregar extras
        if (productSelect.dish === 'Hamburguesa simple' || productSelect.dish === 'Hamburguesa doble') {
            productSelect.idItem = shortid.generate()
            console.log(productSelect)
            console.log(productSelect.idItem);
        }

        //Productos en state
        //const products = order.items.map(product => product)
        //Actualizar state con items, suma precio
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