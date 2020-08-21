import React from 'react';
import Routes from './components/login/Routes'
import { ToastProvider } from 'react-toast-notifications'

function App() {
    
  return (
  <ToastProvider>
    <Routes/>     
  </ToastProvider>  
  );
}

export default App;

