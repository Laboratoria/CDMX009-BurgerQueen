import React from 'react';
import MainNavBar from './MainNavBar';

const Layout = ({ employee, children }) => {
    let statusMenu = "active-btn";
    let statusKitchen = "nav-btn";
    let statusOrders = "nav-btn";
    return (
        <div className="main-container">
            <MainNavBar 
            employee={employee}
            statusMenu={statusMenu}
            statusKitchen={statusKitchen}
            statusOrders={statusOrders} 
            />
            {children}
        </div>
    )
}
export default Layout;