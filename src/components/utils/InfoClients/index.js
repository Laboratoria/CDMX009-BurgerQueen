import React, { Fragment, useState } from "react";
import { Form } from "react-bootstrap";
import Swal from "sweetalert2";
import styles from "./style.module.css";

const InfoClients = ({ setUserName }) => {
  const [name, setName] = useState({
    UserName: " ",
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
      <Form onSubmit={sendToName}>
        <div className={styles.clientData}>
          {error ? Swal.fire("Ingresa tu nombre de usuario") : null}
          <div>
            <p>Nombre</p>
            <input
              type="text"
              name="userName"
              placeholder="Nombre del cliente"
              onChange={handleChange}
              value={name.userName}
            />
          </div>

          <div>
            <p>Número de mesa</p>
            <input type="text" placeholder="mesa" />
          </div>
          <div>
            <input
              type="submit"
              className={styles.buttonNext}
              value="Guardar"
            />
          </div>
        </div>
      </Form>

      <div className={styles.paragraph}>
        <p>
          Presiona el número de veces necesarias para agregar productos o
          aumentar la cantidad
        </p>
      </div>
    </Fragment>
  );
};

export default InfoClients;
