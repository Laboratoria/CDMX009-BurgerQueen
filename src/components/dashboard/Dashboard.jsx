import React, { useState } from 'react';
import BreakfastCards from './menuCards/BreakfastCards';
import DinnerCards from './menuCards/DinnerCards';
import ButtonMenu from './menuCards/ButtonMenu'
import ClientInfoForm from './Client-Info/ClientInfo';
import { NavLink } from 'react-router-dom';

function Dashboard() {

    const [datos, setDatos] = useState({
        nombre: '',
        numeroMesa: '',
        numeroComensales: '',
    })

    const [visible, setVisible] = useState(true);
    return (
        <div>
            <ul className='right'>
                <li><NavLink to='/' className='btn btn-floating blue lighten-2 black-text'>BC</NavLink ></li>
                <li><NavLink to='/'><span className="material-icons">room_service</span></NavLink></li>
            </ul>
            <div className='dashboard'>
                <div className='row'>
                    <div className='col m6'>
                        <div className='col m6'>
                            <ButtonMenu name='Desayunos' visible={visible} onClick={() => { setVisible(true) }} />
                        </div>
                        <div className='col m6'>
                            <ButtonMenu name='Comidas' visible={visible} onClick={() => { setVisible(false) }} />
                        </div>

                    </div>
                    <div className='col m6'>
                        <ClientInfoForm datos={datos} setDatos={setDatos} />
                    </div>
                </div>

                <div className='row'>
                    <div className='col s12 m6'>

                        {visible ? <BreakfastCards /> : <DinnerCards />}

                    </div>
                    <div className='col s12 m6 offset-m1'>
                    </div>
                </div>
                <div className='col'>
                </div>

            </div>
        </div >
    )
}

export default Dashboard;