import React from 'react';
import LogoSmall from '../../assets/imgs/Logo_BQ.png';
import ImgWaiter from '../../assets/imgs/waiter.png';
import ImgCostumer from '../../assets/imgs/Costumer.png';
import ImgTable from '../../assets/imgs/Table.png';

import styles from './styles.module.css'


const InitWaiters = () => {
    return (
      <div>
        <img src={LogoSmall} className={styles.logoSmall} alt=""/>

        <img src={ImgWaiter} className={styles.imgWaiter} alt=""/>
        <input type="text" placeholder="Nombre del Mesero"/>  
        
        <img src={ImgCostumer} className={styles.imgCostumer} alt=""/>
        
        <img src={ImgTable} className={styles.imgTable} alt=""/>

        
      </div>
    );
  }
  
  export default InitWaiters;