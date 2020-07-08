import React from 'react';
import Logo_BQ from '../../assets/imgs/Logo_BQ.png';
import styles from './Logo.module.css';
import './TypesLogo.css';

const Logo = ({ nameClass }) => (

    <div className={styles.logoWrapper}>
        <img className={nameClass} src={Logo_BQ} alt="" />
    </div>
);

export default Logo