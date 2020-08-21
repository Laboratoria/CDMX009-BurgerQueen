import React from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.css"

const ButtonNext = ({text}) => {
  return (
    <Link to='/menu'>
        <button className={styles.buttonNext}>Siguiente</button>
    </Link>
  );
};

export default ButtonNext;
