import React, {useState} from 'react'
import Logo from '../common/Logo'
import firebase from '../../config/firebase/firebase-config'
import 'firebase/firestore'
import '../../assets/styles/index.css';

export function Login({setIslogin, setEmployee, setRole}) {

     const[username, setUsername] = useState("");
     const[password, setPassword] = useState("");
       
     
     let autenticar=(username, role)=>{
      setIslogin(true);
      setEmployee(username);
      setRole(role);
     }
     
    function enter(){
      
      console.log(username, password);
      const fetchData = async () => {
        const db = firebase.firestore();
        const data = await db.collection('users').get()
        data.docs.map(doc => {
          console.log(doc.data().name, doc.data().password, doc.data().role)
          if (doc.data().user === username.toLowerCase() && doc.data().password === password ){
            const role = doc.data().role
            autenticar(doc.data().name, role)
          }else{
            console.log('no entra');
          }
        })
      }
      fetchData();
    }
  
    return (
      <div className="login-container">
        <Logo className={"logo-circle"}/>
        <div className='login-input'>
          <input type="text" 
          id="loginUser" 
          name="" 
          placeholder='Username'
          onChange={(e)=>setUsername(e.target.value)}  
          />
          <input type="password" 
          id="loginPsw" name="" 
          placeholder='Password'
          onChange={(e)=>setPassword(e.target.value)}  
          />
          <input type="button" 
          id="loginBtn" 
          value="Enter" 
          onClick={enter}/>
        </div>
      </div>  
    );
  }
  
  
  
  
  