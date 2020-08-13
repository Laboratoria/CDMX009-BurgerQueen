import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Login =() =>{
    return(
        <div className="bodyL">
            <div className="contentLogin">
                <div className="contentB"></div>
                <div className="contentY"></div>
                <div className="logoLogin"></div>
                
                <div  id="email">
                    <p className="control has-icons-left has-icons-right">
                    <input className="input"  type="email" placeholder="Email "/>
                    <span className="icon is-small is-left">
                        <i className="fas fa-envelope"></i>
                    </span>
                    <span className="icon is-small is-right">
                        <i className="fas fa-check"></i>
                    </span>
                    </p>
                </div>
                
                <div className="pasword">
                <p className="control has-icons-left">
                    <input className="input" type="password" placeholder="Password"/>
                    <span className="icon is-small is-left">
                    <i className="fas fa-lock"></i>
                    </span>
                </p>
                </div>
                <div  id="number">
                    <p className="control has-icons-left has-icons-right">
                    <input className="input"  type="tel" placeholder="Celular"/>
                    <span className="icon is-small is-left">
                        <i className="fas fa-mobile"></i>
                    </span>
                    <span className="icon is-small is-right">
                        <i className="fas fa-check"></i>
                    </span>
                    </p>
                </div>
                <button className="button" id="login"> <Link to="/Home">¡LISTO!</Link></button>
                
            </div>
        </div>
    )
}

export default Login