import React from 'react'


const ItemBreakfast = ({ idItem, img, dish, price, breakfasts, order, setOrder }) => {


    //Add items selected to state
    const updateBreakfast = (idItem, price) => {
        //console.log(idItem);
        //Items selected
        const productSelect = breakfasts.filter(lunch => lunch.id === idItem)[0]
        console.log(productSelect);

        //Update state with items selected
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