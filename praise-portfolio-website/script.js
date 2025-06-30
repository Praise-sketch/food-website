const submitBtn = document.getElementById('submit-btn');

// Function to show loading animation
function showLoadingAnimation() {
  submitBtn.classList.add('loading');
  submitBtn.innerHTML = 'Loading...';
}

// Function to hide loading animation
function hideLoadingAnimation() {
  submitBtn.classList.remove('loading');
  submitBtn.innerHTML = 'Submit';
}

// Example usage:
submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  showLoadingAnimation();
  // Simulate some work being done
  setTimeout(() => {
    hideLoadingAnimation();
  }, 2000);
});