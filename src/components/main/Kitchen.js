import React from 'react';
import MainNavBar from './MainNavBar';


function Kitchen({employee}) {
  let statusMenu = "nav-btn";
  let statusKitchen = "active-btn";
  let statusOrders = "nav-btn"; 
    
    return (
      <div  className="main-container">
         <MainNavBar 
         employee={employee}
         statusMenu={statusMenu}
         statusKitchen={statusKitchen}
         statusOrders={statusOrders}  
         />
         <p>
           Estoy en cocina
         </p>
      </div>
    );
  }

export default Kitchen;  