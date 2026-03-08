const logoSlides = document.querySelectorAll('.slide');
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
    headerTop.style.maxHeight = '0';
    headerTop.style.pointerEvents = 'none';
  } else {
    logo.style.height = '87px';
    logo.style.width = '87px';
    headerTop.style.opacity = '1';
    headerTop.style.maxHeight = '44px';
    headerTop.style.pointerEvents = 'auto';
  }
});

const heroSlidesContainer = document.querySelector('.hero-slides');
const slides = document.querySelectorAll('.hero-slide');
const dotsContainer = document.querySelector('.hero-dots');
let currentSlide = 0;
let interval;

slides.forEach((_, i) => {
  const dot = document.createElement('div');
  dot.classList.add('hero-dot');
  if (i === 0) dot.classList.add('active');
  dot.addEventListener('click', () => goToSlide(i));
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.hero-dot');

function goToSlide(index) {
  dots[currentSlide].classList.remove('active');

  currentSlide = index;
  heroSlidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
  dots[currentSlide].classList.add('active');

  resetInterval();
}

function nextSlide() {
  const next = (currentSlide + 1) % slides.length;
  goToSlide(next);
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(nextSlide, 5000);
}

resetInterval();