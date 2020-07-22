import React from 'react'
import './burgerQueen.css'
import logo from '../../img/initBurger.png';
import { NavLink } from 'react-router-dom';


function BurgerQueen() {
    return (
        <div>
            <div className='initial-image'>
                <img className='logo' src={logo} alt='logo' />
                <div className='red'>
                <NavLink to ='/login'><button className='btn-login right'>login</button></NavLink>
                </div>
            </div>
        </div>
    )
}

export default BurgerQueen;
