import firebase from 'firebase';

let Config = {
    apiKey: "AIzaSyDyO_oSXSzoESc0jYmDl6qaS6PAMKFJ_mA",
    authDomain: "bjjacademy-fa163.firebaseapp.com",
    databaseURL: "https://bjjacademy-fa163.firebaseio.com",
    projectId: "bjjacademy-fa163",
    storageBucket: "bjjacademy-fa163.appspot.com",
    messagingSenderId: "1045455187404",
    appId: "1:1045455187404:web:3cce2a8726eb64f0"
};
// Initialize Firebase
firebase.initializeApp(Config);

export default firebase;