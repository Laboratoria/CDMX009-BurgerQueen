import firebase from 'firebase';
import 'firebase/firestore';

let firebaseConfig = {
    apiKey: "AIzaSyCemCHgLVYbAlEf6RIlSrXf8hNsXSTxWVA",
    authDomain: "burgerqueen-77cb0.firebaseapp.com",
    databaseURL: "https://burgerqueen-77cb0.firebaseio.com",
    projectId: "burgerqueen-77cb0",
    storageBucket: "burgerqueen-77cb0.appspot.com",
    messagingSenderId: "965338674587",
    appId: "1:965338674587:web:bfe4d374c8617b58de1d3e",
    measurementId: "G-7117Y2MY6Q"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

// Required for side-effects

 const db = firebase.firestore();

export default db;