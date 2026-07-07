const hamburger = document.getElementById('hamburger');
const drawer = document.getElementById('drawer');
const scrim = document.getElementById('scrim');

function toggleDrawer(open) {
  hamburger.classList.toggle('is-open', open);
  drawer.classList.toggle('is-open', open);
  scrim.classList.toggle('is-open', open);
}

hamburger.addEventListener('click', () => {
  toggleDrawer(!drawer.classList.contains('is-open'));
});

scrim.addEventListener('click', () => toggleDrawer(false));

document.querySelectorAll('.drawer__link').forEach((link) => {
  link.addEventListener('click', () => toggleDrawer(false));
});

// service carousel dots
const serviceScroll = document.querySelector('.service-scroll');
const dotsWrap = document.getElementById('serviceDots');
const cards = document.querySelectorAll('.service-card');

cards.forEach((_, i) => {
  const dot = document.createElement('span');
  if (i === 0) dot.classList.add('is-active');
  dotsWrap.appendChild(dot);
});

const dots = dotsWrap.querySelectorAll('span');

serviceScroll.addEventListener('scroll', () => {
  const index = Math.round(serviceScroll.scrollLeft / (cards[0].offsetWidth + 12));
  dots.forEach((d, i) => d.classList.toggle('is-active', i === index));
});
