import React, { useState } from 'react';
import BreakfastCards from '../dashboard/menuCards/BreakfastCards';
import DinnerCards from '../dashboard/menuCards/DinnerCards';
import ButtonMenu from '../dashboard/menuCards/button'
import ClientInfoForm from './Client-Info/clientInfo';

function Dashboard() {
    const [visible, setVisible] = useState(true);
    return (
        <div>

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
                        <ClientInfoForm />
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