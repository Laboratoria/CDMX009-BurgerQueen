import React from 'react';
import LogoSmall from '../../assets/imgs/Logo_BQ.png';
import ImgWaiter from '../../assets/imgs/waiter.png';
import ImgCostumer from '../../assets/imgs/Costumer.png';
import ImgTable from '../../assets/imgs/Table.png';
import ImgUtensils from '../../assets/imgs/Trastes.jpg';
import PeopleFood from '../../assets/imgs/people-food.jpg';
import Breakfast from '../../assets/imgs/coffe-break.png';
import Lunch from '../../assets/imgs/burger-lunch.jpg';

import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import Boton from '../Boton/Boton';
import DateTime from '../DateTime/DateTime';

const InitWaiters = () => {

  return (

    <div>
      <div className={styles.headerInitWaiter}>
        <img src={LogoSmall} className={styles.logoSmall} alt="" />
        <div className={styles.reg_date}>
          <Boton text={"Registros"} allstyles={"buttonGoRgWaiter "} />
          <DateTime />
        </div>
      </div>

      <div className={styles.initWaiter}>

        <div>

          <div className={styles.dataWaiter}>
            <img src={ImgWaiter} className={styles.imgWaiter} alt="" />
            <input type="text" placeholder="Nombre del Mesero" className={styles.nameWaiter} />
          </div>

          <div className={styles.dataCostumer}>
            <img src={ImgCostumer} className={styles.imgCostumer} alt="" />
            <div className={styles.dataUtensils}>
              <img src={ImgUtensils} className={styles.imgUtensils} alt="" />
              <input type="text" placeholder="Ingrese Nombre del Cliente" className={styles.nameCostumer} />
            </div>
          </div>

          <div className={styles.dataTable}>
            <img src={ImgTable} className={styles.imgTable} alt="" />

            <div className={styles.dataTableLabel}>
              <div className={styles.numberTable} >
                <p> No. Mesa </p>
                <label htmlFor="">
                  <input type="text" placeholder="No." className={styles.numberTableData} />
                </label>
              </div>
            </div>

            <div className={styles.numberPeople}>
              <p>No. Personas</p>
              <label htmlFor="">
                <input type="text" placeholder="No." className={styles.numberPeopleData} />
              </label>
            </div>
          </div>
          <div className={styles.footerWaiter}>

            <Link to="/login">
              <Boton text={"Salir"} allstyles={"buttonOutWaiter"} />
            </Link>

            <img src={PeopleFood} className={styles.peopleFood} alt="" />
          </div>
        </div>

        <div className={styles.containerFood}>

          <Link to="/breakfast" className={styles.lineLinks}>
            <div className={styles.bgFoodBreak}>
              <img src={Breakfast} alt="" className={styles.imageFood} />
              <p className={styles.titleMenu}>Desayunos</p>
            </div>
          </Link>

          <Link to="restday" className={styles.lineLinks}>
            <div className={styles.bgFoodLunch}>
              <img src={Lunch} alt="" className={styles.imageFood} />
              <p className={styles.titleMenu}>Comidas y Cenas</p>
            </div>
          </Link>
        </div>

      </div>

    </div>

  );
}

export default InitWaiters;