import React, { Fragment } from "react";
import Boton from "../utils/Buton";
import menumesero from "../assets/img/01-menu-mesero.svg";
import Navbar from "../Navbar";
import styles from "./style.module.css";

const Waiter = ({ date }) => {
  return (
    <Fragment>
      <Navbar />
      <div className={styles.containerPrincipal}>
        <div>
          <Boton image={menumesero} adress="/waiter" />
        </div>
        <p>Fecha: {date}</p>
      </div>
    </Fragment>
  );
};

export default Waiter;
