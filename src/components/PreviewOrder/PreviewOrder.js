import React from 'react';
import './PreviewOrder.css'
import {db} from '../../firebase-config'
import { Button, notification } from 'antd';

const PreviewOrder = ({order,deleteItem, setTableNumber,resetOrder}) => {
    const total = order.items.reduce((sum, item) => sum + item.quantity * item.price, 0)

    const openNotificationWithIcon = () => {
        notification["error"]({
          message: 'No llenaste el número de mesa o no tienes productos en tu orden'
        });
      };

    const handleEnviarACocina = async (e) => {
    if(order.tableNumber !=="" && order.tableNumber <= 10 && order.items.length !== 0){ //AQUÍ YA NO ME DEJA INGRESAR NÚMERO DE MESA
        const orderAEnviar = {
            ...order,
            total,
            status: "inKitchen"
        }
        await db.collection('ordenes').doc().set(orderAEnviar);
        resetOrder()
    }else{openNotificationWithIcon()}
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
                <p className="Table">Mesa</p>
                <input
                    min="1"
                    max="10"
                    className="inputTable" 
                    type="number"
                    name="tableNumber"
                    value={order.tableNumber}
                    style={{width: '70px', height: '30px'}} 
                    onChange={handleChange}
                    required
                />
                <div className="total">
                    <h4 className="letter">TOTAL ${total}</h4>
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
                        <button className="buttonDelete" onClick={()=> deleteItem(elem.productId)}> 
                        <p> x </p>
                        </button>
                        {/* <button onClick={()=> substractItem(elem)}> - </button> */}
                    </div>     
                ))}
            </div>
            <div className="contentButtonSend">
                <Button danger 
                    onClick={handleEnviarACocina}>
                        Ordenar
                </Button>
            </div>
        </div>
)}


export default PreviewOrder;