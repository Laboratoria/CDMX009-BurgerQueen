import React from 'react';
import Logo from '../Logo/Logo';
import styles from './styles.module.css';

const Kitchen = () => {

    return (
        <div>
            <div className={styles.headerWrapper}>
                <div className={styles.logoRestD}>
                    <Logo nameClass={"logoSmallLunch"} />
                </div>
                <div className={styles.iconHeader}>
                    <h2>Comidas y Cenas</h2>
                    <span className={styles.iconWaiterRestDay}></span>
                </div>
            </div>
        </div>

    );
}

export default Kitchen;