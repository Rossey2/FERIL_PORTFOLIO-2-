document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
  const line1 = document.getElementById('line1');
  const line2 = document.getElementById('line2');
  const line3 = document.getElementById('line3');

  if (!menuBtn || !mobileMenu || !mobileMenuOverlay) {
    console.error('Menu elements not found');
    return;
  }

  let isMenuOpen = false;

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    
    if (isMenuOpen) {
      // Open menu
      mobileMenu.classList.remove('hidden');
      mobileMenuOverlay.classList.remove('hidden');
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
      
      // Animate hamburger to X
      if (line1 && line2 && line3) {
        line1.style.transform = 'rotate(45deg) translate(5px, 5px)';
        line2.style.opacity = '0';
        line3.style.transform = 'rotate(-45deg) translate(7px, -6px)';
      }
    } else {
      // Close menu
      mobileMenu.classList.add('hidden');
      mobileMenuOverlay.classList.add('hidden');
      document.body.style.overflow = ''; // Restore scrolling
      
      // Reset hamburger icon
      if (line1 && line2 && line3) {
        line1.style.transform = '';
        line2.style.opacity = '1';
        line3.style.transform = '';
      }
    }
  }

  menuBtn.addEventListener('click', toggleMenu);
  mobileMenuOverlay.addEventListener('click', toggleMenu);

  // Close menu when clicking on a link
  const mobileLinks = mobileMenu.querySelectorAll('a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (isMenuOpen) {
        toggleMenu();
      }
    });
  });
});


