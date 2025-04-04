// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyACZasx6ee756MtBwbp9Yx1egJDCeD2j5o",
    authDomain: "new-horizons-46248.firebaseapp.com",
    projectId: "new-horizons-46248",
    storageBucket: "new-horizons-46248.firebasestorage.app",
    messagingSenderId: "487884754894",
    appId: "1:487884754894:web:d58c0f75b42d5d43cfe59f",
    measurementId: "G-BZ3B6LETEF"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
