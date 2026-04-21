/**
 * nav.js — Mobile menu toggle & scroll behaviour
 * VANTA Creative Studio
 */

const navToggle  = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');

// Toggle mobile menu
navToggle?.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

// Close menu when a link is clicked
mobileMenu?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// Shrink nav on scroll
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    nav.style.padding = '16px 48px';
  } else {
    nav.style.padding = '28px 48px';
  }
}, { passive: true });
