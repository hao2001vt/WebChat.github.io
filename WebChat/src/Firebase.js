
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

var firebaseConfig = {
    apiKey: "AIzaSyAFv-1ZN4-IPZrRZZ0-x3fsgA9DW4RLxSs",
    authDomain: "webchat-24d13.firebaseapp.com",
    databaseURL: "https://webchat-24d13.firebaseio.com",
    projectId: "webchat-24d13",
    storageBucket: "webchat-24d13.appspot.com",
    messagingSenderId: "314999784537",
    appId: "1:314999784537:web:b15f7faa5b6601d55d9d48",
    measurementId: "G-DC702G0ZDW"
};

firebase.initializeApp(firebaseConfig);

export default firebase