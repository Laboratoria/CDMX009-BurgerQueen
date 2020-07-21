import React from 'react';
import styles from './styles.module.css';
import DateTime from '../DateTime/DateTime';


const WaiterTable = ({ client, order }) => {

    return (
        <div className={styles.containerTableKitchen}>

            <div className={styles.DateOfOrderWrapprer}>
                <div className={styles.DateOfclientWrapper}>
                    <span className={styles.nameClient}>Pablo López</span>
                    <div className={styles.positionDatewaiter}><DateTime /> </div>
                </div>


                <div className={styles.positionData}>
                    <div className={styles.numberTable}>
                        <p>No. Mesa</p>
                        <span className={styles.firstNumberWrapper}>{client.numtable}</span>
                    </div>

                    <div className={styles.numberPeople}>
                        <p>No. Personas</p>
                        <span className={styles.firstNumberWrapper}>
                            {client.numpeople}
                        </span>
                    </div>

                    <div className={styles.numberOrder}>
                        <p>No. Órden</p>
                        <span className={styles.firstNumberWrapper}>123</span>
                    </div>
                </div>
            </div>

            <div className={styles.separation}></div>

            <div className={styles.customerOrders}>
                <div className={styles.Orders}>
                    <div className={styles.foodOptionsKitchen}>Café americano</div>
                    <div className={styles.foodprice}>5</div>
                </div>

                <div className={styles.Orders}>
                    <div className={styles.foodOptionsKitchen}>Hamburguesa Simple</div>
                    <div className={styles.foodprice}>5</div>
                </div>

                <div className={styles.Orders}>
                    <div className={styles.foodOptionsKitchen}>Café americano</div>
                    <div className={styles.foodprice}>555</div>
                </div>

                <div className={styles.Orders}>
                    <div className={styles.foodOptionsKitchen}>Café con leche</div>
                    <div className={styles.foodprice}>5</div>
                </div>

                <div className={styles.Orders}>
                    <div className={styles.foodTotal}>Total</div>
                    <div className={styles.foodTotalPrice}>230</div>
                </div>
            </div>
        </div>
    );
}
export default WaiterTable;