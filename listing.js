// ... Firebase initialization ...

db.collection('jobs').where('status', '==', 'approved').onSnapshot((querySnapshot) => {
    const jobCardsContainer = document.getElementById('jobCards');
    jobCardsContainer.innerHTML = ''; // Clear existing cards
  
    querySnapshot.forEach((doc) => {
      const jobData = doc.data();
      // Create a card element with jobData
      const card = createJobCard(jobData.jobTitle, jobData.company, jobData.jobInfo, doc.id);
      jobCardsContainer.appendChild(card);
    });
  });
  
  //Helper function to create job cards (you'll need to implement the HTML structure)
  function createJobCard(title, company, info, jobId) {
    // ...Create and return the div card element here...  
    // Add an apply button with an onclick that sends the jobId to the apply page
  }
  
  