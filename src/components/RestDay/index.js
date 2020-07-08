import React from 'react';
import { Link } from 'react-router-dom';
import Boton from '../Boton/Boton'
import styles from './styles.module.css';
import DateTime from '../DateTime/DateTime';
import Select from 'react-select';

import Products from '../Products/Products'

const RestDay = () => {
    return (

        <div>
            <div className={styles.headerWrapper}>
                <div className={styles.logoRestD}>
                    <span className={styles.logoRestDay}></span>
                </div>

                <h2>Desayunos y Cenas</h2>
                <span className={styles.iconWaiterRestDay}></span>
            </div>

            <div className={styles.containerAll}>

                <div className={styles.menuWrapper}>
                    <div className={styles.firstWrapperFood}>
                        <div className={styles.burgersWrapper}>
                            <div>
                                <h3>Hamburguesas</h3>
                                <Select options={Products.burgers} />
                            </div>

                        </div>

                        <div className={styles.add}>
                            <div>
                                <h3>Adicionales</h3>
                                <Select options={Products.additionals} />
                            </div>
                        </div>
                    </div>

                    <div className={styles.secondWrapperFood}>
                        <div className={styles.drinks}>
                            <div>
                                <h3>Bebidas</h3>
                                <Select options={Products.drinks} />
                            </div>
                        </div>
                        <div className={styles.additional}>
                            <div>
                                <h3>Extras</h3>
                                <Select options={Products.additionalOptions} />
                            </div>
                        </div>
                    </div>


                </div>

                <div className={styles.acountWrapper}>
                    <div className={styles.divPint}>
                        <DateTime />
                        <h3>ESTO SE QUITA LO </h3>
                        <h3>PUSE POR RELLENO </h3>
                        <h2>Aqui va LA TABLA</h2>
                        <p>Hamburguesa Doble</p>
                        <p>Gaseosa 500 ml</p>
                        <p>Agua 750 ml</p>
                        <p>Café Américano</p>
                        <p>Hamburguesa Simple</p>

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


