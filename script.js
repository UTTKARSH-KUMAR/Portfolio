"use strict"
const form = document.getElementById('contact-form');
const errorMessage = document.getElementById('error-message');

form.addEventListener("submit", function (e) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        errorMessage.textContent = "All fields are required!";
        e.preventDefault();
    } else if (!validateEmail(email)) {
        errorMessage.textContent = "Please enter a valid email address!";
        e.preventDefault();
    }
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return re.test(email);
}
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
function toggleCheckbox() {
    const checkbox = document.getElementById("check");
    checkbox.checked = !checkbox.checked;
}
const btn = document.getElementById('button');

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    btn.value = 'Sending...'; // Change the button text

    const serviceID = 'service_9ih2g11'; // Replace with your actual service ID
    const templateID = 'template_76lhybq'; // Replace with your actual template ID

    // Create the params object based on the form inputs
    const params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    // Send the email using emailjs
    emailjs.send(serviceID, templateID, params)
        .then(() => {
            btn.value = 'Send Message'; // Reset the button text
            alert('Email Sent Successfully!'); // Show success message
            document.getElementById('contact-form').reset(); // Reset the form fields
        })
        .catch((err) => {
            btn.value = 'Send Message'; // Reset the button text
            alert('Failed to send email. Please try again.'); // Show error message
            console.error('Error:', err); // Log the error
        });
});
