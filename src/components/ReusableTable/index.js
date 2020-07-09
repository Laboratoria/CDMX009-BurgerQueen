import React from 'react';
import Stepper from "@kiwicom/orbit-components/lib/Stepper";
import DateTime from '../DateTime/DateTime';
import IconDelete from '../../assets/imgs/trash.png';
import styles from './styles.module.css';



const ReusableTable = () => {
    return (
        <div className={styles.containerTable}>

            <div className={styles.DateOfOrderWrapprer}>
                <div className={styles.positionDate}><DateTime /> </div>

                <div className={styles.positionData}>
                    <div className={styles.numberTable}>
                        <p>No. Mesa</p>
                        <span className={styles.firstNumberWrapper}>4</span>
                    </div>

                    <div className={styles.numberPeople}>
                        <p>No. Personas</p>
                        <span className={styles.firstNumberWrapper}>4</span>
                    </div>

                    <div className={styles.numberPeople}>
                        <p>No. Personas</p>
                        <span className={styles.firstNumberWrapper}>4</span>
                    </div>
                </div>

            </div>

            <div className={styles.customerOrders}>
                <div className={styles.Orders}>
                    <div>Café americano</div>
                    <Stepper minValue={0} maxValue={100} />
                    <div><img src={IconDelete} alt="" width={35} height={"auto"} /></div>
                </div>

                <div className={styles.Orders}>
                    <div>Café con leche</div>
                    <Stepper minValue={0} maxValue={100} />
                    <div><img src={IconDelete} alt="" width={35} height={"auto"} /></div>
                </div>

                <div className={styles.Orders}>
                    <div>Café americano</div>
                    <Stepper minValue={0} maxValue={100} />
                    <div><img src={IconDelete} alt="" width={35} height={"auto"} /></div>
                </div>

                <div className={styles.Orders}>
                    <div>Café con leche</div>
                    <Stepper minValue={0} maxValue={100} />
                    <div><img src={IconDelete} alt="" width={35} height={"auto"} /></div>
                </div>
            </div>


        </div>
    );
}
export default ReusableTable;