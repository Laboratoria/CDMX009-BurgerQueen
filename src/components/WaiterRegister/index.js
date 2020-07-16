import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Boton from '../Boton/Boton'
import TableWaiter from '../Tables/TableWaiter';
import db from '../../firebase';

import styles from './styles.module.css';

const WaiterRegister = ({ client, setClient, order, setOrder }) => {
    const [orders, setOrders] = useState([])
    const [count, setCount]  = useState(0)  
    useEffect(() => {
  
        db.collection('orders').get().then((querySnapshot) => {
            const data = []
            querySnapshot.forEach(function(doc) {
                data.push(doc.data());
            });
            setOrders(data);
        });
 }, []);

;

    console.log('Re running component');

    useEffect(() => {
        console.log('Count = ', count)
    }, [count]);   return (
        <Fragment>   
            <button onClick={() => setCount(count+1)}>Counting</button>         
            <TableWaiter 
                client={client} 
                setClient={setClient} 
                order={order} 
                setOrder={setOrder} 
                orders={orders}
            />

            <div className={styles.butons}>
                <Link to="waiter">
                    <Boton text={"Regresar"} allstyles={"buttonOutWaiter"} />
                </Link>
                
                <Link to="waiter">
                    <Boton text={"Inicio"} allstyles={"buttonOutWaiter"} />
                </Link>
                
                <Link to="waiteraccount">
                    <Boton text={"Editar"} allstyles={"buttonOutWaiter"} />
                </Link>
            </div>

        </Fragment>
    );
};

export default WaiterRegister;