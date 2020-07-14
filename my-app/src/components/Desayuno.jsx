import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Cafe from "./Cafe";

const Desayuno =() =>{
    return(
        <Router>
        <div>
            <div className="menuDes">
                
                <Link to="/Cafe"><button className="button" id="cafeL"></button> </Link>
                <button className="button" id="jugo"></button>
                <button className="button" id="sandwish"></button>
                <button className="button" id="otro">Otro...</button>
            </div>
            <div className="choose">
                <Switch>
                    <Route path="/Cafe">
                        < Cafe/>
                    </Route>
                </Switch>
            </div>
        </div>
        </Router>
    )
}

export default Desayuno