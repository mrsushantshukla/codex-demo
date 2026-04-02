const form = document.getElementById('contactForm');

if (form) {
  form.addEventListener('submit', (event) => {
    const name = form.querySelector('input[name="name"]').value.trim();
    const email = form.querySelector('input[name="email"]').value.trim();
    const message = form.querySelector('textarea[name="message"]').value.trim();

    if (!name || !email || !message) {
      event.preventDefault();
      alert('Please fill all required fields before submitting.');
    }
  });
}
