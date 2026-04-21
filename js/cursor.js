/**
 * cursor.js — Custom animated cursor
 * VANTA Creative Studio
 */

const cursor    = document.getElementById('cursor');
const cursorRing = document.getElementById('cursorRing');

let mouseX = 0, mouseY = 0;
let ringX  = 0, ringY  = 0;

// Track mouse position
document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  // Snap the dot instantly
  cursor.style.left = mouseX + 'px';
  cursor.style.top  = mouseY + 'px';
});

// Lag-follow animation for the ring
function animateRing() {
  ringX += (mouseX - ringX) * 0.12;
  ringY += (mouseY - ringY) * 0.12;

  cursorRing.style.left = ringX + 'px';
  cursorRing.style.top  = ringY + 'px';

  requestAnimationFrame(animateRing);
}
animateRing();

// Scale up on interactive elements
document.querySelectorAll('a, button, .work-card').forEach((el) => {
  el.addEventListener('mouseenter', () => {
    cursor.style.transform    = 'translate(-50%, -50%) scale(2.5)';
    cursorRing.style.width    = '60px';
    cursorRing.style.height   = '60px';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.transform    = 'translate(-50%, -50%) scale(1)';
    cursorRing.style.width    = '36px';
    cursorRing.style.height   = '36px';
  });
});
