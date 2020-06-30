import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import BreakfastCards from '../dashboard/menuCards/BreakfastCards';
import DinnerCards from '../dashboard/menuCards/DinnerCards';
import ResumeMenu from '../dashboard/ResumeMenu';
import Button from '../dashboard/Button';


function Dashboard() {
    const [visible, setVisible] = useState(true);

    const [order, setOrder] = useState([])
/*         {
            table: '',
            food: [
                //{id:1, comida:"Pollo con gelatina", precio:10, cantidad:3},
            ],
            total: 0,
            status: false,
            paid: false
        }
    ]) */

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
/*         setOrder({ ...order, orderProducts: [order.item, product] })*/
        products.id = uuidv4();
        
        setOrder([...order, products])
        console.log('order de addOrder', order)
}

    //Eliminar productos
    const deleteOrder = (id) => {
        console.log(id)
        setOrder(order.filter(products => products.id !== id))
    }

    //Total Order
     const totalPrice = order.reduce((acc, curr) => acc + curr.price, 0);
    //console.log(totalPrice);
  
    

    return (
        <div className='dashboard'>
            <div className='row'>
                <Button setVisible={setVisible} visible={visible} />
                <div className='col m6'>
                    {visible ? <BreakfastCards  addOrder={addOrder} /> : <DinnerCards addOrder={addOrder} />}
                </div>
                <div className='col s12 m5 offset-m1'>
                    <ResumeMenu order={order} deleteOrder= {deleteOrder} totalPrice={totalPrice} />
                </div>
            </div>
        </div>
    )
}

export default Dashboard;