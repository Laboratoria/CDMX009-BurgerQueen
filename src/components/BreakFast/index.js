import React from 'react';
import { Link } from 'react-router-dom';

// import Coffe from '../../assets/imgs/american-coffe.jpg';

import db from '../../firebase';
import Logo from '../Logo/Logo';
import Boton from '../Boton/Boton'
import styles from './styles.module.css';
import ReusableTable from '../ReusableTable';
import { currencyFormatter } from '../../utils'

const BreakFast = ({ client, setClient, order, setOrder, products, addItemToOrder }) => {

    /*     const handleButtonsBreak = (e) => {  //VA EN EL ONCHANGE
            const { name, value } = e.target;
            setMenuBreak({ ...menubreak, [name]: value });
        }
     */

    const handleOrderBreak = (e) => {  //VA EN EL ONCLICK
        e.preventDefault();

    }

    console.log('order', client);

    return (

        <div className={styles.breakFastPage}>

            <div className={styles.headerWrapper}>
                <div className={styles.logoBreakFast}>
                    <Logo nameClass={"logoSmallLunch"} />
                </div>
                <h2 className={styles.titleBreakfast}>Desayunos</h2>
                <div className={styles.iconHeader}>
                    <span className={styles.iconWaiterBreakFast}></span>
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.menuBreakfast}>
                    {products.map(product => (
                        <button
                            className={styles.bgMenu}
                            onClick={() => addItemToOrder(product)}
                            name="coffeblack"
                        >
                            <img src={`${process.env.PUBLIC_URL}/images/products/${product.image}`} alt={product.name} />
                            <h3>{product.name} <br />{currencyFormatter.format(product.price)}</h3>
                        </button>
                    ))}
                </div>

                <div className={styles.order}>

                    <ReusableTable client={client} setClient={setClient} order={order} setOrder={setOrder}
                    />

                </div>
            </div>

            <div className={styles.routeButtons}>
                <Link to="waiter">
                    <Boton text={"Regresar"} allstyles={"buttonOutWaiterBreack"} />
                </Link>

                <Link to="waiterregister">
                    <Boton text={"Enviar"} allstyles={"sendToKitchen"} />
                </Link>
            </div>
        </div>

    );

}

export default BreakFast;