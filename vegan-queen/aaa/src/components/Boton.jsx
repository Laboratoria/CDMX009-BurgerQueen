import React from "react";
import { Link } from "react-router-dom";

const Boton = function (props) {
  return (
    <Link to={props.adress}>
      <img src={props.image} />
    </Link>
  );
};

export default Boton;
