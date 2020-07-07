import React from 'react';
import { Link } from 'react-router-dom';
import Boton from '../Boton/Boton'


const RestDay = () => (

    <div>
        <h1>Estoy en la vista 4 Dian</h1>

        <Link to="waiterregister">
            <Boton text={"Ir Pag-5"} allstyles={"pagina-4-Dian"} />
        </Link>  

    </div>
);

export default RestDay;