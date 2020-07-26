import React, { Fragment } from 'react';
import './burgerQueen.css';
import logo from '../../img/initBurger.png';

function BurgerQueen() {
    return (
        <Fragment>
            <div className='initial-image'>
                <img className='logo' src={logo} alt='logo' />
                <div className='red'>
                    <a href='/login'><button className='btn-login right'>login</button></a>
                </div>
            </div>
        </Fragment>
    );
}

export default BurgerQueen;
