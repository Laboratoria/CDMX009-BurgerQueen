import React from 'react'
import './burgerQueen.css'
import logo from './images/logo-initial.png';

function BurgerQueen() {
    return (
        <div>
            <div className='initial-image'>
                <p className='white-text title-BQ letter-b'>Burger</p>
                <p className='white-text title-BQ letter-q'>Queen</p>
                <img className='logo' src={logo} />
                <button className='btn-login'>login</button>
            </div>
        </div>
    )
}

export default BurgerQueen;
