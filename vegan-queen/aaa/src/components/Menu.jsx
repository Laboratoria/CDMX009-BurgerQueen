import React from "react";
import Boton from "../components/Boton";
import exit from "../img/salir.svg";
import mc from "../img/m-c.svg";
import mbreakfast from "../img/02-menu-desayuno.svg";
import mburger from "../img/02-menu-burger.svg";


const Menu = () => {
  return (
    <div>
      <Boton image={exit} adress="/" />
      <div>
        <Boton image={mc} adress="/Role" />
      </div>
      <div>
        <Boton image={mbreakfast} adress="/menu-breakfast" />
      </div>
      <div>
        <Boton image={mburger} adress="/menu-burger" />
      </div>
      <div>Aquí debería aparecer el nombre del empleado
       {/* name ={name}; */}
        </div> 
    </div>
  );
};

export default Menu;
