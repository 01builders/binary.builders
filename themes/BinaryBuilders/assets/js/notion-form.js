async function submitToNotion(event) {
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
  
  try {
    submitButton.disabled = true;
    buttonText.style.display = 'none';
    buttonLoader.style.display = 'block';

    const formData = {
      firstName: form.firstName.value,
      companyEmail: form.companyEmail.value,
      topics: form.topics.value
    };

    const response = await fetch('/api/submit-to-notion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });

    if (!response.ok) {
      throw new Error('Failed to submit form');
    }

    // Show success message
    form.reset();
    successAlert.style.display = 'flex';
    buttonLoader.style.display = 'none';
    buttonText.style.display = 'block';
    buttonText.textContent = 'Submit';
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      successAlert.style.display = 'none';
    }, 5000);

  } catch (error) {
    console.error('Error:', error);
    errorAlert.style.display = 'flex';
    buttonLoader.style.display = 'none';
    buttonText.style.display = 'block';
    buttonText.textContent = 'Submit';
    
    // Hide error message after 5 seconds
    setTimeout(() => {
      errorAlert.style.display = 'none';
    }, 5000);
  } finally {
    submitButton.disabled = false;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', submitToNotion);
  }
}); 