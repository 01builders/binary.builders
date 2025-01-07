// Import components
import { initNavigation } from './components/navigation.js';
import { initSearch } from './components/search.js';
import { initNewsletter } from './components/newsletter.js';

// Site configuration from Hugo
const siteConfig = {
  features: {
    search: document.body.dataset.search === 'true',
    newsletter: document.body.dataset.newsletter === 'true'
  }
};

// Initialize components when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Core functionality
  initNavigation();
  
  // Optional features based on site config
  if (siteConfig.features.search) {
    initSearch();
  }
  
  if (siteConfig.features.newsletter) {
    initNewsletter();
  }
  
  // Add intersection observer for animations
  const animatedElements = document.querySelectorAll('[data-animate]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });
  
  animatedElements.forEach(el => observer.observe(el));
});
