import React from 'react';
import styles from './styles.module.css';
import DateTime from '../DateTime/DateTime';
//import Stepper from "@kiwicom/orbit-components/lib/Stepper";
import StepperStateless from "@kiwicom/orbit-components/lib/Stepper/StepperStateless";
import validateIncrement from "@kiwicom/orbit-components/lib/utils/validateIncrement";
import validateDecrement from "@kiwicom/orbit-components/lib/utils/validateDecrement";



import IconDelete from '../../assets/imgs/trash.png';

const ReusableTable = ({ client }) => {
    //console.log(client)

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
                                            /* value={item.quantity} */
                                            onChange={(e) => console.log('new value', e.target.value)}
                                            /> 

{/*                                             <div>
                                                <StepperStateless minValue={1} maxValue={100} value={item.quantity}
                                            />
                                            validateDecrement( value={item.quantity}, minValue={1}, step={1} );
                                            </div> */}

                                        

 



                                               
                       
                                        </div>
                                    <div className={styles.deleteIcon}><img src={IconDelete} alt="" width={40} height={"auto"} /></div>
                                </div>
                            </>
                    )}
                </div>
            </div>
        </div>
    );
}
export default ReusableTable;