import React,{Fragment} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import IndexApp from './Components/IndexApp/IndexApp'
import OrderSection from './Components/OrderSection/OrderSection.js'
import KitchenSection from './Components/KitchenSection/kitchenSection'
import HistorialSection from './Components/HistorialSection/HistorialSection'
import '../src/App.scss';


const App = () => {

  return ( 
    <Router>
        <Switch>
          <Fragment>
              <Fragment>
                <Route  path ='/' exact component = {IndexApp} />
              </Fragment>
            <Fragment>
              <Fragment>
                <Route  path ='/orden' component={OrderSection}/>
              </Fragment>
              <Fragment>
                <Route   path= '/cocina' component= {KitchenSection}/>
              </Fragment>
              <Fragment>
                <Route  path = '/historial' component = {HistorialSection}/>
              </Fragment>
            </Fragment>    
          </Fragment>
        </Switch>
    </Router>
    
    
   
   );
}
 
export default App;
