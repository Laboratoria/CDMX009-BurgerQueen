import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import BreakfastCards from '../dashboard/menuCards/BreakfastCards';
import DinnerCards from '../dashboard/menuCards/DinnerCards';
import ResumeMenu from '../dashboard/ResumeMenu';
import Button from '../dashboard/Button';
import Navbar from '../layout/Navbar';


function Dashboard({ datos, setDatos }) {

    const [visible, setVisible] = useState(true);

    const totalPrice = datos.productos.reduce((acc, curr) => acc + curr.price, 0);

    const addOrder = (products) => {
        
        setDatos({ ...datos, productos: [...datos.productos, products], total: totalPrice });
        // productos: [ {producto: {id, name, price, img,quantity: 1}, quantity: 1} ]
        products.id = uuidv4();

        //console.log('order de addOrder', datos);
    }

    const deleteOrder = (id) => {
        setDatos({
            ...datos,
            productos: datos.productos.filter(products => products.id !== id)
        });
    }

    //const totalPrice = datos.productos.reduce((acc, curr) => acc + curr.price, 0);

    return (
        <div>
            <div className='dashboard'>
            <Navbar datos={datos} />
                <div className='row'>
                    <Button setVisible={setVisible} visible={visible} datos={datos} setDatos={setDatos} />
                    <div className='col m6'>
                        {visible ? <BreakfastCards addOrder={addOrder} /> : <DinnerCards addOrder={addOrder} />}
                    </div>
                    <div className='col s12 m5 offset-m0'>
                        <ResumeMenu datos={datos} setDatos={setDatos} deleteOrder={deleteOrder} totalPrice={totalPrice} />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Dashboard;