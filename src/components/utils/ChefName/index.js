import React, { Fragment, useState } from "react";
import { Form } from "react-bootstrap";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
import styles from "./style.module.css";

const ChefName = ({ setChefName }) => {
  const history = useHistory();

  const [name, setName] = useState({
    UserName: "",
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
    setChefName(name);
    history.push("/orders");
  };

  return (
    <Fragment>
      <Form onSubmit={sendToName}>
        {error ? Swal.fire("Ingresa tu nombre de usuario") : null}
        <div className={styles.containerEmployee}>
          <p>Nombre</p>
          <input
            type="text"
            name="waiterName"
            id=""
            onChange={handleChange}
            value={name.waiterName}
          />

          <input
            type="submit"
            className={styles.buttonNext}
            value="Siguiente"
          />
        </div>
      </Form>
    </Fragment>
  );
};

export default ChefName;
