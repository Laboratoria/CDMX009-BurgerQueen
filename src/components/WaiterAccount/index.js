import React, { useEffect, useState } from 'react';
import Logo from '../Logo/Logo';
import db from '../../firebase';
import Boton from '../Boton/Boton'
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import { useParams } from 'react-router-dom';
import WaiterTable from '../ReusableTable/WaiterTable';
import IconPrintAccount from '../../assets/imgs/pink-circle.png';

const WaiterAccount = ({ client, setClient, calculateTotal, calculateAmount }) => {

    const [order, setOrder] = useState();

    const { orderId } = useParams()

    useEffect(() => {
        db.collection('ordersfood').doc(orderId).get().then((querySnapshot) => {
            setOrder(querySnapshot.data());
        });
    }, [])

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
                    {order && <WaiterTable 
                    client={client} setClient={setClient} 
                    order={order} 
                    calculateTotal={calculateTotal} 
                    calculateAmount={calculateAmount} 
                    
                    />}
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
                <Link to="/waiterregister">
                    <Boton text={"Regresar"} allstyles={"return"} />
                </Link>

                <Link to="/waiter">
                    <Boton text={"Inicio"} allstyles={"returnTwo"} />
                </Link>
            </div>
        </div>
    );
}

export default WaiterAccount;