import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
    return (
        <ul className='right'>
            <li><NavLink to='/' className='btn btn-floating blue lighten-2 black-text'>BC</NavLink></li>
            <li><NavLink to='/'><span className="material-icons">room_service</span></NavLink></li>
        </ul>
    )
}

export default SignedInLinks;