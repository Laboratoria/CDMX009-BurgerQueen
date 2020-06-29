import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () =>{
    return(
       <ul className='right nav-icon-bell'>
           <li><NavLink to='/' className='btn btn-floating blue lighten-2 black-text'>BC</NavLink></li>
           <li><NavLink to='/'><span className="material-icons bell">room_service</span></NavLink></li>
       </ul>
    )
}

export default SignedInLinks;