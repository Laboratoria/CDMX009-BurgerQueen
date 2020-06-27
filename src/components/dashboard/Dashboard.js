import React, { useState } from 'react';
import BreakfastCards from '../menuCards/BreakfastCards';
import DinnerCards from '../menuCards/DinnerCards';
import Button from './button'
import ClientInfoForm from './clientInfo'
import { scryRenderedDOMComponentsWithClass } from 'react-dom/test-utils';

function Dashboard() {
    const [visible, setVisible] = useState(true);
    return (
        <div className='dashboard'>

            <div className='row'>
                <div className='col m6'>
                    <Button name='cenas' visible={visible} onClick={() => { setVisible(true) }} />
                    <Button name='comidas' visible={visible} onClick={() => { setVisible(false) }} />

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
        </div >
    )
}

export default Dashboard;