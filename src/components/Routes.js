import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Order from './Root/Order';
import Kitchen from './Root/Kitchen'

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Order} />
                <Route path="/kitchen" component={Kitchen} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;