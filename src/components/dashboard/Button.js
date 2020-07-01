import React from 'react';
import ClientInfoForm from './client-Info/ClientInfo'
import './dashboard.css'

const Button = ( { setVisible ,order, setOrder, datos, setDatos }   ) => {
    return(
        <div className='col m12 center-align'>
                    <div className="col s3">
                        <button className='dash-btn' onClick={() => { setVisible(true) }}>Desayunos</button>        
                    </div>
                    <div className="col s3">
                        <button className='dash-btn food-btn' onClick={() => { setVisible(false) }}>Comidas</button>
                    </div>
                    <div className='col m6 client-info'>
                        <ClientInfoForm order={order} setOrder={setOrder} datos={datos} setDatos={setDatos}/>
                    </div>
                </div> 
    )
}

export default Button;