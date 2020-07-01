import React, {useState} from 'react'
import Logo from '../common/Logo'
//import {useFirebaseApp} from 'reactfire';
import firebase from '../../config/firebase/firebase-config'
import 'firebase/firestore'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import '../../assets/styles/index.css';

export function Login({setIslogin}) {

     const[username, setUsername] = useState("");
     const[password, setPassword] = useState(""); 
     const [users, setUsers] = useState([]);
     let history = useHistory();

     let autenticar=()=>{
      setIslogin(true)
     }
     /*
    useEffect(()=>{
          
      const fetchData = async () =>{
        const db = firebase.firestore();
        const data = await db.collection('users').get()
        setUsers(data.docs.map(doc => doc.data()))
        data.docs.map(doc=>console.log(doc.data()))
      }
    fetchData()
    },[])*/
  
    function enter(){
      
      console.log(username, password);
      const fetchData = async () => {
        const db = firebase.firestore();
        const data = await db.collection('users').get()
        setUsers(data.docs.map(doc => doc.data()))
        data.docs.map(doc => {
          console.log(doc.data().name, doc.data().password)
          if (doc.data().name == username && doc.data().password == password ){
            
            autenticar()
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
  
  
  
  
  