import React,{useState, Fragment} from 'react';
import {Switch, Route} from 'react-router-dom';
import {Login} from './Login'
import Menu from '../main/Menu'
import Kitchen from '../main/Kitchen'
import Orders from '../main/Orders'

export default function Routes(){
    let [islogin,setIslogin]=useState(false)
    let [employee, setEmployee]= useState("Nombre");

    return (
        <Switch>
            {islogin===true?
                <Fragment>
                AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
                    <Route exact path="/" render = {() => 
                        <Menu 
                        employee={employee}
                        />} 
                    /> 
                    <Route exact path="/cocina" render = {() => 
                        <Kitchen 
                        employee={employee}
                        />} 
                    />
                    <Route exact path="/ordenes" render = {() => 
                        <Orders 
                        employee={employee}
                        />} 
                    />  
                </Fragment>
                :<Route exact path="/" render = {() => <Login setIslogin={setIslogin} setEmployee={setEmployee}/>} /> 
            }      
        </Switch>
    )
}