export const initNewsletter = () => {
  const form = document.getElementById('newsletter-form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitButton = form.querySelector('button[type="submit"]');
    const email = form.querySelector('input[type="email"]').value;
    const statusMessage = form.querySelector('.newsletter-status');
    
    if (!statusMessage) return;
    
    // Basic email validation
    if (!email || !email.includes('@')) {
      statusMessage.innerHTML = 'Please enter a valid email address';
      statusMessage.classList.add('error');
      return;
    }

    try {
      submitButton.disabled = true;
      statusMessage.innerHTML = 'Subscribing...';
      statusMessage.classList.remove('error', 'success');

      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        statusMessage.innerHTML = 'Thank you for subscribing!';
        statusMessage.classList.add('success');
        form.reset();
      } else {
        throw new Error(data.message || 'Subscription failed');
      }
    } catch (error) {
      statusMessage.innerHTML = error.message || 'An error occurred. Please try again.';
      statusMessage.classList.add('error');
    } finally {
      submitButton.disabled = false;
    }
  });
}; 