import React from 'react';
import ClientInfoForm from './client-Info/ClientInfo'
import './dashboard.css'

const Button = ( { setVisible }  ) => {

    return(
        <div className='col m12 center-align'>
                    <div className="col s3">
                        <button className='dash-btn white-text' onClick={() => { setVisible(true) }}>Desayunos</button>        
                    </div>
                    <div className="col s3">
                        <button className='dash-btn food-btn white-text' onClick={() => { setVisible(false) }}>Comidas</button>
                    </div>
                    <div className='col m6 client-info'>
                        <ClientInfoForm />
                    </div>
                </div> 
    )
}

export default Button;