import React from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.css"

const Boton = ({adress, image}) => {
  return (
    <Link to={adress}>
      <img src={image} alt="logo" className={styles.btnNav} />
    </Link>
  );
};

export default Boton;
