import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Acomp from "./Acomp";
import Burguer from "./Burguer";
import Bebida from "./Bebida";

const Comida =() =>{
    return(
        <Router>
        <div>
            <div className="menuDes">
                <Link to="/Acomp"><button className="button" id="acompanamiento"></button></Link>
                <Link to="/Bebida"><button className="button" id="beber"></button></Link>
                <Link to="/Burguer"><button className="button" id="burguers"></button></Link>
                <button className="button" id="otro2">Otro...</button>
            </div>
            <div className="choose">
                <Switch>
                    <Route path="/Acomp">
                        <Acomp />
                    </Route>
                    <Route path="/Bebida">
                        <Bebida />
                    </Route>
                    <Route path="/Burguer">
                        <Burguer />
                    </Route>
                </Switch>
            </div>
        </div>
        </Router>
    )
}

export default Comida