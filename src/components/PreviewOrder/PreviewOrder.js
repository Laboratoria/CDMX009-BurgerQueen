import React from 'react';
import './PreviewOrder.css'
import {db} from '../../firebase-config'

const PreviewOrder = ({order,deleteItem, setTableNumber, substractItem}) => {
    const total = order.items.reduce((sum, item) => sum + item.quantity * item.price, 0)


    const handleEnviarACocina = async (e) => {
        const orderAEnviar = {
            ...order,
            total,
            status: "inKitchen"
        }
        await db.collection('ordenes').doc().set(orderAEnviar);
        console.log('Orden enviada satisfactoriamente');
    }

        
    const handleChange = (e) => {
        if (e.target.value >= 1 || e.target.value <= 10){
            setTableNumber(e.target.value)
        } else {
            console.log("Ingrese un número de mesa del 1 al 10")
        }
    }

    return (
    
        <div className="order">
            <div className="header">
                <h3>Mesa</h3>
                <input
                    className="inputTable" 
                    type="number"
                    name="tableNumber"
                    value={order.tableNumber}
                    style={{width: '50px', height: '30px'}} 
                    onChange={handleChange}
                />
                <div className="total">
                    <h4 className="letter">TOTAL {total}</h4>
                </div>
            </div>
            <div className="itemsInOrder">
                {order.items.length === 0
                ?
                    <h3>No hay elementos en la orden aún.</h3>
                : order.items.map( elem => ( 
                    <div key={elem.id}>
                        <div>
                            <h3 className="productInListOrder"> {elem.quantity} {elem.nameProduct}   ${elem.quantity * elem.price} </h3>
                        </div>
                        <button onClick={()=> deleteItem(elem.productId)}> x </button>
                        <button onClick={()=> substractItem(elem)}> - </button>
                    </div>     
                ))}
            </div>
            <button 
                className="sendToKitchen"
                onClick={handleEnviarACocina}>
                    <h1>Ordenar</h1>
            </button>
        </div>
)}


export default PreviewOrder;