import React, {Fragment} from 'react'

function ResumeOrder ({resume, handlerOrderPay}){

    const resumeOrder = resume[0];

    return (
        <Fragment>
                {resume.length === 0
                ?
                    <p>Aún no hay una mesa seleccionada</p>

                :
                <div className="resume">
                    <div className="headerResume">
                        <div className="tableNumberContainer">
                            <p className="tableResume">Mesa</p>
                            <p className="numberResume">{resumeOrder.order.tableNumber}</p>
                        </div>
                        <div className="totalResume">
                            <h4 className="letterResume">TOTAL ${resumeOrder.order.total}</h4>
                        </div>
                    </div>
                    <div className="itemsResume">
                        {resumeOrder.order.items.map((food)=>(
                            <div className="itemsInOrderResume">
                                    <h3 className="productInListOrder">{food.quantity} {food.nameProduct} ${food.subTotal} </h3>
                            </div>
                        ))}
                    </div>
                    <div className="containerButtonPay">
                        <button key={resumeOrder.order.id} onClick={() => handlerOrderPay(resumeOrder.order.id)}> Pagado </button> 
                    </div>
                </div>
                }
            {/* PASAR FUNCIÓN QUE CAMBIE EL ESTADO EN FIREBASE */}
        </Fragment>
    )
}

export default ResumeOrder;