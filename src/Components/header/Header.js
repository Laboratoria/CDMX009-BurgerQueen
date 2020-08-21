import React from 'react';
import Logo from '../Logo/Logo';
import NavHeader from '../Header/NavHeader/NavHeader';
import '../Header/Header.scss'


const Header = () => {

    return(
    <div className = 'containerHeader'>
        <div className='navHeader'>
         <NavHeader /> 
        </div>
        <div className='containerLogo'> 

                <Logo className='logo' small />

        </div>
    </div>
    )
  
}

export default Header;