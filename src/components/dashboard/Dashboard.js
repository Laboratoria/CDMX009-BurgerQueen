import React, { useState } from 'react';
import BreakfastCards from '../menuCards/BreakfastCards';
import DinnerCards from '../menuCards/DinnerCards';
import ResumeMenu from '../dashboard/ResumeMenu';

function Dashboard() {
    const [visible, setVisible] = useState(true);
    const [order, setOrder] = useState([])
    /**
     * order [{ name, price, description, quantity}, {}, ...]
     */

    return (
        <div className='dashboard container'>

            <div className='row'>

                <button className='col m3' onClick={() => { setVisible(true) }}>Desayunos</button>
                <button className='col m3' style={{ backgroundColor: "red" }} onClick={() => { setVisible(false) }}>Comidas</button>
   </div>

            <div className='row'>
                <div className='col s12 m6'>


                    {visible ? <BreakfastCards setOrder={setOrder} /> : <DinnerCards setOrder={setOrder} />}
                </div>
                <div className='col s12 m5 offset-m1'>
                     <ResumeMenu order={order} />
                 </div>
            </div>

        </div>
    )
}

export default Dashboard
