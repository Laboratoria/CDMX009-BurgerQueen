import React from 'react';
import Logo from '../common/Logo'
import Button from '../common/Button'
import {NavLink} from 'react-router-dom'
import ordersAlertNum from '../common/ordersAlertNum'


let MainNavBar = ({employee, statusMenu ,statusKitchen, statusOrders, rol, ordersAlert}) => {
  
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
          <div className='orders-btn'>
            <NavLink  to='/ordenes'>  
              <Button 
              className={statusOrders} 
              value="Órdenes"
              />
            </NavLink>
            {ordersAlertNum(ordersAlert, employee)}
          </div>  
        </div>
        <p>{rol.toUpperCase()}: {employee}</p> 
      </nav>
    );
}
 
export default MainNavBar;

  