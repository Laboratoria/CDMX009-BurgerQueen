import React, { Fragment, useEffect, useState } from 'react';
import db from '../../firebase';
import Boton from '../Boton/Boton'
import { Link } from 'react-router-dom';
import TableWaiter from '../Tables/TableWaiter';

import styles from './styles.module.css';

const WaiterRegister = ({ client, setClient, order, setOrder }) => {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        db.collection('ordersfood').get().then((querySnapshot) => {
            const data = []
            querySnapshot.forEach(function (doc) {
                data.push({...doc.data(), id: doc.id });
            });
            setOrders(data);
        });
    }, []);

    return (
        <Fragment>
            <TableWaiter
                client={client}
                setClient={setClient}
                order={order}
                setOrder={setOrder}
                orders={orders}
            />

            <div className={styles.butons}>
                <div className={styles.butons1}>
                    <Link to="waiter">
                        <Boton text={"Regresar"} allstyles={"buttonOutWaiter"} />
                    </Link>

                    <Link to="waiter">
                        <Boton text={"Inicio"} allstyles={"buttonOutWaiter"} />
                    </Link>
                </div>

            </div>
        </Fragment>
    );
};

export default WaiterRegister;