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

  querySnapshot.forEach((docSnap) => {
      const job = docSnap.data();
      const jobCard = document.createElement('div');
      jobCard.classList.add('card', 'backend', 'col-12', 'col-md-12', 'col-lg-4', 'p-3', 'mb-3', 'mt-3', 'mx-auto');

      jobCard.innerHTML = `
          <div class="card-body">
              <h5 class="card-title mx-auto fw-bolder">${job.company}</h5>
              <small class="fw-bold">${job.position}</small>
              <p class="card-text mt-2">${job.description}</p>
          </div>
      `;

      const divRow = document.createElement('div');
      divRow.classList.add('row');

      const divCol = document.createElement('div');
      divCol.classList.add('col-12', 'col-md-12', 'col-xxl-6', 'mt-4', 'text-center');

      const divCol2 = document.createElement('div');
      divCol2.classList.add('col-12', 'col-xxl-6', 'col-md-12', 'mt-4', 'text-center');
      
      const approveButton = document.createElement('button');
      approveButton.classList.add('btn', 'btn-success');
      approveButton.textContent = 'Approve';
      approveButton.addEventListener('click', () => approveJob(docSnap.id, job.company, job.position, job.description));

      const denyButton = document.createElement('button');
      denyButton.classList.add('btn', 'btn-danger');
      denyButton.textContent = 'Deny';
      denyButton.addEventListener('click', () => denyJob(docSnap.id));

      const cardBody = jobCard.querySelector('.card-body');
      cardBody.appendChild(approveButton);
      cardBody.appendChild(denyButton);

      container.appendChild(jobCard);
      divCol.appendChild(approveButton);
      divCol2.appendChild(denyButton);
      divRow.appendChild(divCol);
      divRow.appendChild(divCol2);
      cardBody.appendChild(divRow);
  });
}

async function approveJob(id, company, position, description) {
  const jobData = { company, position, description };
  await setDoc(doc(db, 'jobs', id), jobData);
  await deleteDoc(doc(db, 'pending_jobs', id));
  alert('Job approved!');
  loadPendingJobs();
};

async function denyJob(id) {
  await deleteDoc(doc(db, 'pending_jobs', id));
  alert('Job denied.');
  loadPendingJobs();
}

document.addEventListener('DOMContentLoaded', loadPendingJobs);
