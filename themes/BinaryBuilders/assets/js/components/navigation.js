export const initNavigation = () => {
  const menuButton = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (!menuButton || !mobileMenu) return;

  menuButton.addEventListener('click', () => {
    const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', !isExpanded);
    mobileMenu.classList.toggle('is-active');
    document.body.classList.toggle('menu-open');
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (mobileMenu.classList.contains('is-active') &&
        !mobileMenu.contains(e.target) &&
        !menuButton.contains(e.target)) {
      menuButton.setAttribute('aria-expanded', 'false');
      mobileMenu.classList.remove('is-active');
      document.body.classList.remove('menu-open');
    }
  });

  // Handle escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('is-active')) {
      menuButton.setAttribute('aria-expanded', 'false');
      mobileMenu.classList.remove('is-active');
      document.body.classList.remove('menu-open');
    }
  });
}; 