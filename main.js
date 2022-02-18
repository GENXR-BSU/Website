// Initialize Firebase and other Firebase Imports
import {initializeApp} from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js';

const firebaseConfig = {
    apiKey: 'AIzaSyBfxfTdDZ16BMAJw7VZdCcpW6P1UlnYQCk',
    authDomain: 'genxr-b88db.firebaseapp.com',
    projectId: 'genxr-b88db',
    storageBucket: 'genxr-b88db.appspot.com',
    messagingSenderId: '153314800064',
    appID: '1:153314800064:web:927a8efa69d30fa47ed825',
    measurementID: 'G-F0LRYL3NQC'
};

const app = initializeApp(firebaseConfig);

//Sign Up Users
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";

const auth = getAuth();

async function signUpUser(email, password) {
    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
        const user = userCredential.user;
        console.log("Create Success! " + user);
        window.location.href = "main.html"
    }).catch((error) => {
        const code = error.code
        const errorMessage = error.messaging

        console.log(code, errorMessage);
    })
}
//Sign in Users
import {signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";
function signInUser(email, password) {
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
        const user = userCredential.user;
        console.log("Log in Success!");
        window.location.href = "main.html"
    }).catch((error) => {
        const code = error.code;
        const message = error.message;

        console.log(code, message);
    })
}
