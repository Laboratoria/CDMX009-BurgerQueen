import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCemCHgLVYbAlEf6RIlSrXf8hNsXSTxWVA",
    authDomain: "burgerqueen-77cb0.firebaseapp.com",
    databaseURL: "https://burgerqueen-77cb0.firebaseio.com",
    projectId: "burgerqueen-77cb0",
    storageBucket: "burgerqueen-77cb0.appspot.com",
    messagingSenderId: "965338674587",
    appId: "1:965338674587:web:a0b51e5812dd6c67de1d3e",
    measurementId: "G-9SRT5TGLBM"
  };

  const fb = firebase.initializeApp(firebaseConfig);
  export const db = fb.firestore();