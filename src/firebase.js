import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyD1kkeMLWR7t14utLBV5Wby-y8178uUPQc',
	authDomain: 'vegan-queen.firebaseapp.com',
	databaseURL: 'https://vegan-queen.firebaseio.com',
	projectId: 'vegan-queen',
	storageBucket: 'vegan-queen.appspot.com',
	messagingSenderId: '789926916458',
	appId: '1:789926916458:web:c73e55e8cd93714f6cb513',
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();
