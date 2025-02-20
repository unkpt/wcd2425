// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Key

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
