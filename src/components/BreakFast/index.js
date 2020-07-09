import React from 'react';
import { Link } from 'react-router-dom';
import Boton from '../Boton/Boton'
import styles from './styles.module.css';
import DateTime from '../DateTime/DateTime';
import Select from 'react-select';
import Logo from '../Logo/Logo';
import Coffe from '../../assets/imgs/american-coffe.jpg';
import CoffeMilk from '../../assets/imgs/coffe-milk.jpg';
import Sandwich from '../../assets/imgs/sandwich.jpg';
import Juice from '../../assets/imgs/orange-juice.jpg'

import Products from '../Products/Products';

const BreakFast = () => (

    <div className={styles.breakFastPage}>
        <div className={styles.headerWrapper}>
            <div className={styles.logoBreakFast}>
                <Logo nameClass={"logoSmallLunch"} />
            </div>
                <h2>Desayunos</h2>
            <div className={styles.iconHeader}>
                <span className={styles.iconWaiterBreakFast}></span>
            </div>
        </div>

        <div className={styles.container}>
            <div className={styles.menuBreakfast}>

                <div className={styles.breakfast}>

                    <div className={styles.bgMenu}>
                        <img src={Coffe} alt=""/>
                        <h3>Cafe Americano <br/> $5.00</h3>
                    </div>

                    <div className={styles.bgMenu}>
                        <img src={CoffeMilk} alt=""/>
                        <h3>Cafe con Leche <br/> $7.00</h3>
                    </div>
                </div>

                <div className={styles.breakfast}>
                    <div className={styles.bgMenu}>
                        <img src={Sandwich} alt=""/>
                        <h3>Sandwich <br/> $10.00</h3>
                    </div>
                
                    <div className={styles.bgMenu}>
                        <img src={Juice} alt=""/>
                        <h3>Jugo <br/> $7.00</h3>
                    </div>
                </div>
                
              
                

            </div>
            <div className={styles.order}>
                <DateTime />

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
        </div>

        <Link to="waiter">
            <Boton text={"Regresar"} allstyles={"buttonOutWaiter"} />
        </Link>

        <Link to="waiterregister">
            <Boton text={"Ir Pag-5"} allstyles={"pagina-3-Esther"} />
        </Link>  

    </div>
);

export default BreakFast;