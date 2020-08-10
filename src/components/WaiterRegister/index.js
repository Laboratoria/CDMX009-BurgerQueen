import React, { Fragment, useEffect, useState } from 'react';
import db from '../../firebase';
import Boton from '../Boton/Boton'
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import TableWaiter from '../Tables/TableWaiter';

const WaiterRegister = ({ client, setClient, order, setOrder }) => {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        db.collection('ordersfood').orderBy('numorder', 'desc').get().then((querySnapshot) => {
            const data = []
            querySnapshot.forEach(function (doc) {
                data.push({...doc.data(), id: doc.id });
            });
            
            setOrders(data);
        });
    }, []);

    return (
        <Fragment>
            <TableWaiter orders={orders} />

            <div className={styles.butons}>
                <div className={styles.butons1}>
                    <Link to="waiter">
                        <Boton text={"Regresar"} allstyles={"buttonOutWaiter"} />
                    </Link>
                </div>
            </div>
        </Fragment>
    );
};

export default WaiterRegister;