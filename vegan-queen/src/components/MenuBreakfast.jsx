import React from "react";
import Boton from "../components/Boton";
import exit from "../img/salir.svg";
import mc from "../img/m-c.svg";
import mbreakfast from "../img/02-menu-desayuno.svg";

const MenuBreakfast = () => {
  return (
    <div>
      <Boton image={exit} adress="/" />
      <div>
        <Boton image={mc} adress="/Role" />
      </div>

      <div>
        <Boton image={mbreakfast} adress="/menu-breakfast" />
      </div>

      <div>Aqui se debe mostrar el menu para el desayuno</div>
      <div>Aquí debería aparecer el nombre del empleado</div> 
    </div>
  );
};

export default MenuBreakfast;
