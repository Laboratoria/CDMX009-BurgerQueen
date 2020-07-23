import React from 'react'
import { Switch, Route } from "react-router-dom";
import Order from './Order/Order';
import GeneralKitchen from './Kitchen/Orders/GeneralKitchen';
import Header from './Header/Header';
import HomePage from './HomePage/HomePage';
import '../styles/Styles.scss';

const Routes = ({ breakfasts, lunchs, order, setOrder }) => {

    return (

        <Switch>
            <Route exact path="/waiter"  >
                <Order
                    breakfasts={breakfasts}
                    lunchs={lunchs}
                    order={order}
                    setOrder={setOrder}
                />
            </Route>
            <Route exact path="/kitchen"  >
                <Header />
                <GeneralKitchen />
            </Route>
            <Route exact path="/">
                <HomePage />
            </Route>
        </Switch>

    )
}

export default Routes