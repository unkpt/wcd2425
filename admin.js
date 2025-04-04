// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";
import { getFirestore, doc, setDoc, deleteDoc, collection, getDocs } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-firestore.js";
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

async function loadPendingJobs() {
  const querySnapshot = await getDocs(collection(db, 'pending_jobs'));
  const container = document.getElementById('adminJobList');
  container.innerHTML = '';

  querySnapshot.forEach((docSnap) => {
      const job = docSnap.data();
      const jobCard = document.createElement('div');
      jobCard.classList.add('card', 'p-3', 'mb-3');

      jobCard.innerHTML = `
          <div class="card-body">
              <h5 class="card-title mx-auto">${job.company}: ${job.jobTitle}</h5>
              <p class="card-text">${job.jobInfo}</p>
              <button class="btn btn-success" onclick="approveJob('${docSnap.id}', '${job.company}', '${job.jobTitle}', '${job.jobInfo}')">Approve</button>
          </div>
      `;

      container.appendChild(jobCard);
  });
}

async function approveJob(id, company, jobTitle, jobInfo) {
  const jobData = { company, jobTitle, jobInfo };
  await setDoc(doc(db, 'jobs', id), jobData);
  await deleteDoc(doc(db, 'pending_jobs', id));
  alert('Job approved!');
  loadPendingJobs();
}

document.addEventListener('DOMContentLoaded', loadPendingJobs);
