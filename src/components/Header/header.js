import React from 'react';
import logo from '../../assets/logo-rocky.png'
import './styleHeader.scss'

function Header (){
    return (
        <div> 
            <nav className='nav'>
                <button className='order'>Ordenar</button>
                <button className='production'>Producción</button>
                <button className='finished' >Finalizadas</button>
            </nav>
            <div>
                <img alt="logo" src={logo}/>
            </div>
        </div>
    )
}

export default Header;