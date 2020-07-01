import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';

const Navbar = () => {
    return (
        <nav className='nav-wrapper black'>
            <div className='container left-align'>
                <Link to='/orders' className='logo'><span className="material-icons" >menu</span></Link>
                <SignedInLinks />
            </div>
        </nav>
    )
}

export default Navbar;