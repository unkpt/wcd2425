// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";
import { getFirestore, Timestamp, doc, setDoc } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-firestore.js";

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

const submit = document.getElementById("jobPostForm");

// Input field values

submit.onsubmit = async function(event) {

    event.preventDefault();

    const company = document.getElementById("company").value;
    const position = document.getElementById("jobTitle").value;
    const description = document.getElementById("jobInfo").value;

    try {
        await setDoc(doc(db, "pending_jobs", position), {
            company: company,
            position: position,
            description: description,
            madeAt: Timestamp.fromDate(new Date()),
            approved: false,
        });
        alert("Your post has been submitted for review. Once approved, it will be posted.")
        window.location.href = "jobs.html";
    }
    catch (error) {
        const errorMessage = error.message;
        alert(errorMessage);
    }
};

