import React from 'react'

const Ticket = ({products, total}) => {
    return (
        <div className="ticket-container">
            <div className="ticket-head">
                <div className="client-container">
                    <label>Cliente:</label>
                    <input type="text"/>
                </div>
                <div className="tab-container">
                    <label>Mesa:</label>
                    <input type="text"/>
                </div>
            </div>
            <div className="table-container">
                <table>
                    <tr>
                        <th>Cant.</th>
                        <th>Orden</th>
                        <th>Precio</th>
                        <th></th>
                    </tr>
                    {products.map(item =>
                        (<tr>
                            <td>{item.number}</td>
                            <td>{item.name}</td>
                            <td>${item.price}</td>
                            <td><input type="button" value="-"/></td>
                        </tr>
                        )
                    )}
                   
                    
                </table>
            </div> 
            <div className="total-container">
                <p>
                    Total:   <span>${total}</span> 
                </p>
            </div> 
            <div className="btn-container">
                <input className="active-menu-btn" type="button" value="Enviar orden"/>
            </div>  
        </div>
    )
}

export default Ticket
