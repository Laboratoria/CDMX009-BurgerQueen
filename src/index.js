import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Login} from './App';
import * as serviceWorker from './serviceWorker';
import {FirebaseAppProvider} from 'reactfire';
import firebaseConfig from './firebase-config'
import {configure} from '@testing-library/react';

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Suspense fallback={'Loading...'}>
      <Login />
    </Suspense> 
  </FirebaseAppProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
