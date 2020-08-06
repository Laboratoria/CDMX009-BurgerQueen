import React from 'react'

function ResumeOrder ({resume, handlerOrderPay}){

    const resumeOrder = resume[0];

    return (
        <div className="resumeOrderContainer">
            <div className="headerResume">
                {resume.length === 0
                ?
                    <p>Aún no hay una mesa seleccionada</p>

                :
                <div>
                    <p className="tableResume">Mesa</p>
                    <p className="numberResume">{resumeOrder.order.tableNumber}</p>
                    <div className="totalResume">
                        <h4 className="letterResume">TOTAL ${resumeOrder.order.total}</h4>
                        {resumeOrder.order.items.map((food)=>(
                            <div className="itemsInOrderResume">
                                <div>
                                    <h3 className="productInListOrder">{food.quantity} {food.nameProduct} ${food.subTotal} </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button key={resumeOrder.order.id} onClick={() => handlerOrderPay(resumeOrder.order.id)}> Pagar </button> 
                </div>
                }
            </div>
            {/* PASAR FUNCIÓN QUE CAMBIE EL ESTADO EN FIREBASE */}
        </div>
    )
}

export default ResumeOrder;