import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { FirebaseAppProvider } from 'reactfire';
import firebaseConfig from './firebase/firebaseConfig';


ReactDOM.render((

  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Suspense fallback={'Conectando la app...'}>
        <App />
      </Suspense>
    </FirebaseAppProvider>
  </React.StrictMode>
), 
document.getElementById('root'));

serviceWorker.unregister();








//Firebase 1º
/* ReactDOM.render((

  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Suspense fallback={'Conectando la app...'}>
        <App />
      </Suspense>
    </FirebaseAppProvider>
  </React.StrictMode>
), 
document.getElementById('root'));

serviceWorker.unregister(); */