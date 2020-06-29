import React from "react";
import "./styles/PersonalNavbar.css";
import house from "../images/house.svg";
import { withRouter } from "react-router-dom";

const PersonalNavbar = (props) => {
  const personal = () => {
    props.history.push("/Personal");
  };
  return (
    <div className="navbarMenu" fixed="bottom">
      <img
        className="house"
        src={house}
        className="house"
        onClick={() => personal()}
      ></img>
    </div>
  );
};

export default withRouter(PersonalNavbar);
