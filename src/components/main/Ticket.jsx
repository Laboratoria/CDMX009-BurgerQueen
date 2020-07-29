import React from 'react'

const Ticket = ({products, total, onClickSub, client,
    onClickAdd, onChangeCli, onChangeTab, sendBtn, tab, onClickSend}) => {
    return (
        <div className="ticket-container">
            <div className="ticket-head">
                <div className="client-container">
                    <label>Cliente:</label>
                    <input type="text" 
                        placeholder='Nombre'
                        onChange={(e)=>onChangeCli(e.target.value)}
                        value={client}
                    />
                </div>
                <div className="tab-container">
                    <label>Mesa:</label>
                    <input type="text"
                        placeholder='No.'
                        onChange={(e)=>{
                            if(e.target.value.match(/\d/gi)){
                                onChangeTab(e.target.value)
                            }else{
                                onChangeTab('')
                            }
                        }}
                        value={tab}
                    />
                </div>
            </div>
            <div className="table-container">
                <table>
                  <thead>
                    <tr>
                        <th></th>
                        <th>Cant.</th>
                        <th>Orden</th>
                        <th>Precio</th>
                        <th></th>
                    </tr>
                   </thead>   
                    {products.map((orderItem, index) =>
                        (<tr key={index}>
                            <td><input className="addBtn" value="+" type="button" onClick={()=> onClickAdd(orderItem)}/></td>
                            <td>{orderItem.number}</td>
                            <td>{orderItem.name}</td>
                            <td>${orderItem.price}</td>
                            <td><input className="subBtn" value="-" type="button" onClick={()=> onClickSub(orderItem)}/></td>
                        </tr>
                        )
                    )}
                </table>
            </div> 
            <div className="total-container">
                <p>
                    Total:<span> ${total}</span> 
                </p>
            </div> 
            <div className="btn-container">
                <input className={sendBtn} 
                type="button" 
                value="Enviar orden"
                onClick={onClickSend}    
                />
            </div>  
        </div>
    )
}

export default Ticket
