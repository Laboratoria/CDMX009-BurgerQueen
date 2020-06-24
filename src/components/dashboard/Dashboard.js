import React, { useState } from 'react';
import BreakfastCards from '../menuCards/BreakfastCards';
import DinnerCards from '../menuCards/DinnerCards';
import Button from './button'
import { scryRenderedDOMComponentsWithClass } from 'react-dom/test-utils';

function Dashboard() {
    const [visible, setVisible] = useState(true);
    return (
        <div className='dashboard'>

            <div className='row'>
                <div className='col m6'>
                    <Button name='desayuno' onClick={() => { setVisible(true) }} />
                    <Button name='comidas' onClick={() => { setVisible(false) }} />
                    <button className='col m3 btnOption' >Desayunos</button>
                    <button className='col m3 btnOption' onClick={() => { setVisible(false) }}>Comidas</button>
                </div>
                <div className='col m6'>
                    <button className='col m3 btnOption'>Comensales</button>
                    <button className='col m3 btnOption'>No.Mesa</button>
                </div>
            </div>

            <div className='row'>
                <div className='col s12 m6'>

                    {visible ? <BreakfastCards /> : <DinnerCards />}

                </div>
                <div className='col s12 m6 offset-m1'>
                    resume menu
                </div>
            </div>
        </div >
    )
}

export default Dashboard;