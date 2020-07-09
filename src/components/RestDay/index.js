import React from 'react';
import { Link } from 'react-router-dom';
import Boton from '../Boton/Boton'
import styles from './styles.module.css';
import DateTime from '../DateTime/DateTime';
import Select from 'react-select';
import Logo from '../Logo/Logo';

import Products from '../Products/Products';
import ReusableTable from '../ReusableTable/index'

const RestDay = () => {
    return (

        <div>
            <div className={styles.headerWrapper}>
                <div className={styles.logoRestD}>
                    <Logo nameClass={"logoSmallLunch"} />
                </div>
                <div className={styles.iconHeader}>
                    <h2>Comidas y Cenas</h2>
                    <span className={styles.iconWaiterRestDay}></span>
                </div>
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

                <div className={styles.accountWrapper}>
                    <div className={styles.reusabletab}>
                        <ReusableTable />
                    </div>

                </div>

            </div>


            <div className={styles.routeButtons}>

                <Link to="waiter">
                    <Boton text={"Regresar"} allstyles={"buttonOutWaiter"} />
                </Link>


                <Link to="waiterregister">
                    <Boton text={"Enviar"} allstyles={"pagina-4-Dian"} />
                </Link>

            </div>



        </div>
    );
}
export default RestDay;


