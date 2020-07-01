import React from 'react'
import pendingIcon from './images/pending.svg';
import cancelIcon from './images/cancel.svg';
import readyIcon from './images/ready.svg';
import './orders.css'
import ClientInfo from '../dashboard/client-Info/ClientInfo'


function Orders() {
    return (
        <div>
            <div className='row order-h2'>
                <h2 className='white-text'>Mis ordenes</h2>
            </div>
            <div >
                <div className='col m12 resume-box'>
                    <div className='post-it'>
                        <div className='text-order-resume'>
                            <div className='table-info'>
                                <p className='table-info'>Mesa 1</p>
                                <p className='table-info'>10:30 am</p>
                            </div>
                            <div>
                                <div className='col m1'>
                                    <form action="#">
                                        <p className='chosen-item'>
                                            <label>
                                                <input className='box' type="checkbox" />
                                                <span className='black-text text-item'>Hamburguesa</span>
                                            </label>
                                        </p>
                                        <p className='chosen-item'>
                                            <label>
                                                <input className='box' type="checkbox" />
                                                <span className='black-text text-item'>Hamburguesa</span>
                                            </label>
                                        </p>
                                        <p className='chosen-item'>
                                            <label>
                                                <input className='box' type="checkbox" />
                                                <span className='black-text text-item'>Hamburguesa</span>
                                            </label>
                                        </p>
                                    </form>
                                </div>
                            </div>
                            <div className='resume-status'>
                                <div>
                                    <img className='status' src={pendingIcon} />
                                </div>
                                <p> no pagado</p>
                            </div>
                        </div>
                    </div>
                    <div className='post-it'>
                        <div className='text-order-resume'>
                            <div className='table-info'>
                                <p className='table-info'>Mesa 1</p>
                                <p className='table-info'>10:30 am</p>
                            </div>
                            <div>
                                <div className='col m1'>
                                    <form action="#">
                                        <p className='chosen-item'>
                                            <label>
                                                <input className='box' type="checkbox" />
                                                <span className='black-text text-item'>Hamburguesa</span>
                                            </label>
                                        </p>
                                        <p className='chosen-item'>
                                            <label>
                                                <input className='box' type="checkbox" />
                                                <span className='black-text text-item'>Hamburguesa</span>
                                            </label>
                                        </p>
                                        <p className='chosen-item'>
                                            <label>
                                                <input className='box' type="checkbox" />
                                                <span className='black-text text-item'>Hamburguesa</span>
                                            </label>
                                        </p>
                                    </form>
                                </div>
                            </div>
                            <div className='resume-status'>
                                <div>
                                    <img className='status' src={pendingIcon} />
                                </div>
                                <p> no pagado</p>
                            </div>
                        </div>
                    </div>
                    <div className='post-it'>
                        <div className='text-order-resume'>
                            <div className='table-info'>
                                <p className='table-info'>Mesa 1</p>
                                <p className='table-info'>10:30 am</p>
                            </div>
                            <div>
                                <div className='col m1'>
                                    <form action="#">
                                        <p className='chosen-item'>
                                            <label>
                                                <input className='box' type="checkbox" />
                                                <span className='black-text text-item'>Hamburguesa</span>
                                            </label>
                                        </p>
                                        <p className='chosen-item'>
                                            <label>
                                                <input className='box' type="checkbox" />
                                                <span className='black-text text-item'>Hamburguesa</span>
                                            </label>
                                        </p>
                                        <p className='chosen-item'>
                                            <label>
                                                <input className='box' type="checkbox" />
                                                <span className='black-text text-item'>Hamburguesa</span>
                                            </label>
                                        </p>
                                    </form>
                                </div>
                            </div>
                            <div className='resume-status'>
                                <div>
                                    <img className='status' src={pendingIcon} />
                                </div>
                                <p> no pagado</p>
                            </div>
                        </div>
                    </div>
                    <div className='post-it'>
                        <div className='text-order-resume'>
                            <div className='table-info'>
                                <p className='table-info'>Mesa 1</p>
                                <p className='table-info'>10:30 am</p>
                            </div>
                            <div>
                                <div className='col m1'>
                                    <form action="#">
                                        <p className='chosen-item'>
                                            <label>
                                                <input className='box' type="checkbox" />
                                                <span className='black-text text-item'>Hamburguesa</span>
                                            </label>
                                        </p>
                                        <p className='chosen-item'>
                                            <label>
                                                <input className='box' type="checkbox" />
                                                <span className='black-text text-item'>Hamburguesa</span>
                                            </label>
                                        </p>
                                        <p className='chosen-item'>
                                            <label>
                                                <input className='box' type="checkbox" />
                                                <span className='black-text text-item'>Hamburguesa</span>
                                            </label>
                                        </p>
                                    </form>
                                </div>
                            </div>
                            <div className='resume-status'>
                                <div>
                                    <img className='status' src={pendingIcon} />
                                </div>
                                <p> no pagado</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Orders;