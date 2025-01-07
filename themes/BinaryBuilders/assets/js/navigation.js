document.addEventListener('DOMContentLoaded', () => {
  const dropdowns = document.querySelectorAll('.dropdown');
  
  dropdowns.forEach(dropdown => {
    const items = dropdown.querySelectorAll('.dropdown-item.has-submenu');
    const submenus = dropdown.querySelectorAll('.submenu');
    const dropdownRight = dropdown.querySelector('.dropdown-right');
    
    // Show first submenu by default if exists
    if (items.length > 0 && submenus.length > 0) {
      const firstSubmenu = submenus[0];
      firstSubmenu.style.display = 'block';
    }
    
    // Handle submenu switching on hover
    items.forEach(item => {
      item.addEventListener('mouseenter', () => {
        const submenuId = item.dataset.submenu;
        if (!submenuId) return;
        
        // Hide all submenus
        submenus.forEach(submenu => {
          submenu.style.display = 'none';
        });
        
        // Show the targeted submenu
        const targetSubmenu = dropdown.querySelector(`#${submenuId}`);
        if (targetSubmenu) {
          targetSubmenu.style.display = 'block';
        }
      });
    });
  });
  
  // Handle mobile menu
  const mobileBreakpoint = 768;
  
  function handleMobileMenu() {
    if (window.innerWidth <= mobileBreakpoint) {
      dropdowns.forEach(dropdown => {
        const trigger = dropdown.querySelector('.dropdown-trigger');
        const content = dropdown.querySelector('.dropdown-content');
        
        trigger.addEventListener('click', (e) => {
          e.preventDefault();
          
          const isOpen = content.style.visibility === 'visible';
          
          // Close all other dropdowns
          dropdowns.forEach(d => {
            if (d !== dropdown) {
              const c = d.querySelector('.dropdown-content');
              c.style.opacity = '0';
              c.style.visibility = 'hidden';
            }
          });
          
          // Toggle current dropdown
          content.style.opacity = isOpen ? '0' : '1';
          content.style.visibility = isOpen ? 'hidden' : 'visible';
        });
      });
    }
  }
  
  // Initialize mobile menu
  handleMobileMenu();
  
  // Update on window resize
  window.addEventListener('resize', handleMobileMenu);
}); 