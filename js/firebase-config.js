// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyDUzpKF4aEklFIz7hXRdLj4WZ3ZxhL8Jm8",
    authDomain: "wc2425-443a5.firebaseapp.com",
    projectId: "wc2425-443a5",
    storageBucket: "wc2425-443a5.firebasestorage.app",
    messagingSenderId: "265369553908",
    appId: "1:265369553908:web:2d4916fc0520ff9e16c7a1",
    measurementId: "G-0ZB4681FN4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

var contactFormDB = firebaseConfig.database().ref("jobForm");

document.getElementById("jobForm").addEventListener("submit", submitForm);

function sumbitForm(e) {
    e.preventDefault();

    var company = getElementVal("company");
    var jobTitle = getElementVal("jobTitle");
    var jobInfo = getElementVal("jobInfo");

    saveMessages(company, jobTitle, jobInfo);
}

const saveMessages = (company, jobTitle, jobInfo) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        company: company,
        jobTitle: jobTitle,
        jobInfo: jobInfo,
    });


}

const getElementVal= (id) => {
    return document.getElementById(id).value;
}
