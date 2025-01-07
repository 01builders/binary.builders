function validateForm(event) {
  const form = event.target;
  const submitButton = form.querySelector('button[type="submit"]');
  const buttonText = submitButton.querySelector('.button-text');
  const buttonLoader = submitButton.querySelector('.button-loader');
  
  // Disable button and show loading state
  submitButton.disabled = true;
  buttonText.style.display = 'none';
  buttonLoader.style.display = 'block';
  
  // Re-enable button after a short delay (FormSubmit will handle the redirect)
  setTimeout(() => {
    submitButton.disabled = false;
    buttonText.style.display = 'block';
    buttonLoader.style.display = 'none';
  }, 2000);
  
  // Form will submit naturally to FormSubmit
  return true;
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', validateForm);
  }
}); 