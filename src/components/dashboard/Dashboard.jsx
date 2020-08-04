import React, { useState, Fragment } from 'react';

import BreakfastCards from '../dashboard/menuCards/BreakfastCards';
import DinnerCards from '../dashboard/menuCards/DinnerCards';
import ResumeMenu from '../dashboard/resume-menu/ResumeMenu';
import Button from '../dashboard/Button';
import Navbar from '../layout/Navbar';

function Dashboard({ data, setData }) {

    const [visible, setVisible] = useState(true);

    const calculateTotal = (items = []) => items.
        reduce((acc, item) => console.log('calculate', acc, item) || (acc + item.price * item.quantity), 0);

    const addOrder = (product, quantity = 1) => {
        if (data.productos.find(item => item.id === product.id)) {
            const productos = data.productos
                .map((item) => item.id === product.id ? { ...item, quantity } : item);
            setData({
                ...data,
                productos,
                total: calculateTotal(productos)
            });
        } else {
            const productos = [...data.productos, { ...product, quantity }];
            setData({
                ...data,
                productos,
                total: calculateTotal(productos)
            });
        }
    };

    const deleteOrder = (id) => {
        const filterData = data.productos.filter(products => products.id !== id);
        setData({
            ...data,
            productos: filterData, total: calculateTotal(filterData)
        });
    };


    return (
        <Fragment>
            <div className='dashboard'>
                <Navbar data={data} />
                <div className='row'>
                    <Button setVisible={setVisible} visible={visible} data={data} setData={setData} />
                    <div className='col m6'>
                        {visible ? <BreakfastCards addOrder={addOrder} /> : <DinnerCards addOrder={addOrder} />}
                    </div>
                    <div className='col s12 m5 offset-m0'>
                        <ResumeMenu data={data} deleteOrder={deleteOrder} addOrder={addOrder} />
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Dashboard;