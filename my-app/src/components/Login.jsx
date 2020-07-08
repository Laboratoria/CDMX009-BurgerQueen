import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Login =() =>{
    return(
        <div>
            <div class="contentLogin">
                <div class="contentB"></div>
                <div class="contentY"></div>
                <div class="logoLogin"></div>
                
                <div  id="email">
                    <p class="control has-icons-left has-icons-right">
                    <input class="input"  type="email" placeholder="Email "/>
                    <span class="icon is-small is-left">
                        <i class="fas fa-envelope"></i>
                    </span>
                    <span class="icon is-small is-right">
                        <i class="fas fa-check"></i>
                    </span>
                    </p>
                </div>
                
                <div class="pasword">
                <p class="control has-icons-left">
                    <input class="input" type="password" placeholder="Password"/>
                    <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                    </span>
                </p>
                </div>
                <div  id="number">
                    <p class="control has-icons-left has-icons-right">
                    <input class="input"  type="tel" placeholder="Celular"/>
                    <span class="icon is-small is-left">
                        <i class="fas fa-mobile"></i>
                    </span>
                    <span class="icon is-small is-right">
                        <i class="fas fa-check"></i>
                    </span>
                    </p>
                </div>
                <button class="button" id="login"> <Link to="/Home">¡LISTO!</Link></button>
                
            </div>
        </div>
    )
}

export default Login