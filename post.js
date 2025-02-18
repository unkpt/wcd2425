
const form = document.getElementById('jobPostForm');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const jobTitle = document.getElementById('jobTitle').value;
  const company = document.getElementById('company').value;
  const jobInfo = document.getElementById('jobInfo').value;
  const firstName = document.getElementById('fname').value;
  const lastName = document.getElementById('lname').value;
  const birth = document.getElementById('birth').value;
  const telInput = document.getElementById('telInput').value;
  const userEmail = document.getElementById('emailInput').value;
  document.getElementById("adminDiv").innerHTML = '<p>'+ company + ': '  + jobTitle + ' job card<p><button class="btn submit-button" id="approveButton" type="button">Approve</button><button class="btn submit-button" type="button">Reject</button>';
  await db.collection('jobs').add({
    jobTitle: jobTitle,
    company: company,
    jobInfo: jobInfo,
    status: 'pending', // Initially pending approval
  });
  alert('Post submitted for approval!'); // Redirect or display confirmation
  // Clear form fields
  jobTitle.reset();
  company.reset();
  jobInfo.reset();
  firstName.reset();
  lastName.reset();
  birth.reset();
  telInput.reset();
  userEmail.reset();
});
