import React,  {useState, useEffect} from 'react';
import Logo from '../common/Logo'
import Button from '../common/Button'
import {Link} from 'react-router-dom'

let MainNavBar = () => {
 
  const[menu, setMenu] = useState(false);
  const[kitchen, setKitchen] = useState(false);
  const[orders, setOrders] = useState(false); 
  
  useEffect(()=>{
     console.log(menu, kitchen, orders);
  })
   
    return (
      <nav className="main-nav">
        <Logo className="nav-logo"/>
        <div>
          <Link to='/'>
            <Button 
            className="nav-btn" 
            value="Menú"
            onClick={()=>setMenu(true)}  
            />
          </Link>
          <Link to='/cocina'>  
            <Button 
            className="nav-btn" 
            value="Cocina"
            onClick={()=>setKitchen(true)}   
            />
          </Link>
          <Link to='/ordenes'>  
            <Button 
            className="nav-btn" 
            value="Órdenes"
            onClick={()=>setOrders(true)}   
            />
          </Link>  
        </div>
        <p>Nombre de empleado</p>
        
      </nav>
    );

}
 
export default MainNavBar;

  