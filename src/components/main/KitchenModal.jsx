import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom';
import dbDate from '../common/dbDate'
import { useToasts } from 'react-toast-notifications'

const modal = document.querySelector('#modal-root');

const KitchenModal = ({isOpened, setOpened, orderSelected, value, updateOrder, modalStatusClass, orderStatusClass}) => {
    
    const { addToast } = useToasts();
    //let [sec, setSec] = useState(50);
    
    /*
    useEffect(() => {
        
        setInterval(() => { 
            
            return sec === 59 ? setSec(0) : setSec(sec=>sec+1);
                
        }, 1000);
        
    },[])
    */
   function employeeElement(){
        if(orderSelected.listo === true){
            return <td><span>Mesero: </span>{orderSelected.mesero}</td>
        } else{
            return <td><span>Cocinero: </span>{orderSelected.cocinero}</td>
        }
   }    
   
    function timeDoneElement(){
        if(orderSelected.listo === true){
            return <td><span>Listo: </span> {dbDate(orderSelected.horaListo)}</td>
        } else{
            return <td><span>Preparación: </span> {orderSelected.preparando === false ? null : dbDate(orderSelected.horaPreparacion) }</td>
        }
    } 
    
    function customerElement(){
        if(orderSelected.listo === true){
            return <tr>
                     <td><span>Cliente: </span> {orderSelected.cliente}</td>
                     <td><span>Mesa: </span> {orderSelected.mesa}</td>
                   </tr>
        } else{
            return 
        }
    } 

    function totalElement(){
        if(orderSelected.listo === true){
            return  <tfoot>
                        <tr>
                            <td></td> 
                            <td></td>    
                            <td className="table-total"><span>Total: </span></td>
                            <td className="table-total-cant"><span>$ {orderSelected.total}</span></td>          
                        </tr>                       
                    </tfoot> 
        } else{
            return 
        }
   } 

    if(isOpened){
        return ReactDOM.createPortal(
        <div className="modal-container" >
            <div className="modal-block">
                <div className={modalStatusClass}>
                </div>
                <h3 className={orderStatusClass}>
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
                            {employeeElement()}
                            {timeDoneElement()}
                        </tr>
                        {customerElement()}
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
                        {totalElement()}   
                    </table>
                </div>
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
            </div>    
        </div>,
        modal
    )}else{
     return null}
}

export default KitchenModal;