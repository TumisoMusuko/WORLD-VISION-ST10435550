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

// enquiry.js
// enquiry.js

const form = document.getElementById('enqForm');
const type = document.getElementById('type');
const productLabel = document.getElementById('productLabel');

// Show or hide the product dropdown depending on "service" type
type.addEventListener('change', () => {
  productLabel.style.display = type.value === 'service' ? 'block' : 'none';
});

// Pricing function
function priceFor(product) {
  return product === 'basic' ? 350 :
         product === 'pro' ? 700 :
         1200; // premium
}

// Handle form submission
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const fullname = document.getElementById('fullname').value.trim();
  const email = document.getElementById('email').value.trim();

  // Basic validation
  if (fullname.length < 2) return alert('Please enter your name');
  if (!/^\S+@\S+\.\S+$/.test(email)) return alert('Please enter a valid email');

  const enqType = type.value;
  const qty = Number(document.getElementById('qty').value) || 1;
  const result = document.getElementById('result');

  // SERVICE QUOTE
  if (enqType === 'service') {
    const product = document.getElementById('product').value;
    const unit = priceFor(product);
    const total = unit * qty;

    result.innerHTML = `
      <h2>Quote</h2>
      <p><strong>Package:</strong> ${product}</p>
      <p><strong>Quantity:</strong> ${qty}</p>
      <p><strong>Total Price:</strong> R${total.toFixed(2)}</p>
    `;
  } 
  
  // VOLUNTEER ENQUIRY
  else if (enqType === 'volunteer') {
    result.innerHTML = `
      <p>Thank you <strong>${fullname}</strong>.  
      We have volunteer slots available next month.  
      A confirmation email will be sent to <strong>${email}</strong>.</p>
    `;
  }

  // SPONSORSHIP ENQUIRY
  else if (enqType === 'sponsor') {
    result.innerHTML = `
      <p>Thank you for your interest in sponsoring a child.  
      A sponsorship information pack has been emailed to <strong>${email}</strong>.</p>
    `;
  }

  // NO OPTION SELECTED
  else {
    result.innerHTML = `
      <p>Please select an enquiry type.</p>
    `;
  }
});

// Duplicate listener removed — the logic above handles it.

// Show/hide product selection based on enquiry type
document.getElementById("type").addEventListener("change", function() {
  const productLabel = document.getElementById("productLabel");
  if (this.value === "service") {
    productLabel.style.display = "block";
  } else {
    productLabel.style.display = "none";
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
