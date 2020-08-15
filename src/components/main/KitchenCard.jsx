import React from 'react'
import dbDate from '../common/dbDate'
import {cancelOrderBtn, timeDoneElement, timeDeliveredElement} from '../common/kitchenCardFunctions'


const KitchenCard = ({item, role, onClickOrder, borderClass, statusClass, horaPreparacion}) => {
  
    return (
        <div className={`kitchen-card-container ${borderClass} `}>
            <div>
                <table>
                    <thead>
                        <tr>
                            <td><span>No. de Orden: </span> {item.numOrden}</td>
                            <td><h3 
                            className={item.status === 'CANCELADO' ? 'order-canceled' : statusClass}>
                            {item.status}</h3></td>
                        </tr>
                    </thead>
                    <tbody> 
                         
                        <tr>
                            <td><span>Cocinero: </span>{item.cocinero}</td>
                            <td><span>Pedido: </span> {dbDate(item.horaPedido)}</td>
                        </tr>
                        <tr>
                            <td><span>Mesero: </span>{item.mesero}</td>
                            {timeDoneElement(item, horaPreparacion)}
                        </tr>
                        <tr>
                            <td><span>Cliente: </span> {item.cliente}</td>
                            <td><span>Mesa: </span> {item.mesa}</td>
                        </tr>
                        { timeDeliveredElement(item) }
                    </tbody>      
                </table>
                           
                <input 
                    className={statusClass}
                    type="button" 
                    value="Ver"
                    onClick={onClickOrder} 
                />
                 
            </div>
            {cancelOrderBtn(item, role)} 
        </div>
    )
}

export default KitchenCard;
