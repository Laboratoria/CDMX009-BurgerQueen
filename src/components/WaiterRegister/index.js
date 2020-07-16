import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Boton from '../Boton/Boton'
import TableWaiter from '../Tables/TableWaiter';

import styles from './styles.module.css';

const WaiterRegister = ({ client, setClient, order, setOrder }) => {

    return (
        <Fragment>
            
            <TableWaiter client={client} setClient={setClient} order={order} setOrder={setOrder}/>

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