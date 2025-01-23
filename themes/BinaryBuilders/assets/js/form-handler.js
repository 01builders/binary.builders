function validateForm(event) {
  const form = event.target;
  const submitButton = form.querySelector('button[type="submit"]');
  const buttonText = submitButton.querySelector('.button-text');
  const buttonLoader = submitButton.querySelector('.button-loader');
  const errorAlert = form.querySelector('.form-alert--error');
  
  // Disable button and show loading state
  submitButton.disabled = true;
  buttonText.style.display = 'none';
  buttonLoader.style.display = 'block';
  
  // Let FormSubmit handle the submission and redirect
  return true;
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', validateForm);
  }
}); 