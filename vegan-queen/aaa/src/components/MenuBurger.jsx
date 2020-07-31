import React from "react";

import Boton from "../components/Boton";
import exit from "../img/salir.svg";
import mc from "../img/m-c.svg";
import mburger from "../img/02-menu-burger.svg";

const MenuBurger = () => {
  return (
    <div>
      <Boton image={exit} adress="/" />
      <div>
        <Boton image={mc} adress="/Role" />
      </div>

      <div>
        <Boton image={mburger} adress="/menu-burger" />
      </div>

      <div>Aqui se debe mostrar el menu de Hamburgesas</div>
      <div>Aquí debería aparecer el nombre del empleado</div> 
    </div>
  );
};

export default MenuBurger;
