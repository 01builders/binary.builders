async function handleFormSubmit(event) {
  event.preventDefault();
  
  const form = event.target;
  const submitButton = form.querySelector('button[type="submit"]');
  const buttonText = submitButton.querySelector('.button-text');
  const buttonLoader = submitButton.querySelector('.button-loader');
  const successAlert = form.querySelector('.form-alert--success');
  const errorAlert = form.querySelector('.form-alert--error');
  
  // Hide any existing alerts
  successAlert.style.display = 'none';
  errorAlert.style.display = 'none';
  
  // Disable button and show loading state
  submitButton.disabled = true;
  buttonText.style.display = 'none';
  buttonLoader.style.display = 'block';
  
  try {
    const formData = new FormData(form);
    const response = await fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });
    
    const data = await response.json();
    
    if (response.ok && data.success) {
      // Redirect to success page
      window.location.href = '/success';
    } else {
      throw new Error(data.message || 'Form submission failed');
    }
  } catch (error) {
    console.error('Form submission error:', error);
    errorAlert.style.display = 'flex';
    errorAlert.querySelector('span').textContent = error.message || 'There was an error sending your message. Please try again.';
    
    // Reset button state
    submitButton.disabled = false;
    buttonText.style.display = 'block';
    buttonLoader.style.display = 'none';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', handleFormSubmit);
  }
}); 