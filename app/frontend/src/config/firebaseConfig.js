import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDrsxfSzT3Dbn6nRKbJeAx97_TLmvwluQQ",
    authDomain: "bootcamp-team-9.firebaseapp.com",
    databaseURL: "https://bootcamp-team-9.firebaseio.com",
    projectId: "bootcamp-team-9",
    storageBucket: "bootcamp-team-9.appspot.com",
    messagingSenderId: "413229975703",
    appId: "1:413229975703:web:6d51c717d5f8eec601c1d2",
    measurementId: "G-P1CK83M778"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export default firebase;
