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

setInterval(() => {
  document.getElementById("realtime").textContent =
    "Last updated: " + new Date().toLocaleTimeString();
}, 2000);

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
document.getElementById("inquiry-form").addEventListener("submit", e => {
  e.preventDefault();
  alert("Inquiry sent successfully!");
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

// ===========================
// TAB FUNCTIONALITY
// ===========================

document.addEventListener('DOMContentLoaded', () => {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const tabId = button.dataset.tab;

      // Remove active state from all buttons and contents
      tabButtons.forEach((btn) => btn.classList.remove('active'));
      tabContents.forEach((content) => content.classList.remove('active'));

      // Activate the selected tab and content
      button.classList.add('active');
      document.getElementById(tabId).classList.add('active');
    });
  });
});


function updateDateTime() {
    const now = new Date();
    const dateTimeString = now.toLocaleString("en-ZA", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });

    document.getElementById("currentDateTime").textContent =
        "Current Date & Time: " + dateTimeString;
}

// Update every second
setInterval(updateDateTime, 1000);

// Run immediately on page load
updateDateTime();
