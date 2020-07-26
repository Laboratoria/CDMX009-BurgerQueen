import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'materialize-css/dist/css/materialize.min.css';

ReactDOM.render((

  <React.StrictMode>
    <App />
  </React.StrictMode>
),
  document.getElementById('root'));

serviceWorker.register();








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