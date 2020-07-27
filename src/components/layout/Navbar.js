import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import SignedInLinks from '../layout/SignedInLinks';
import bqLogo from '../../img/logo.svg';
import 'firebase/auth';
import './layout.css';
import { firebase } from '../../firebase/firebaseConfig';

const Navbar = (props) => {

    const logOut = () => {
        console.log('saliendo...');
        firebase.auth().signOut().then(function () {
            props.history.push('/initial');
        }).catch(function (error) {
        });
    };

    return (
        <Fragment>
            <div>
                <nav className='nav-wrapper black bar browser-default'>
                    <div className=' left-align'>
                        <div data-target='slide-out' className='sidenav-trigger show-on-large'>
                            <i className='material-icons nav-icon-menu'>menu</i>
                        </div>
                        <SignedInLinks />
                    </div>
                </nav>
                <ul id="slide-out" className="sidenav black">
                    <li>
                        <div className="logo-burger center-align">
                            <img src={bqLogo} className='bq-logo' alt='logo'></img>
                            <p className='yellow-text bq-text-navbar'>Burger Queen</p>
                        </div>
                    </li>
                    <div className='opt-menu-navbar'>
                        <li><a href='/' className='white-text text-menu'>Menu</a></li>
                        <li><div><div className="divider yellow line-menu"></div></div></li>
                        <li><a href='/orders' className='white-text text-menu'>Ordenes</a></li>
                        <li><div className="divider yellow line-menu"></div></li>
                        <li><a href='/admin' className='white-text text-menu'>Administración</a></li>
                        <li><div className="divider yellow line-menu"></div></li>
                        <li><span className='white-text  text-menu' onClick={() => { logOut(); }}>Salir</span></li>
                        <li><div className="divider yellow line-menu"></div></li>
                    </div>
                </ul>
            </div>
        </Fragment>
    );
};

export default withRouter(Navbar);