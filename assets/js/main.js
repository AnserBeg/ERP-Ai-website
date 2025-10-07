const navToggle = document.querySelector('[data-nav-toggle]');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
  });
}

const currentPath = window.location.pathname.split('/').pop() || 'index.html';

if (navLinks) {
  const anchors = navLinks.querySelectorAll('a');
  anchors.forEach((anchor) => {
    const href = anchor.getAttribute('href');
    if (href === currentPath || (currentPath === 'index.html' && href === './')) {
      anchor.classList.add('active');
    }
  });
}
