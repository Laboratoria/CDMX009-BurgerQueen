import React from 'react';
import MainNavBar from './MainNavBar';


function Orders({employee}) {
  let statusMenu = "nav-btn";
  let statusKitchen = "nav-btn";
  let statusOrders = "active-btn"; 

    return (
      <div  className="main-container">
         <MainNavBar 
         employee={employee}
         statusMenu={statusMenu}
         statusKitchen={statusKitchen}
         statusOrders={statusOrders}  
         />
         <p>
           Estoy en orders
         </p>
      </div>
    );
  }

export default Orders;  