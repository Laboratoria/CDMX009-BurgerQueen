import React, { Fragment } from 'react';
import './dashboard.css';

import ClientInfoForm from './client-Info/ClientInfo';

const Button = ({ setVisible, data, setData }) => {
    return (
        <Fragment>
            <div className='col m12 center-align btn-opt-menu'>
                <div className="col s3">
                    <button className='dash-btn' onClick={() => { setVisible(true); }}>Desayunos</button>
                </div>
                <div className="col s3">
                    <button className='dash-btn food-btn' onClick={() => { setVisible(false); }}>Comidas</button>
                </div>
                <div className='col m6 client-info'>
                    <ClientInfoForm data={data} setData={setData} />
                </div>
            </div>
        </Fragment>
    );
};

export default Button;