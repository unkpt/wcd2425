
document.getElementById("approveButton").onclick = db.collection('jobs').where('status', '==', 'approved').onSnapshot((querySnapshot) => {
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
  function createJobCard(jobTitle, company, jobInfo, jobId) {
    // ...Create and return the div card element here...  
    jobCardsContainer.innerHTML = '<h5 class="card-title pt-2">' + company + ": " +  jobTitle + '</h5> <p class="card-text mt-2">' + jobInfo + '</p> <a href="application.html" type="button" class="btn job-button">Apply Now</a> </div>'
    // Add an apply button with an onclick that sends the jobId to the apply page
  }
  
