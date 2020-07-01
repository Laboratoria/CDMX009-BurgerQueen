import React from 'react';
import BurgerLogin from '../../assets/imgs/BurgerLogin1.png';
import Waiter from '../../assets/imgs/waiter.png';
import HatCheff from '../../assets/imgs/hat-chef.png';

import styles from './BackgLogin.module.css'


const BackgLogin = () => (
    <div className={styles.containerLogin}>
        <div className={styles.triangle}>
            
            <img className={styles.burgerLogin} src={BurgerLogin} alt=""/>

            <img className={styles.waiter} src={Waiter} alt=""/>
            <img className={styles.hatCheff} src={HatCheff} alt=""/>        
        
        </div>
 
    </div>
);

export default BackgLogin;

