import React from 'react'


const ItemBreakfast = ({ idItem, img, dish, price, breakfasts, order, setOrder }) => {


    //Agregar los items seleccionados al state
    const updateBreakfast = (idItem, price) => {
        //console.log(idItem);
        //Items seleccionados
        const productSelect = breakfasts.filter(lun => lun.id === idItem)[0]
        console.log(productSelect);

        //Actualizar state con items seleccionados
        setOrder({ ...order, items: [...order.items, productSelect] })
    }

    return (
        <div className="dish" >
            <img
                name="dishes"
                id={idItem}
                src={img}
                alt={dish}
                value={price}
                className="img-menu"
                onClick={() => {
                    updateBreakfast(idItem, price)
                }}
            ></img>
            <p>{dish}</p>
            <p>${price}.00</p>

        </div>

    )
}


export default ItemBreakfast