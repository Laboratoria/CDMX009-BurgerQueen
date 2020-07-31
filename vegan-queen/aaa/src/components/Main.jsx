import React, { Fragment } from "react";
import logo from "../img/logo_vegan.png";
import chef from "../img/chef-animate (1).svg";
import Boton from "./Boton";
//import '../App.css';

const Main = () => {
  return (
    <Fragment>
      <div>
        <img src={chef} alt="logotipo vegan burger" />
      </div>

      <Boton image={logo} adress="/Role" />
    </Fragment>
  );
};

export default Main;
