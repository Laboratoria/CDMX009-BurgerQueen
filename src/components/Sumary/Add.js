import React from 'react'


const Add = ({ idItem, dish, order, breakfasts, lunchs, setOrder }) => {


    const addQuantity = (id) => {
        //Buscamos el indice del item al que sumamos dentro del array de items con su id 
        const indexItem = order.items.findIndex(elem => elem.id === id)
        //console.log(indexItem);
        //console.log(dish);


        if (id < 5) {
            //Filtramos el precio del breakfast item con su id
            const breakfastsItem = breakfasts.filter(breakfast => breakfast.id === id)[0]
            //console.log(breakfastsItem.price);
            //console.log(breakfastsItem.quantity);
            //Accedemos a las propiedades del item y le inyectamos los nuevos valores a quantity y price
            let newQuantity = [...order.items]
            newQuantity[indexItem] = { ...newQuantity[indexItem], quantity: parseInt(order.items[indexItem].quantity + 1), price: order.items[indexItem].price + breakfastsItem.price }
            //console.log(newQuantity);

            //Actualizamos el state del item al que agregamos elem
            setOrder({ ...order, items: newQuantity })
            return
        }
        if (id >= 5) {
            //Filtramos el precio del lunch item con su id
            const lunchsItem = lunchs.filter(lunch => lunch.id === id)[0]
            //console.log(lunchsItem.price);
            //console.log(lunchsItem.quantity);
            //Accedemos a las propiedades del item y le inyectamos los nuevos valores a quantity y price
            let newQuantity = [...order.items]
            newQuantity[indexItem] = { ...newQuantity[indexItem], quantity: parseInt(order.items[indexItem].quantity + 1), price: order.items[indexItem].price + lunchsItem.price }

            //Actualizamos el state del item al que agregamos elem
            setOrder({ ...order, items: newQuantity })
        }
        if (id >= 5 && dish === 'Hamburguesa doble' || id >= 5 && dish === 'Hamburguesa simple') {
            //Filtramos el precio del lunch item con su id
            const lunchsItem = lunchs.filter(lunch => lunch.id === id)[0]
            //console.log(lunchsItem.price);
            //console.log(lunchsItem.quantity);
            //Accedemos a las propiedades del item y le inyectamos los nuevos valores a quantity y price
            let newQuantity = [...order.items]
            newQuantity[indexItem] = { ...newQuantity[indexItem], quantity: parseInt(order.items[indexItem].quantity + 1), price: order.items[indexItem].price + (lunchsItem.price) }

            //Actualizamos el state del item al que agregamos elem
            setOrder({ ...order, items: newQuantity })
        }
    }


    return (

        <i className="fas fa-sort-up arrow-increment"
            onClick={() => {
                addQuantity(idItem)

            }}
        ></i>
    )
}


export default Add