// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-firestore.js";
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

async function loadApprovedJobs() {
    const querySnapshot = await getDocs(collection(db, 'jobs'));
    const container = document.getElementById('listing');
    container.innerHTML = '';

    const row = document.createElement('div');
    row.classList.add('row', 'gx-3', 'gy-3');

    querySnapshot.forEach((docSnap) => {
        const job = docSnap.data();
        const listing = document.createElement('div');
        listing.classList.add('card', 'col-12', 'col-xxl-4', 'col-md-12', 'mt-2', 'p-2');
        //Fix so they all have a unique id to grab the job title listing.id = job.position;
        listing.innerHTML = `<div class="card-body"><h5 class="card-title fw-bolder">${job.company} </h5><small class="fw-bold mb-4">${job.position}</small><p class="card-text">${job.description}</p><a href="application.html" class="btn job-button">Apply Now</a></div>`;
        container.appendChild(listing);
    });
}

document.addEventListener('DOMContentLoaded', loadApprovedJobs);
