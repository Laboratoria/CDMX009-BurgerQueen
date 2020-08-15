import React from 'react';

function ordersAlertNum(ordersAlert, employee){
    let employeeOrders;
    if(ordersAlert){
      employeeOrders = ordersAlert.filter(element => element.mesero === employee)
      
      return employeeOrders.length === 0 ? null : <div className='orders-alert'> 
                                              <p>{employeeOrders.length}</p>
                                             </div>
    }                                         
  }

  export default ordersAlertNum;