import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';


ReactDOM.render((

  <React.StrictMode>
    <Suspense fallback={'Conectando la app...'}>
      <App />
    </Suspense>
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