import React from 'react';
import { Link } from 'react-router-dom';
import Boton from '../Boton/Boton'
import styles from './styles.module.css';
import DateTime from '../DateTime/DateTime';
import Select from 'react-select';

import BurguerTrial from '../../assets/imgs/burger-lunch.jpg';
import BurgerDoble from '../../assets/imgs/burger-lunch.jpg';
import Water from '../../assets/imgs/water-bottle.jpeg';
import Cola from '../../assets/imgs/cola.jpg';
import OnionRings from '../../assets/imgs/onion-rings.jpg';
import Fries from '../../assets/imgs/fries.jpg';
import Eggs from '../../assets/imgs/eggs.jpg';
import Chess from '../../assets/imgs/chess.jpg';


const burgerOptions = [
    {
        value: 1, label: <div><img src={BurguerTrial} height="30px" width="30px" /><p>Hamburguesa Sencilla</p>
            <p>10</p> </div>
    },

    {
        value: 2, label: <div><img src={BurgerDoble} height="30px" width="30px" /><p>Hamburguesa Doble</p>
            <p>15</p> </div>
    },
]


const drinksOptions = [
    {
        value: 1, label: <div><img src={Water} height="30px" width="30px" /><p>Agua 500 ml</p>
            <p>5</p></div>
    },

    {
        value: 2, label: <div><img src={BurgerDoble} height="30px" width="30px" /><p>Agua 750 ml</p>
            <p>7</p> </div>
    },
    {
        value: 3, label: <div><img src={Cola} height="30px" width="30px" /><p>Gaseosa 500ml</p>
            <p>7</p></div>
    },

    {
        value: 4, label: <div><img src={Cola} height="30px" width="30px" /><p>Gaseosa 750ml</p>
            <p>10</p> </div>
    },
]

const additionalOptions = [
    {
        value: 1, label: <div><img src={OnionRings} height="30px" width="30px" /><p>Aros de Cebolla</p>
            <p>5</p> </div>
    },

    {
        value: 2, label: <div><img src={Fries} height="30px" width="30px" /><p>Papas Fritas</p>
            <p>5</p> </div>
    },
]

const additionals = [
    {
        value: 1, label: <div><img src={Eggs} height="30px" width="30px" /><p>Huevos</p>
            <p>1</p> </div>
    },

    {
        value: 2, label: <div><img src={Eggs} height="30px" width="30px" /><p>Queso</p>
            <p>1</p> </div>
    },
]

const RestDay = () => {

    return (


        <div>
            <h1>Estoy en la vista 4 Dian</h1>
            <div className={styles.headerWrapper}>
                <div className={styles.logoRestD}>
                    <span className={styles.logoRestDay}></span>
                </div>

                <h2>Desayunos y Cenas</h2>
                <span className={styles.iconWaiterRestDay}></span>
            </div>

            <div className={styles.containerAll}>

                <div className={styles.menuWrapper}>



                    <div className={styles.burges}>
                        <div>
                            <h3>Hamburguesas</h3>
                            <Select options={burgerOptions} />
                        </div>

                        {/* <div>
                            <p>Hamburguesa Doble</p>
                            <p>15</p>
                            <span className={styles.dobleBurger}></span>
                            <p>Hamburguesa Sencilla</p>
                            <p>10</p>
                            <span className={styles.simpleBurger}></span>
                        </div> */}

                    </div>

                    <div className={styles.drinks}>
                        <div>
                            <h3>Bebidas</h3>
                            <Select options={drinksOptions} />
                        </div>

                        {/* <div>
                            <p>Agua 500 ml</p>
                            <p>5</p>
                            <span className={styles.smallWater}></span>

                            <p>Agua 750 ml</p>
                            <p>7</p>
                            <span className={styles.bigWater}></span>

                            <p>Gaseosa 500ml</p>
                            <p>7</p>
                            <span className={styles.smallSoda}></span>

                            <p>Gaseosa 750ml</p>
                            <p>10</p>
                            <span className={styles.bigSoda}></span>


                        </div> */}
                    </div>
                    <div className={styles.additional}>
                        <div>
                            <h3>Extras</h3>
                            <Select options={additionalOptions} />
                        </div>

                        {/* <div>
                            <p>Aros de Cebolla</p>
                            <p>5</p>
                            <span className={styles.onionRings}></span>
                            <p>Papas Fritas</p>
                            <p>5</p>
                            <span className={styles.fries}></span>
                        </div> */}
                    </div>

                    <div className={styles.add}>
                        <div>
                            <h3>Adicionales</h3>
                            <Select options={additionals} />
                        </div>
                        {/* 
                        <div>
                            <p>Huevos</p>
                            <p>1</p>
                            <span className={styles.eggs}></span>
                            <p>Queso</p>
                            <p>1</p>
                            <span className={styles.chess}></span>
                        </div> */}
                    </div>



                </div>




                <div className={styles.acountWrapper}>
                    <div className={styles.divPint}>
                        <DateTime />
                    </div>
                </div>

            </div>






            <Link to="waiterregister">
                <Boton text={"Ir Pag-5"} allstyles={"pagina-4-Dian"} />
            </Link>

        </div>
    );
}
export default RestDay;