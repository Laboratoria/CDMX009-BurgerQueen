import React, { useState } from 'react';
import BreakfastCards from '../menuCards/BreakfastCards';
import DinnerCards from '../menuCards/DinnerCards';
import ResumeMenu from '../dashboard/ResumeMenu';
import Button from '../dashboard/Button';
import '../../styles/dashboard.css'

function Dashboard() {
    const [visible, setVisible] = useState(true);

    const [order, setOrder] = useState([
        {
            table: '',
            food: [
                //{id:1, comida:"Pollo con gelatina", precio:10, cantidad:3},
            ],
            total: 0,
            status: false,
            paid: false
        }
    ])

    /*     let [bolsa,manipularbolsa]=useState(
            {
                cliente:'',
                productos:[
                    //{id:1, comida:"Pollo con gelatina", precio:10, cantidad:3},
                ],
                total:0,
                status:false,
                paid:false
            }
        ) */

    let addOrder = (products) => {
/*         setOrder({ ...order, orderProducts: [order.item, product] })*/ //esto hizo carlos
        setOrder([...order, products])
        console.log('order de addOrder', order)
}
    

    return (
        <div className='dashboard'>
            <div className='row'>
                <Button setVisible={setVisible} visible={visible} />
                <div className='col s12 m6'>
                    {visible ? <BreakfastCards  addOrder={addOrder} /> : <DinnerCards addOrder={addOrder}  />}
                </div>
                <div className='col s12 m5 offset-m1'>
                    <ResumeMenu order={order} />
                </div>
            </div>
        </div>
    )
}

export default Dashboard;