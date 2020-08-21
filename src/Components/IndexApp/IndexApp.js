import React,{Fragment} from 'react'
import '../IndexApp/IndexApp.scss'; 
import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import { useHistory } from "react-router-dom";



function IndexApp () {
    let history = useHistory()

    function handleClickOrden() {

        history.push('/orden')
    }
    function handleClickCocina() {

        history.push('/cocina')
    }
    return (
        <Fragment>
        <div className="container">
            <div className = 'logo'>
                <Logo big/> 
            </div>       
            <nav>
                <ul>
                        <li><Button className="animate" value = 'Orden' pink onClick={handleClickOrden} /></li>
                        <li><Button className="animate" value = 'Cocina' onClick={handleClickCocina}/></li>
                </ul>
            </nav>
            
        </div>
        </Fragment>
      );
}

export default IndexApp
