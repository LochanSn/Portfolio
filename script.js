document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for nav links
  document.querySelectorAll('nav a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if(target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Bootstrap form validation
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', e => {
    e.preventDefault();
    if (form.checkValidity()) {
      showAlert('Message sent successfully!', 'success');
      form.reset();
    } else {
      e.stopPropagation();
      form.classList.add('was-validated');
      showAlert('Please fill out all fields correctly.', 'danger');
    }
  });

  function showAlert(message, type) {
    const alertBox = document.getElementById('formAlert');
    alertBox.innerHTML = `<div class="alert alert-${type}" role="alert">${message}</div>`;
    setTimeout(() => { alertBox.innerHTML = ''; }, 4000);
  }
});
