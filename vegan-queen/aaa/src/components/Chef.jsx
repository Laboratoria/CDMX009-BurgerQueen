import React from "react";
import Boton from "../components/Boton";
import exit from "../img/salir.svg";
import mc from "../img/m-c.svg";
import menucocina from "../img/01-menu-cocina.svg";

const Chef = function () {
  return (
    <div>
      <Boton image={exit} adress="/" />
      <div>
        <Boton image={mc} adress="/Role" />
      </div>
      <div>
        <Boton image={menucocina} adress="/chef" />
      </div>
      <div>Aqui van pone sus datos el chef</div>
      <Boton
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQM_M89SuIvsQ-4fSUojfXClKalxp-pf_vNbw&usqp=CAU"
        adress="/orders"
      />
    </div>
  );
};

export default Chef;
