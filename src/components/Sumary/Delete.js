import React from 'react'


const Delete = ({ idItem, order, setOrder }) => {

    const removeProductSummary = (id) => {
        //console.log(id);

        //Array con items sin incluir en el que se dio eliminar
        const products = order.items.filter(product => product.id !== id)
        //console.log(products);

        //Se actualiza el state con items elimando el seleccionado, restando el precio de item selec al total, actualización de total de productos
        setOrder({ ...order, items: [products][0] })

    }

    return (

        <i className="fas fa-minus-circle icon-delete"

            onClick={() => removeProductSummary(idItem)} ></i>
    )
}

export default Delete 