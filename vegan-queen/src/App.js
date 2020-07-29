import React from "react";
//Router
import {
  BrowserRouter as Router,
  //Con switch se crea el contenido dinámico, adentro va el route
  Switch,
  Route,
  //Link es un ancla
  Link,
  NavLink,
} from "react-router-dom";

import "./App.css";
import Main from "./components/Main";
import Role from "./components/Role";
import Waiter from "./components/Waiter";
import Chef from "./components/Chef";
import Menu from "./components/Menu";
import MenuBreakfast from "./components/MenuBreakfast";
import MenuBurger from "./components/MenuBurger";
import Orders from "./components/Orders";
import Boton from "./components/Boton";


function App() {
  return (
    <Router>
      <div className="container mt-5">
        <div className="btn-group">
          <Link to="/" className="btn btn-dark">
            Main
          </Link>
          <Link to="/role" className="btn btn-dark" activeClassName="active">
            {/* <NavLink to = '/role' className= 'btn btn-dark' activeClassName='active'> */}
            M o C
          </Link>
          <Link to="/menu" className="btn btn-dark">
            Menú
          </Link>
          <Link to="/menu-breakfast" className="btn btn-dark">
            Desayuno
          </Link>
          <Link to="/menu-burger" className="btn btn-dark">
            Burger
          </Link>
          <Link to="/waiter" className="btn btn-dark">
            Mesero
          </Link>
          <Link to="/chef" className="btn btn-dark">
            Cocinero
          </Link>
          <Link to="/orders" className="btn btn-dark">
            Órdenes
          </Link>
        </div>
        <hr />
        <Switch>
          <Route path="/role">
            <Role />
          </Route>

          <Route path="/waiter">
            <Waiter />
          </Route>
          <Route path="/chef">
            <Chef />
          </Route>

          <Route path="/menu">
            <Menu />
          </Route>
          <Route path="/menu-breakfast">
            <MenuBreakfast />
          </Route>
          <Route path="/menu-burger">
            <MenuBurger />
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/">
            {/* Aqui se llaman los componentes */}
            <Main />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
