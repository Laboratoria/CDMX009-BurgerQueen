import React from 'react'
import './HeaderPrincipal.scss';


const HeaderPrincipal = () => {

    return (

        <header className="header-principal">
            <h1>Burguer Queen</h1>
        </header>
    )
}

export default HeaderPrincipal


//En extras al poner huevo o queso debe de ser del precio que hay actualmente (dobe-->16 * 2= 32 y no 16+15(precio del item en menu))