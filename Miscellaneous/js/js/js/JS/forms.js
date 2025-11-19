/* ================================
   COMBINED CONTACT + ENQUIRY JS
   ================================ */

// -------------------------------
// 1. EmailJS Initialization
// -------------------------------
emailjs.init("YOUR_PUBLIC_KEY"); // <-- Replace with your EmailJS Public Key


/* ================================
   2. CONTACT FORM HANDLING
   ================================ */

const contactForm = document.getElementById("contactForm");
const modal = document.getElementById("successModal");
const closeModal = document.getElementById("closeModal");

// SA phone number validation
function isValidPhone(num) {
  return /^0\d{9}$/.test(num);
}

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validations
    if (fullname.length < 2) return alert("Please enter your full name.");
    if (!/^\S+@\S+\.\S+$/.test(email)) return alert("Invalid email address.");
    if (!isValidPhone(phone)) return alert("Enter valid SA phone (10 digits).");
    if (message.length < 5) return alert("Message too short.");

    const params = { fullname, email, phone, message };

    // Send contact form email
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", params)
      .then(() => {
        modal.style.display = "flex"; // Show success popup
        contactForm.reset();
      })
      .catch((err) => {
        console.error(err);
        alert("Message could not be sent. Try again later.");
      });
  });

  closeModal.addEventListener("click", () => (modal.style.display = "none"));
  window.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });
}


/* ================================
   3. ENQUIRY FORM HANDLING
   ================================ */

const enqForm = document.getElementById("enqForm");

if (enqForm) {
  const type = document.getElementById("type");
  const productLabel = document.getElementById("productLabel");

  // Show/hide package options
  type.addEventListener("change", () => {
    productLabel.style.display = type.value === "service" ? "block" : "none";
  });

  // Price calculator
  function priceFor(product) {
    return product === "basic" ? 350 :
           product === "pro" ? 700 :
           1200;
  }

  enqForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();

    // Validations
    if (fullname.length < 2) return alert("Please enter your name");
    if (!/^\S+@\S+\.\S+$/.test(email)) return alert("Please enter a valid email");

    const enqType = type.value;
    const qty = Number(document.getElementById("qty").value) || 1;
    const result = document.getElementById("result");

    if (enqType === "service") {
      const product = document.getElementById("product").value;
      const unit = priceFor(product);
      const total = unit * qty;

      result.innerHTML = `
        <h2>Quote Summary</h2>
        <p><strong>Package:</strong> ${product}</p>
        <p><strong>Quantity:</strong> ${qty}</p>
        <p><strong>Total:</strong> R${total.toFixed(2)}</p>
      `;
    }

    else if (enqType === "volunteer") {
      result.innerHTML = `
        <p>Thank you, <strong>${fullname}</strong>.<br>
        Volunteer positions will be emailed to <strong>${email}</strong> soon.</p>
      `;
    }

    else if (enqType === "sponsor") {
      result.innerHTML = `
        <p>Thank you for your interest in sponsorship.<br>
        A sponsorship pack has been sent to <strong>${email}</strong>.</p>
      `;
    }

    else {
      result.innerHTML = `<p>Please select your enquiry type.</p>`;
    }
  });
}
