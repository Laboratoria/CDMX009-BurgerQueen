import React,{useState, Fragment} from 'react';
import {Switch, Route} from 'react-router-dom';
import {Login} from './Login'
import Menu from '../main/Menu'
import Kitchen from '../main/Kitchen'
import Orders from '../main/Orders'

export default function Routes(){
    let [islogin,setIslogin]=useState(true)
    let [employee, setEmployee]= useState("");
    let [role, setRole] = useState('');

    return (
        <Switch>
            {islogin===true?
                <Fragment>
                    <Route exact path="/" render = {() => 
                        <Menu 
                        employee={employee}
                        role={role}
                        />} 
                    /> 
                    <Route exact path="/cocina" render = {() => 
                        <Kitchen 
                        employee={employee}
                        role={role}
                        />} 
                    />
                    <Route exact path="/ordenes" render = {() => 
                        <Orders 
                        employee={employee}
                        role={role}
                        />} 
                    />  
                </Fragment>
                :<Route exact path="/" render = {() => <Login setIslogin={setIslogin} setEmployee={setEmployee} setRole={setRole}/>} /> 
            }      
        </Switch>
    )
}