import React, { Component, useState } from 'react';
import BreakfastCards from '../menuCards/BreakfastCards';
import DinnerCards from '../menuCards/DinnerCards';

function Dashboard () {
    const [visible, setVisible] = useState(true);
        return (
            <div className='dashboard container'>
                <div className='row'>
                    <div className='col s12 m6'>

                        <div className='btns'>
                            <button className='col m3' onClick={() => { setVisible(true)}}>Desayunos</button>
                            <button className='col m3 right' style={{backgroundColor:"red"}} onClick={() => { setVisible(false)}}>Comidas</button>
                        </div>
                        {visible ? <BreakfastCards /> : <DinnerCards />}
                    </div>
                    <div className='col s12 m5 offset-m1'></div>
                </div>

            </div>
        )
    }

export default Dashboard
