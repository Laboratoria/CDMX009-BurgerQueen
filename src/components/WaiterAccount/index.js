import React from 'react';
import Logo from '../Logo/Logo';
import styles from './styles.module.css';
import ReusableTable from '../ReusableTable';

import IconPrintAccount from '../../assets/imgs/pink-circle.png';


const WaiterAccount = () => {

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
                    <ReusableTable />
                </div>

                <div className={styles.thirdDivision}>
                    <div className={styles.printAccount}>
                        <img src={IconPrintAccount} alt="" />
                    </div>
                </div>

            </div>

        </div>





    );
}

export default WaiterAccount;