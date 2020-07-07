import React from 'react';
import { Link } from 'react-router-dom';
import Boton from '../Boton/Boton'

const WaiterRegister = () => (

    <div>
        <h1>Estoy en la vista 5 Esther</h1>

        <Link to="waiter">
        
        <Boton text={"Regresar"} allstyles={"pagina-5-Esther"} />  
        </Link>   

    </div>
);

export default WaiterRegister;