import React, { Fragment, useState } from "react";
import { Form } from "react-bootstrap";
import Swal from "sweetalert2";
import styles from "./style.module.css";

const InfoClients = ({ setUserName }) => {
  const [name, setName] = useState({
    UserName: "Cliente,",
  });

  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const sendToName = (e) => {
    e.preventDefault();
    if (name.UserName === "") {
      setError(true);
      return;
    }

    setError(false);
    setUserName(name);
  };

  return (
    <Fragment>
      <div className={styles.clientData}>
        <Form onSubmit={sendToName}>
          {error ? Swal.fire("Ingresa tu nombre de usuario") : null}
          <div className={styles.containerEmployee}>
            <p>Nombre</p>
            <input
              type="text"
              name="userName"
              id=""
              onChange={handleChange}
              value={name.userName}
            />

            <input
              type="submit"
              className={styles.buttonNext}
              value="Guardar"
            />
          </div>
          <div className={styles.paragraph}>
            <p>
              Presiona el número de veces necesarias para agregar productos o
              aumentar la cantidad
            </p>
          </div>
        </Form>
      </div>
    </Fragment>
  );
};

export default InfoClients;
