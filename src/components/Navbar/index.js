import React from "react";
import Boton from "../utils/Buton";
import exit from "../assets/img/salir.svg";
import mc from "../assets/img/m-c.svg";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container";
import styles from './style.module.css'


const Navbar = () => {
  return (
    <Container>
      <Row className="d-flex justify-content-end justify-content">
        <div className={styles.btnExit}>
          <Boton image={mc} adress="/Role"/>
          <Boton image={exit} adress="/"/>
        </div>
      </Row>
    </Container>
  );
};

export default Navbar;
