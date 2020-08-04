import React from 'react'
import dbDate from '../common/dbDate'

const KitchenCard = ({item, onClickOrder, employee, borderClass, statusClass}) => {
    return (
        <div className={`kitchen-card-container ${borderClass} `}>
            <div>
                <table>
                    <thead>
                        <tr>
                            <td><span>No. de Orden: </span> {item.numOrden}</td>
                            <td><h3 
                            className={statusClass}>
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
                            <td><span>Preparación: </span> {item.preparando === false ? null : dbDate(item.horaPreparacion) }</td>
                        </tr>
                        <tr>
                            <td><span>Cliente: </span> {item.cliente}</td>
                            <td><span>Mesa: </span> {item.mesa}</td>
                        </tr>
                    </tbody>      
                </table>
                           
                <input 
                    className={statusClass}
                    type="button" 
                    value="Ver"
                    onClick={onClickOrder} 
                />
            </div>
        </div>
    )
}

export default KitchenCard;
