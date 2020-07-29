import React from 'react';
import Routes from './components/login/Routes'
import { ToastProvider, useToasts } from 'react-toast-notifications'

function App() {
    
  return (
  <ToastProvider>
  <div>
     <Routes/>     
    </div>
  </ToastProvider>  
    
  );
}

export default App;

