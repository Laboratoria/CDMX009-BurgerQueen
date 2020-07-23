import React, { Fragment } from 'react'
import { Link, BrowserRouter } from "react-router-dom";
import HeaderPrincipal from '../HeaderPrincipal/HeaderPrincipal'
import './HomePage.scss';
import Logo from '../../imgs/logQueen.png';


const HomePage = () => {

    return (
        //<BrowserRouter>
        <Fragment>
            <HeaderPrincipal />
            <div className="container-home">
                <div className="img-home">
                    <img
                        className="logo"
                        src={Logo}
                        alt="Burguer Queen"
                    ></img>
                </div>


                <div className="btns-home">
                    {/*  <Link to="/administration">
                        <button className="btn-view">Administrador</button>
                    </Link> */}
                    <Link to="/waiter">
                        <button className="btn-view">Mesero</button>
                    </Link>
                    <Link to="/kitchen">
                        <button className="btn-view">Cocina</button>
                    </Link>

                </div>


            </div>

        </Fragment>
        //</BrowserRouter>
    )
}

export default HomePage