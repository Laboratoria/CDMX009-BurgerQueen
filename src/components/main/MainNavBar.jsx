import React from 'react';
import Logo from '../common/Logo'
import Button from '../common/Button'
import {NavLink} from 'react-router-dom'

let MainNavBar = ({employee, statusMenu ,statusKitchen, statusOrders}) => {
   
    return (
      <nav className="main-nav">
        <Logo className="nav-logo"/>
        <div>
          <NavLink  to='/'>
            <Button 
            className={statusMenu} 
            value="Menú"
            />
          </NavLink>
          <NavLink  to='/cocina'>  
            <Button 
            className={statusKitchen} 
            value="Cocina"
            />
          </NavLink>
          <NavLink  to='/ordenes'>  
            <Button 
            className={statusOrders} 
            value="Órdenes"
            />
          </NavLink>  
        </div>
        <p>Empleado: {employee}</p>
        
      </nav>
    );

}
 
export default MainNavBar;

  