import React from 'react';
import './TypesLogo.css';
import styles from './Logo.module.css';
import Logo_BQ from '../../assets/imgs/Logo_BQ.png';

const Logo = ({ nameClass }) => {
    return (
        <div className={styles.logoWrapper}>
            <img className={nameClass} src={Logo_BQ} alt="" />
        </div>
    );
}

export default Logo;