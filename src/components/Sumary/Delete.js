import React from 'react'


const Delete = ({ idItem, order, setOrder }) => {

    const removeProductSummary = (id) => {


        //Array with items within add the item who click delete
        const products = order.items.filter(product => product.id !== id)


        //Update state with the item selected to delete
        setOrder({ ...order, items: [products][0] })

    }

    return (

        <i className="fas fa-minus-circle icon-delete"

            onClick={() => removeProductSummary(idItem)} ></i>
    )
}

export default Delete 