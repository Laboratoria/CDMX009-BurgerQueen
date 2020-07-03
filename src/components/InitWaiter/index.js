import React from 'react';
import LogoSmall from '../../assets/imgs/Logo_BQ.png';
import ImgWaiter from '../../assets/imgs/waiter.png';
import ImgCostumer from '../../assets/imgs/Costumer.png';
import ImgTable from '../../assets/imgs/Table.png';
import ImgUtensils from '../../assets/imgs/Trastes.jpg'
import PeopleFood from '../../assets/imgs/people-food.jpg'

import styles from './styles.module.css'

const InitWaiters = () => {
    return (
      <div className={styles.initWaiter}>
        <img src={LogoSmall} className={styles.logoSmall} alt=""/>

        <div className={styles.buttonRegister}>
          <button type="button" >Ir a Registros</button>
        </div>

        <div className={styles.dataWaiter}> 
          <img src={ImgWaiter} className={styles.imgWaiter} alt=""/>
          <input type="text" placeholder="Nombre del Mesero" className={styles.nameWaiter}/>  
        </div>
          
        <div className={styles.dataCostumer}>
          <img src={ImgCostumer} className={styles.imgCostumer} alt=""/>          
          <div className={styles.dataUtensils}>
          <img src={ImgUtensils} className={styles.imgUtensils} alt=""/>
            <input type="text" placeholder="Ingrese Nombre del Cliente" className={styles.nameCostumer}/> 
          </div>
        </div>

        <div className={styles.dataTable}>        
          <img src={ImgTable} className={styles.imgTable} alt=""/>
          
          <div className={styles.dataTableLabel}>
            <div className={styles.numberTable} >
              <p> No. Mesa </p>
              <label htmlFor = "">
                <input type = "text" placeholder = "No." className = {styles.numberTableData}/> 
              </label> 
            </div>
          </div>

          <div className={styles.numberPeople}>
            <p>No. Personas</p>
            <label htmlFor = "">
              <input type = "text" placeholder = "No." className = {styles.numberPeopleData}/>
            </label>
          </div>        
        </div>
          
        <img src={PeopleFood} className={styles.peopleFood} alt=""/>

      </div>
    );
  }
  
  export default InitWaiters;