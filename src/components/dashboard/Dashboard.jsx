import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import BreakfastCards from '../dashboard/menuCards/BreakfastCards';
import DinnerCards from '../dashboard/menuCards/DinnerCards';
import ResumeMenu from '../dashboard/ResumeMenu';
import Button from '../dashboard/Button';


function Dashboard({ datos, setDatos }) {

    const [visible, setVisible] = useState(true);



    //const [order, setOrder] = useState([]) 

    let addOrder = (products) => {
        setDatos({ ...datos, productos: [...datos.productos, products] })
        products.id = uuidv4();

        //setDatos([...datos.productos, products])
        console.log('order de addOrder', datos)
    }

    //Eliminar productos
    const deleteOrder = (id) => {
        console.log(id)
        setDatos(datos.filter(products => products.id !== id))
    }

    //Total Order
    //const totalPrice = order.reduce((acc, curr) => acc + curr.price, 0);
    //console.log(totalPrice);



    return (
        <div className='dashboard'>
            <div className='row'>
                <Button setVisible={setVisible} visible={visible} datos={datos} setDatos={setDatos} />
                <div className='col m6'>
                    {visible ? <BreakfastCards addOrder={addOrder} /> : <DinnerCards addOrder={addOrder} />}
                </div>
                <div className='col s12 m5 offset-m1'>
                    <ResumeMenu datos={datos} setDatos={setDatos} deleteOrder={deleteOrder} />
                </div>
            </div>
        </div>
    )
}

export default Dashboard;