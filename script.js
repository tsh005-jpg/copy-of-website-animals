const slides = document.querySelectorAll('.slide');
let current = 0;

setInterval(() => {
  slides[current].classList.remove('active');
  current = (current + 1) % slides.length;
  slides[current].classList.add('active');
}, 3000);

const headerTop = document.querySelector('.header-top');
const headerBottom = document.querySelector('.header-bottom');
const logo = document.querySelector('.header-bottom_section_item_slide');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    logo.style.height = '65px';
    logo.style.width = '65px';
    headerTop.style.opacity = '0';
    headerTop.style.height = '0';
    headerTop.style.pointerEvents = 'none';
  } else {
    logo.style.height = '87px';
    logo.style.width = '87px';
    headerTop.style.opacity = '1';
    headerTop.style.height = '44px';
    headerTop.style.pointerEvents = 'auto';
  }
});