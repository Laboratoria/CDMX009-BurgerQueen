import React from 'react'
import {db} from '../../firebase-config'

function ResumeOrder (){


    return (
        <div className="order">
            <div className="header">
                <p className="Table">Mesa</p>
                <p>Number</p> //INGRESAR NÚMERO DE MESA
                <div className="total">
                    <h4 className="letter">TOTAL</h4> //AQUÍ VA TOTAL
                </div>
            </div>
            <div className="itemsInOrder">
                {/* {ordersFinished.map( order => ( //AQUI ITERAR LO OBTENIDO DE FIRESTORE
                    <div key={order.id}>
                        <div>
                            <h3 className="productInListOrder"> {order.quantity} {order.nameProduct}   ${order.subTotal} </h3>
                        </div>
                    </div>     
                ))} */}
            </div>
            <button 
                onClick={console.log("Holi aquí se cambia de estado a pay")}>//PASAR FUNCIÓN QUE CAMBIE EL ESTADO EN FIREBASE
                    Ordenar
            </button>
        </div>
    )
}

export default ResumeOrder;