import React from 'react';
import '../NavHeader/NavHeader.scss'
import Button from '../../Button/Button';
import { useHistory } from "react-router-dom";

const NavHeader = () => {
    let history = useHistory()

    function handleClickHistorial() {

        history.push('/historial')
    }
    function handleClickCocina() {

        history.push('/cocina')
    }
    function handleClickOrden() {

        history.push('/orden')
    }
   
   return(
    <> 
            <Button  value ='Orden' green onClick = {handleClickOrden} />

           <Button value ='Cocina' green onClick = {handleClickCocina} /> 

            <Button value ='Historial' green onClick = {handleClickHistorial} />     
    </>
   )
}

export default NavHeader;