function validateForm(event) {
    event.preventDefault();

    // Get form elements
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const emailConfirm = document.getElementById('emailConfirm').value.trim();
    const question = document.getElementById('question').value.trim();

    // Validate name fields
    if (firstName.length < 2) {
        alert('Please enter a valid first name (minimum 2 characters)');
        return false;
    }

    if (lastName.length < 2) {
        alert('Please enter a valid last name (minimum 2 characters)');
        return false;
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address');
        return false;
    }

    // Check if emails match
    if (email !== emailConfirm) {
        alert('Email addresses do not match! Please check and try again.');
        return false;
    }

    // Validate question content
    if (question.length < 10) {
        alert('Please enter a question with at least 10 characters');
        return false;
    }

    // If all validations pass, show success message
    alert('Thank you for your submission! We will get back to you soon.');

    // Clear form
    document.getElementById('contactForm').reset();

    return false; // Prevent actual form submission since this is a demo
}