import React from 'react';
import Logo from '../Logo/Logo';
import Boton from '../Boton/Boton'
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import ReusableTable from '../ReusableTable';

import IconPrintAccount from '../../assets/imgs/pink-circle.png';

const WaiterAccount = ({ client, setClient, order, setOrder }) => {

    return (
        <div className={styles.containerContent}>
            <div className={styles.headerWrapperAccount}>
                <div className={styles.logoWaiterAccoun}>
                    <Logo nameClass={"logoAccountWaiter"} />
                </div>
            </div>

            <div className={styles.contentDivision}>
                <div className={styles.firstDivision}>
                    <span className={styles.imageDecoration}></span>
                </div>

                <div className={styles.secondDivision}>
                    <ReusableTable client={client} setClient={setClient} order={order} setOrder={setOrder} />
                </div>

                <div className={styles.thirdDivision}>
                    <div className={styles.printAccount}>
                        <img src={IconPrintAccount} alt="" className={styles.printImg} />
                    </div>

                    <div className={styles.buttonPay}>
                        <Boton text={"Pagado"} allstyles={"pay"} />
                    </div>
                </div>
            </div>

            <div className={styles.routeButtonsAccount}>
                <Link to="kitchen">
                    <Boton text={"Regresar"} allstyles={"return"} />
                </Link>
                <Boton text={"Inicio"} allstyles={"returnTwo"} />
            </div>
        </div>

    );
}

export default WaiterAccount;