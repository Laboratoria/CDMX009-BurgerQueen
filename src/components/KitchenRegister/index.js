import React, { Fragment, useEffect, useState } from 'react';
import db from '../../firebase';
import Boton from '../Boton/Boton'
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import TableKitchen from '../Tables/TableKitchen';

const KitchenRegister = ({ client, setClient, order, setOrder }) => {
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
            <TableKitchen
                client={client}
                setClient={setClient}
                order={order}
                setOrder={setOrder}
                orders={orders}
            />

            <div className={styles.butons}>
                <Link to="login">
                    <Boton
                    text={"Salir"} 
                    allstyles={"buttonOutKitchen"}
                    />
                </Link>
            </div>
        </Fragment>
    );
};

export default KitchenRegister;