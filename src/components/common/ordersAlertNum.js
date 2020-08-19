import React from 'react';

function ordersAlertNum(ordersAlert = [], employee){
  const employeeOrders = ordersAlert.filter(element => element.mesero === employee)
      
  return employeeOrders.length > 0 ? (
        <div className='orders-alert'> 
         <p>{employeeOrders.length}</p>
       </div>
       ) : null                                          
  }

  export default ordersAlertNum;