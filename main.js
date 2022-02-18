// Initialize Firebase and other Firebase Imports
import {initializeApp} from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js';

const dotenv = require(dotenv);
dotenv.config();
const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appID: process.env.APP_ID,
    measurementID: process.env.MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);

//Sign Up Users
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";

const auth = getAuth();

async function signUpUser(email, password) {
    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
        const user = userCredential.user;
    }).catch((error) => {
        const code = error.code
        const errorMessage = error.messaging

        alert(code + ": " + errorMessage)
    }).finally(() => {
        window.location.href = "main.html"
    })
}
//Sign in Users
import {signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
function signInUser(email, password) {
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
        const user = userCredential.user;
    }).catch((error) => {
        const code = error.code;
        const message = error.message;

        alert(code + ": " + message)
    }).finally(() => {
        window.location.href = "main.html"
    })
}
