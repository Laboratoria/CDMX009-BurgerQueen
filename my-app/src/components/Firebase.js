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

   const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");
var db = firebase.firestore();

db.collection("users").add({
    first: "Ada",
    last: "Lovelace",
    born: 1815
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});