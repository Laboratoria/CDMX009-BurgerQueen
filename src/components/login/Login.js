import React, {useState} from 'react'
import Logo from '../common/Logo'
import firebase from '../../config/firebase/firebase-config'
import 'firebase/firestore'
import '../../assets/styles/index.css';
import { useToasts } from 'react-toast-notifications';

export function Login({setIslogin, setEmployee, setRole}) {
    const { addToast } = useToasts()  
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
          
    let autenticar=(username, role)=>{
      setIslogin(true);
      setEmployee(username);
      setRole(role);
    }
     
    function enter(){
      let isUser;
      const fetchData = async () => {
        const db = firebase.firestore();
        const data = await db.collection('users').get()
        data.docs.map(doc => {
          if (doc.data().user === username.toLowerCase() && doc.data().password === password ){
            const role = doc.data().role
            autenticar(doc.data().name, role)
            isUser = true;
          }  
        })

        if(isUser){
          return
        }else{
          addToast('Usuario o password incorrecto', { 
            autoDismiss: true, 
            placement:'top-center', 
            appearance: 'error' })
        }
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
  
  
  
  
  