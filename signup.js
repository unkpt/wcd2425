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

const submit = document.getElementById("signup-form");

// Input field values

submit.onsubmit = function(event) {

    event.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        // Create user document
        await setDoc(doc(db, "users", user.uid), {
            email: user.email,
            uid: user.uid,
            displayName: username,
            role: "user",
        }).then(() => {
            window.location.href = "index.html";
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        // ..
      });
};
