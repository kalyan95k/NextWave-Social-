/* ==========================
   MOBILE MENU
========================== */

const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

/* ==========================
   EMAILJS SETUP
========================== */

/*
=============================================
REPLACE THESE VALUES WITH YOUR EMAILJS KEYS
=============================================

PUBLIC_KEY = "YOUR_PUBLIC_KEY"
SERVICE_ID = "YOUR_SERVICE_ID"
TEMPLATE_ID = "YOUR_TEMPLATE_ID"

=============================================
*/

emailjs.init("YOUR_PUBLIC_KEY");

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm(
    "YOUR_SERVICE_ID",
    "YOUR_TEMPLATE_ID",
    this
  )
  .then(() => {

    alert("✅ Message sent successfully!");

    contactForm.reset();

  })
  .catch((error) => {

    console.error(error);

    alert("❌ Failed to send message. Please try again.");

  });
});

/* ==========================
   SMOOTH LINK CLOSE MENU
========================== */

document.querySelectorAll(".nav-links a")
.forEach(link => {

  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });

});
