import React, { useEffect, useState }  from 'react';
import db from '../../firebase';
import Logo from '../Logo/Logo';
import Boton from '../Boton/Boton';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import { useParams } from 'react-router-dom';
import Bell from '../../assets/imgs/cuadrado-bordes.png';
import KitchenTable from '../ReusableTable/kitchenTable';

const Kitchen = ({ client, setClient }) => {

    const [order, setOrder ] = useState();
    
    const { orderId } = useParams()
    
    useEffect(() => {
        db.collection('ordersfood').doc(orderId).get().then((querySnapshot) => {       
            setOrder(querySnapshot.data()); 
        });
    }, [])
    
    console.log('Este es el log', order);
    const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
    
    if (!order) {
        return <div>Loading...</div>
    }
    
    let texto = `La orden número ${order.numorder} de la mesa ${order.numtable} está lista enviando notificación a ${order.namewaiter}`
    
    return (
        <div>
            <div className={styles.headerWrapper}>
                <div className={styles.logoRestD}>
                    <Logo nameClass={"logoSmallLunch"} />
                </div>
                <div className={styles.iconHeader}>
                    <h2>Cocina</h2>
                    <span className={styles.iconWaiterRestDay}></span>
                </div>
            </div>

            <div className={styles.contentDivision}>
                <div className={styles.firstDivision}>
                    <span className={styles.imageDecoration}></span>
                </div>

                <div className={styles.secondDivision}>
                   {order && <KitchenTable client={client} setClient={setClient} order={order} />} 
                </div>

                <div className={styles.thirdDivision}>
                    <div className={styles.checkInTime}>
                        <p>Hora de Entrada</p>
                        <span className={styles.firstNumberWrapper}>3:50pm</span>
                    </div>

                    <div className={styles.printAccount}>
                        <button  onClick={() => hablar(texto)} >
                            <img src={Bell} alt="" className={styles.printImg} />
                        </button>   
                    </div>

                    <div className={styles.departureInTime}>
                        <p>Hora de Salida</p>
                        <span className={styles.firstNumberWrapper}>4:20pm</span>
                    </div>

                </div>
            </div>

            <div className={styles.routeButtonsAccount}>

                <Link to="/kitchenregister">
                    <Boton text={"Regresar"} allstyles={"return"} />
                </Link>

                <div>
                    <span className={styles.imageDecorationtwo}></span>
                </div>
            </div>
        </div>
    );
}

export default Kitchen;