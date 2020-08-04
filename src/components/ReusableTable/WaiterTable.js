import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import DateTime from '../DateTime/DateTime';


const WaiterTable = ({ order }) => {
    console.log(order);

    return (
        <div className={styles.containerTableKitchen}>

            <div className={styles.DateOfOrderWrapprer}>
                <div className={styles.DateOfclientWrapper}>
                    <span className={styles.nameClient}>{order.nameclient}</span>
                    <div className={styles.positionDatewaiter}><DateTime /> </div>
                </div>


                <div className={styles.positionData}>
                    <div className={styles.numberTable}>
                        <p>No. Mesa</p>
                        <span className={styles.firstNumberWrapper}>{order.numtable}</span>
                    </div>

                    <div className={styles.numberPeople}>
                        <p>No. Personas</p>
                        <span className={styles.firstNumberWrapper}>
                            {order.numpeople}
                        </span>
                    </div>

                    <div className={styles.numberOrder}>
                        <p>No. Órden</p>
                        <span className={styles.firstNumberWrapper}>123</span>
                    </div>
                </div>
            </div>

            <div className={styles.separation}></div>

            <div className={styles.customerOrdersWaiter}>

                {order.item.map((item) => (

                    <div className={styles.orderWaiter}>
                        <div className={styles.foodOptionsKitchen}>{item.name}</div>
                <div className={styles.foodprice}>{item.price}</div>
                    </div>
                ))}

                

                <div className={styles.orderWaiter}>
                    <div className={styles.foodTotal}>Total</div>
                    <div className={styles.foodTotalPrice}>230</div>
                </div>
            </div>
        </div>
    );
}
export default WaiterTable;