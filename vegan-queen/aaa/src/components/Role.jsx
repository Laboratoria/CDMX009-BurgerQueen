import React, { Fragment } from "react";
import Boton from "../components/Boton";
import exit from "../img/salir.svg";
import menucocina from "../img/01-menu-cocina.svg";
import menumesero from "../img/01-menu-mesero.svg";

const Role = () => {
  return (
    <div>
      <Boton image={exit} adress="/" />

      <div>
        <Boton image={menumesero} adress="/waiter" />
      </div>

      <div>
        <Boton image={menucocina} adress="/chef" />
      </div>
    </div>
  );
};

export default Role;
