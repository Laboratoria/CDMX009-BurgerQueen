import React from 'react';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';
import styles from './BackgLogin.module.css';

const BackgLogin = () => (
    
    <div className={styles.containerLogin}>
        <Logo nameClass={"logoLogin"} />
        <div className={styles.contentWrapper}>
            <div className={styles.wraperSeccionBottons}>
                <Link to="/waiter">
                    <span className={styles.iconWaiter}></span>
                    <button type="button" className={styles.buttonWaiter}>Mesero</button>
                </Link>
            </div>
            
            <div className={styles.wraperSeccionBottons}>
                <Link to="/kitchenregister">
                    <span className={styles.iconHatCheff}></span>
                    <button type="button" className={styles.buttonChef}>Cocina</button>
                </Link>
            </div>
        </div>
    </div>
);

export default BackgLogin;
