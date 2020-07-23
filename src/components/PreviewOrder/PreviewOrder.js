import React from 'react';
import './PreviewOrder.css'

const PreviewOrder = ({order,deleteItem, setTableNumber, substractItem}) => {
    const total = order.items.reduce((sum, item) => sum + item.quantity * item.price, 0)


    const handleEnviarACocina = (e) => {
        const orderAEnviar = {
            ...order,
            total,
            status: "inKitchen"
        }
        console.log(orderAEnviar)
    }

        
    const handleChange = (e) => {
        setTableNumber(e.target.value)
    }

    return (
    
        <div className="containerOrder">
        <h2> Preview de apartado orden </h2>
        MESA
        <input 
            type="text"
            name="tableNumber"
            value={order.tableNumber}
            style={{width: '50px', height: '30px'}} 
            onChange={handleChange}
        />
        
        {order.items.length === 0
        ?
            <p>No hay elementos en el apartado orden aún</p>
        : order.items.map( elem => ( 
                <div key={elem.id}>
                    <div>{elem.quantity} {elem.nameProduct} {elem.quantity * elem.price}</div>
                    <button onClick={()=> deleteItem(elem.productId)}>ELIMINAR</button>
                    <button onClick={()=> substractItem(elem)}>RESTAR</button>
                </div>     
        ))}
        <h2>TOTAL {total}</h2>
        <button onClick={handleEnviarACocina}>Enviar a cocina</button>
        </div>
)}


export default PreviewOrder;