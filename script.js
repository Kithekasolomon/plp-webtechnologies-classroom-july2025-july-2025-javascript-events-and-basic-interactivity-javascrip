// Part 1: Event Handling for Dark/Light Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    document.body.classList.toggle('dark-mode');
    themeToggle.textContent = document.body.classList.contains('dark-mode')
        ? 'Switch to Light Mode'
        : 'Switch to Dark Mode';
});

// Part 2: Collapsible FAQ Section
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        answer.classList.toggle('show');
    });
});

// Part 3: Form Validation
const form = document.getElementById('member-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const submitButton = document.getElementById('submit-button');
const successMessage = document.getElementById('success-message');

// Validation functions
function validateName(name) {
    return name.length >= 2;
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhone(phone) {
    const phoneRegex = /^\d{10,15}$/;
    return phoneRegex.test(phone);
}

// Real-time validation on input
nameInput.addEventListener('input', () => {
    const error = document.getElementById('name-error');
    error.classList.toggle('show', !validateName(nameInput.value));
    checkFormValidity();
});

emailInput.addEventListener('input', () => {
    const error = document.getElementById('email-error');
    error.classList.toggle('show', !validateEmail(emailInput.value));
    checkFormValidity();
});

phoneInput.addEventListener('input', () => {
    const error = document.getElementById('phone-error');
    error.classList.toggle('show', !validatePhone(phoneInput.value));
    checkFormValidity();
});

// Enable/disable submit button based on form validity
function checkFormValidity() {
    const isValid = validateName(nameInput.value) &&
                    validateEmail(emailInput.value) &&
                    validatePhone(phoneInput.value);
    submitButton.disabled = !isValid;
}

// Form submission handling
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateName(nameInput.value) &&
        validateEmail(emailInput.value) &&
        validatePhone(phoneInput.value)) {
        successMessage.classList.add('show');
        form.reset();
        submitButton.disabled = true;
        setTimeout(() => {
            successMessage.classList.remove('show');
        }, 3000);
    }
});
