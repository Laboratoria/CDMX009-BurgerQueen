import React from 'react';
import logo from '../../assets/logo-rocky.png'

function Header (){
    return (
        <div> 
            <nav>
                <button>Ordenar</button>
                <button>Producción</button>
                <button>Finalizadas</button>
            </nav>
            <div>
                <img alt="logo" src={logo}/>
            </div>
        </div>
    )
}

export default Header;