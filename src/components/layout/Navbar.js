import React from 'react'
import SignedInLinks from '../layout/SignedInLinks';
import bqLogo from '../BQ/images/logo.svg';
import 'firebase/auth';
import './layout.css';
import { firebase } from '../../firebase/firebaseConfig';

const Navbar = () => {

    const logOut = () => {
        console.log('saliendo...');
        firebase.auth().signOut().then(function() {
            // Sign-out successful.
          }).catch(function(error) {
            // An error happened.
          });
    }

    return (
        <div>
                <nav className='nav-wrapper black bar'>
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
                    <li><a href='/orders' className='white-text'>Ordenes</a></li>
                    <li><div className="divider yellow lighten-2"></div></li>
                    <li><a href='/' className='white-text'>Administración</a></li>
                    <li><div className="divider yellow lighten-2"></div></li>
                    <li><span className='white-text logout' onClick={ () => {logOut()} }>Salir</span></li>
                    <li><div className="divider yellow lighten-2"></div></li>

                </ul>
            </div>
    )
}

export default Navbar;