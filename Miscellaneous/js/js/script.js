// ===========================
// READ MORE TOGGLE
// ===========================
function toggleReadMore() {
  const moreText = document.querySelector('.more-text');
  const btn = document.querySelector('.read-more-btn');

  if (!moreText || !btn) return;

  if (moreText.style.display === 'inline') {
    moreText.style.display = 'none';
    btn.textContent = 'Read More';
  } else {
    moreText.style.display = 'inline';
    btn.textContent = 'Read Less';
  }
}

// ===========================
// CONTACT FORM VALIDATION
// ===========================
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();

      if (!name || !email || !message) {
        alert('⚠️ Please fill in all fields before submitting.');
        return;
      }

      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!email.match(emailPattern)) {
        alert('❌ Please enter a valid email address.');
        return;
      }

      alert('✅ Thank you, ' + name + '! Your message has been submitted successfully.');
      form.reset();
    });
  }
});

// ===========================
// BACK TO TOP BUTTON
// ===========================
const backToTop = document.getElementById('backToTop');

if (backToTop) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTop.style.display = 'block';
    } else {
      backToTop.style.display = 'none';
    }
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
