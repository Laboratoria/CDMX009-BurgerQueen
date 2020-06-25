import React from 'react';
import logoImage from '../images/logoBurgerixtli.png'
import {useFirebaseApp} from 'reactfire';
import 'firebase/firestore';


export function Login() {

    const firebase = useFirebaseApp();
    console.log(firebase);
  
    function enter(){
      const userName = document.querySelector('#loginUser');
      console.log(userName.value);
      const password = document.querySelector('#loginPsw');
      console.log(password.value);
     
    }
  
    return (
      <div className="login-container">
        <Logo/>
        <div className='login-input'>
          <input type="text" 
          id="loginUser" 
          name="" 
          placeholder='User Name'/>
          <input type="password" 
          id="loginPsw" name="" 
          placeholder='Password'/>
          <input type="button" 
          id="loginBtn" 
          value="Enter" 
          onClick={enter}/>
        </div>
      </div>  
    );
  }
  
  function Logo() {
    return (
      <div className="logo-circle">
          <img src={logoImage} className="App-logo" alt="logo" />
      </div>  
    );
  }
  
  
  