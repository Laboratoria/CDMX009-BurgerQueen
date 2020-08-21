import React, { Fragment } from "react";
import Boton from "../utils/Buton";
import exit from "../assets/img/salir.svg";
import menuCocina from "../assets/img/01-menu-cocina.svg";
import menuMesero from "../assets/img/01-menu-mesero.svg";
/* import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container"; */
//import Column from "react-bootstrap/Col";
import styles from './style.module.css'

const Role = () => {
  return (
    <Fragment>
    <div className={styles.btnExit}>
        <Boton image={exit} adress="/" />
        </div>
      <section className={styles.container}>
          <div>
            <div>
              <Boton image={menuMesero} adress="/waiter" />
            </div>
            <br/>
            <div>
              <Boton image={menuCocina} adress="/chef" />
            </div>
          </div>
  </section>
  </Fragment>
  );
};

export default Role;
