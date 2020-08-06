import React from 'react'
import dbDate from '../common/dbDate'



const KitchenCard = ({item, onClickOrder, borderClass, statusClass, horaPreparacion}) => {
 
function timeDoneElement(){
    if(item.listo === true){
        return <td><span>Listo: </span> {dbDate(item.horaListo)}</td>
    } else{
        return <td><span>Preparación: </span> {horaPreparacion}</td>
    }
}  

function timeDeliveredElement(){
    if(item.listo === true){
        return <tr>
                 <td></td>
                 <td><span>Entregado: </span> {item.entregado === true ? dbDate(item.horaEntrega) : null}</td>
               </tr>
    }else{
        return 
    }
} 
 
 
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
                            {timeDoneElement()}
                        </tr>
                        <tr>
                            <td><span>Cliente: </span> {item.cliente}</td>
                            <td><span>Mesa: </span> {item.mesa}</td>
                        </tr>
                        { timeDeliveredElement() }
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
