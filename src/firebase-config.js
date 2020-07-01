import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyBNLZikqlXNchxpUtu21PMPodoq-Nt7UnU",
  authDomain: "rockyburger.firebaseapp.com",
  databaseURL: "https://rockyburger.firebaseio.com",
  projectId: "rockyburger",
  storageBucket: "rockyburger.appspot.com",
  messagingSenderId: "1028101221647",
  appId: "1:1028101221647:web:464fdb6f7d18aa2ed7627a"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();