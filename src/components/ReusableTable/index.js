import React from 'react';
import styles from './styles.module.css';
import DateTime from '../DateTime/DateTime';
import db from '../../firebase';
import Stepper from "@kiwicom/orbit-components/lib/Stepper";
import StepperStateless from "@kiwicom/orbit-components/lib/Stepper/StepperStateless";
import validateIncrement from "@kiwicom/orbit-components/lib/utils/validateIncrement";
import validateDecrement from "@kiwicom/orbit-components/lib/utils/validateDecrement";



import IconDelete from '../../assets/imgs/trash.png';

const ReusableTable = ({ client, deleteItem }) => {
    //console.log(client)

    // const deleteProduct = (e) => {
    //     e.preventDefault();
    //     db.collection("ordersfood").doc("DC").delete()
    //         .then(function () {
    //             console.log("Document successfully deleted!");
    //         }).catch(function (error) {
    //             console.error("Error removing document: ", error);
    //         });
    // }

    // const deleteProduct = (clickInTrash) => {
    //     clickInTrash.preventDefault();
    //     // console.log("intentando eliminar")

    // }

    return (
        <div className={styles.containerTable}>

            <div className={styles.DateOfOrderWrapprer}>
                <div className={styles.positionDate}><DateTime /> </div>

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
                    {client.items.map(
                        (item, index) =>
                            <>
                                <div className={styles.productsContainer}>
                                    <div className={styles.foodOptions}>
                                        <span key={index}>{item.name}</span>
                                    </div>
                                    <div>
                                        <input
                                            className={styles.stepperWrapper}
                                            type="number"
                                            min={1}
                                            max={100}
                                            value={item.quantity}
                                            onChange={(e) => console.log('new value', e.target.value)}
                                        />
                                    </div>
                                    {/* <div className={styles.deleteIcon}><img src={IconDelete} alt="" width={40} height={"auto"} /></div> */}
                                    {/* <div className={styles.deleteIcon}> <button onClick={deleteProduct}> <img src={IconDelete} alt="" width={40} height={"auto"} /></button></div> */}
                                    <div className={styles.deleteIcon}> <button onClick={() => deleteItem(index)}> <img src={IconDelete} alt="" width={40} height={"auto"} /></button></div>

                                </div>
                            </>
                    )}
                </div>
            </div>
        </div>
    );
}
export default ReusableTable;