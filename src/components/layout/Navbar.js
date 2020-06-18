import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';

const Navbar = () =>{
    return(
        <nav className='nav-wrapper black'>
            <div className=' left-align'>
            <Link to='/' className='logo'><span className="material-icons nav-icon-menu">menu</span></Link>
            <SignedInLinks />
            </div>
        </nav>
    )
}

export default Navbar;