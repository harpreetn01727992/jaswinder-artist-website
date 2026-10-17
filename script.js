document.querySelectorAll('.year').forEach(el => el.textContent = new Date().getFullYear());

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
  });
}

const bookingForm = document.querySelector('#booking-form');
if (bookingForm) {
  bookingForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const message = document.querySelector('#form-message');
    message.textContent = 'Thank you! This is a demo only, so your request has not been sent. Please connect a form service before publishing.';
    bookingForm.reset();
  });
}
