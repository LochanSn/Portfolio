document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for navigation links
  document.querySelectorAll('nav a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetID = this.getAttribute('href').substring(1);
      document.getElementById(targetID).scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Simple form validation
  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    const email = form.querySelector('input[type="email"]').value;
    const name = form.querySelector('input[type="text"]').value;
    const message = form.querySelector('textarea').value;
    if (!email || !name || !message) {
      e.preventDefault();
      alert('Please fill out all fields before submitting.');
    }
  });
});
