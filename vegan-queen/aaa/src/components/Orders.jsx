
import React from "react";
import Boton from "../components/Boton";
import exit from "../img/salir.svg";
import mc from "../img/m-c.svg";
import menucocina from "../img/01-menu-cocina.svg";


const Orders = () => {
  
  return (
    <div>
      <Boton image={exit} adress="/" />
      <div>
        <Boton image={mc} adress="/Role" />
      </div>
      <div>
        <Boton image={menucocina} adress="/orders" />
      </div>

      <div>Aqui van las Órdenes</div>
      <div>Aquí debería aparecer el nombre del cocinero</div> 
      
    </div>
  );
};

export default Orders;
