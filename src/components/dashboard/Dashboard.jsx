import React, { useState } from 'react';
import BreakfastCards from '../dashboard/menuCards/BreakfastCards';
import DinnerCards from '../dashboard/menuCards/DinnerCards';
import ResumeMenu from '../dashboard/ResumeMenu';
import Button from '../dashboard/Button';
import Navbar from '../layout/Navbar';

function Dashboard({ datos, setDatos }) {

    const [visible, setVisible] = useState(true);

    const calculateTotal = (items = []) => items
        .reduce((acc, item) => console.log('calculate', acc, item) || (acc + item.price * item.quantity), 0);

    const addOrder = (product, quantity = 1) => {
        if (datos.productos.find(item => item.id === product.id)) {
            const productos = datos.productos
                .map((item) => item.id === product.id ? { ...item, quantity } : item);
            setDatos({
                ...datos,
                productos,
                total: calculateTotal(productos)
            });
        } else {
            const productos = [...datos.productos, { ...product, quantity }];
            setDatos({
                ...datos,
                productos,
                total: calculateTotal(productos)
            });
        }
    };

    const deleteOrder = (id) => {
        setDatos({
            ...datos,
            productos: datos.productos.filter(products => products.id !== id)
        });
    };

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
                        <ResumeMenu addOrder={addOrder} datos={datos} setDatos={setDatos} deleteOrder={deleteOrder} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;