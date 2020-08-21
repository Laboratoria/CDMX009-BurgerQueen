import React from 'react';
import logoSmall from '../../Assets/logoSmall.png'
import logo from '../../Assets/logoPrim.png'
import { useHistory } from 'react-router-dom'
import '../Logo/Logo.scss'

const Logo = ({ small = false, big = false}) => {
    let src = logo
    let alt =logo
    if(big){
        src = logo
        alt= logo
    }else if(small){
        src = logoSmall
        alt= logoSmall
    }

    let history = useHistory()

    function handleClick() {
        history.push('/')
    }
   
    return(
            <img className= {big ? 'bounce-in-fwd' : 'logosmall'} src= {src} alt={alt} onClick={handleClick}></img>
    )
  
}

export default Logo;


