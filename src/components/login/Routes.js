import React,{useState, Fragment} from 'react';
import {Switch, Route} from 'react-router-dom';
import {Login} from './Login'
import Menu from '../main/Menu'
import Kitchen from '../main/Kitchen'
import Orders from '../main/Orders'

export default function Routes(){
    let [islogin,setIslogin]=useState(true)
    return (
        <Switch>
            {islogin===true?
                <Fragment>
                <Route exact path="/" component = {Menu} /> 
                    <Route exact path="/cocina" component = {Kitchen} />
                    <Route exact path="/ordenes" component = {Orders} />  
                </Fragment>
                :<Route exact path="/" render = {() => <Login setIslogin={setIslogin}/>} /> 
            }      
        </Switch>
    )
}