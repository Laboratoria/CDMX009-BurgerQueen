import React, { Fragment } from "react";
import Boton from "../utils/Buton";
import Navbar from "../Navbar";
import menucocina from "../assets/img/01-menu-cocina.svg";
import styles from "./style.module.css";

const Chef = function ({ date }) {
  return (
    <Fragment>
      <Navbar />
      <div className={styles.containerPrincipal}>
        <div>
          <Boton image={menucocina} adress="/chef" />

          <p>Fecha: {date}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Chef;
