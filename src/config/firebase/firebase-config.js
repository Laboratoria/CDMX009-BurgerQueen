import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAvtcRBtUmWHHghCTbrm8ZCiWQmG8Yp5Sw",
    authDomain: "burger-queen-e24cd.firebaseapp.com",
    databaseURL: "https://burger-queen-e24cd.firebaseio.com",
    projectId: "burger-queen-e24cd",
    storageBucket: "burger-queen-e24cd.appspot.com",
    messagingSenderId: "461310075289",
    appId: "1:461310075289:web:cf698b4c079dd13e90b308"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

  export default firebase;