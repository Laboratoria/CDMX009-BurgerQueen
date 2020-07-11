import React from 'react'
import './orders.css'
import Navbar from '../layout/Navbar'
import BtnStatus from './BtnStatus'
import OrderFinished from './OrderFinished'
import DataModal from './dataModal'

function Orders({ datos }) {
    const now = new Date();
    const time = [now.getHours(), now.getMinutes()];
    const day = time.join(':');
    console.log(day)
    return (
        <div>
        <Navbar datos={datos} />
        <div className='dashboard'>
            <div className='row order-h2'>
                <h2 className='white-text'>Mis ordenes</h2>
            </div>
            <div >
                <div className='col m12 resume-box'>
                    <div className='post-it'>
                        <div className='text-order-resume'>
                            <div className='table-info'>
                                <p className='table-info'>Mesa {datos.numeroMesa}</p>
                                <p className='table-info'>{day}</p>
                            </div>
                            <div>
                                <div className='list-products scroll'>
                                    <form action="#">
                                        <p className='chosen-item'>
                                            <label className='item'>
                                                <input className='box' type="checkbox" />
                                                <span className='black-text text-item'>{datos.productos}</span>
                                                <p className='black-text num-item'>1</p>
                                            </label>
                                        </p>
                                    </form>
                                </div>
                            </div>
                            <div className='status-order'>
                                <BtnStatus />
                                <OrderFinished />
                            </div>
                        </div>

                    </div>
                </div>
            </div >
        </div >
        </div>
    )
}

export default Orders; 