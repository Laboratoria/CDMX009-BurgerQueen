import React from 'react'


const Decrease = ({ idItem, dish, order, breakfasts, lunchs, setOrder }) => {


    const decreaseQuantity = (id) => {
        //console.log(id);

        //Search item´s index who sum whithin item´s array with it´s id 
        const indexItem = order.items.findIndex(elem => elem.id === id)


        if (id < 5) {
            //We filter the price of item with its id
            const breakfastsItem = breakfasts.filter(ind => ind.id === id)[0]

            //We access to properties of item and add the new values to quantity y price
            let newQuantity = [...order.items]
            newQuantity[indexItem] = { ...newQuantity[indexItem], quantity: parseInt(order.items[indexItem].quantity - 1), price: order.items[indexItem].price - breakfastsItem.price }

            //Update the state of item to added elements
            setOrder({ ...order, items: newQuantity })
            return
        }
        if (id >= 5) {
            //We filter the price of item´s breakfast with its id
            const lunchsItem = lunchs.filter(lunch => lunch.id === id)[0]

            //We access  to properties of item and add the new values to quantity y price
            let newQuantity = [...order.items]
            newQuantity[indexItem] = { ...newQuantity[indexItem], quantity: parseInt(order.items[indexItem].quantity - 1), price: order.items[indexItem].price - lunchsItem.price }

            //Update the state of item who add quantity
            setOrder({ ...order, items: newQuantity })
        }
        if (id >= 5 && dish === 'Hamburguesa doble' || id >= 5 && dish === 'Hamburguesa simple') {

            const lunchsItem = lunchs.filter(lunch => lunch.id === id)[0]

            let newQuantity = [...order.items]
            newQuantity[indexItem] = { ...newQuantity[indexItem], quantity: parseInt(order.items[indexItem].quantity - 1), price: order.items[indexItem].price - (lunchsItem.price) }


            setOrder({ ...order, items: newQuantity })
        }
    }


    return (
        <i className="fas fa-sort-down"
            onClick={() =>
                decreaseQuantity(idItem)

            }
        ></i>
    )
}

export default Decrease