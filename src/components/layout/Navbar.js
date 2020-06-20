import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import bqLogo from '../../img/burgerlogo.svg'

class Navbar extends Component {

    componentDidMount() {
        const M = window.M;
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems, {});
        });
    }

    render() {
        return (
            <div>
                <nav className='nav-wrapper black'>
                    <div className=' left-align'>
                        <div data-target='slide-out' className='sidenav-trigger show-on-large'>
                            <i className='material-icons nav-icon-menu'>menu</i>
                        </div>
                        <SignedInLinks />
                    </div>
                </nav>

                <ul id="slide-out" className="sidenav black">
                    <li><div className="logo-burger center-align">
                        <img src={bqLogo} className='bq-logo' alt='logo'></img>
                        <p className='yellow-text'>Burger Queen</p>
                    </div></li>
                    <li><a href='/' className='white-text'>Menu</a></li>
                    <li><div className="divider yellow lighten-2"></div></li>
                    <li><a href='/' className='white-text'>Ordenes</a></li>
                    <li><div className="divider yellow lighten-2"></div></li>
                    <li><a href='/' className='white-text'>Administración</a></li>
                    <li><div className="divider yellow lighten-2"></div></li>

                </ul>
            </div>
        )
    }
}

export default Navbar;