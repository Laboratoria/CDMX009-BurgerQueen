import firebase from 'firebase';
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCAl8ZE1lvU4tmlv1M00tgsOZXT6BkBsf4",
  authDomain: "burgerqueen-7107e.firebaseapp.com",
  databaseURL: "https://burgerqueen-7107e.firebaseio.com",
  projectId: "burgerqueen-7107e",
  storageBucket: "burgerqueen-7107e.appspot.com",
  messagingSenderId: "704526007803",
  appId: "1:704526007803:web:cc9840618904284f611f5e",
  measurementId: "G-MZM42GKNCG"
};

firebase.initializeApp(firebaseConfig);

export default firebase