import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
//import './styles/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//import {FirebaseAppProvider} from 'reactfire';
//import firebaseConfig from './firebase-config';
//import firebase from './firebase-config';
import {BrowserRouter} from 'react-router-dom'

let WithRouter = () => <BrowserRouter><App/></BrowserRouter>

ReactDOM.render(
  <Suspense fallback={'Loading...'}>
    <WithRouter/>
  </Suspense>,
    
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
