// ... Firebase initialization ...

const form = document.getElementById('jobPostForm');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const jobTitle = document.getElementById('jobTitle').value;
  const company = document.getElementById('company').value;
  const jobInfo = document.getElementById('jobInfo').value;

  await db.collection('jobs').add({
    jobTitle: jobTitle,
    company: company,
    jobInfo: jobInfo,
    status: 'pending', // Initially pending approval
  });
  alert('Post submitted for approval!'); // Redirect or display confirmation
  // Clear form fields
});
