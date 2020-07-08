import React from 'react';
import { Link } from 'react-router-dom';
import Boton from '../Boton/Boton'

const BreakFast = () => (

    <div>
        <h1>Estoy en la vista 3 Esther ARREGLAR LOGO</h1>

        <Link to="waiterregister">
            <Boton text={"Ir Pag-5"} allstyles={"pagina-3-Esther"} />
        </Link>  

    </div>
);

export default BreakFast;