import React from 'react'
import ReactDOM from 'react-dom';
import dbDate from '../common/dbDate'
import {timerRender, employeeElement, cancelOrderBtn, timeDoneElement, customerElement, totalElement} from '../common/kitchenModalFunctions'

const modal = document.querySelector('#modal-root');

const KitchenModal = ({isOpened, setOpened, orderSelected, 
    value, updateOrder, modalStatusClass, orderStatusClass, 
    sec, setSec, min, setMin, hour, setHour}) => {
 
    if(isOpened){
        return ReactDOM.createPortal(
        <div className="modal-container" >
            <div className="modal-block">
                <div className={modalStatusClass}>
                </div>
                <h3 className={orderSelected.status === 'CANCELADO' ? 'order-canceled' : orderStatusClass}>
                            {orderSelected.status}</h3>
                <hr/>
                <div className="modal-header">
                <table>
                    <thead>
                        <tr>
                            <td><span>No. de Orden: </span> {orderSelected.numOrden}</td>
                            <td><span>Pedido: </span> {dbDate(orderSelected.horaPedido)}</td>
                        </tr>
                    </thead>
                    <tbody> 
                        <tr>
                            {employeeElement(orderSelected)}
                            {timeDoneElement(orderSelected)}
                        </tr>
                        {customerElement(orderSelected)}
                    </tbody>      
                </table>
                
                </div>
                <hr/>
                <div className="modal-body">
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Cant.</th>
                                <th>Orden</th>
                                <th>{orderSelected.listo === true ? 'Precio' : null }</th>
                            </tr>
                        </thead> 
                        <tbody> 
                            {Object.values(orderSelected.orden).map((orderItem, index) =>
                                (<tr key={index}>
                                    <td>{orderSelected.preparando === false ? null : <input className="orderDone" type="checkbox"/>}
                                    </td>
                                    <td>{orderItem.number}</td>
                                    <td>{orderItem.name}</td>
                                    {orderSelected.listo === true ?  <td> $ {orderItem.price}</td> : null }
                                </tr>
                                )
                            )}
                        </tbody> 
                        {totalElement(orderSelected)}   
                    </table>
                </div>
                {timerRender(orderSelected, sec, setSec, min, setMin, hour, setHour)}
                <div className="modals-btns-container">
                    <input className="active-menu-btn" 
                            type="button" 
                            value={value} 
                            onClick={updateOrder}/>
                    <input className="menu-nav-btn" 
                            type="button" 
                            value="Cancelar" 
                            onClick={()=> {setOpened(false)}}/>
                </div> 
                {cancelOrderBtn(orderSelected, setOpened)}  
            </div>    
        </div>,
        modal
    )}else{
     return null}
}

export default KitchenModal;