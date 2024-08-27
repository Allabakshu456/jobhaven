document.addEventListener('DOMContentLoaded', () => {
    // Example: Handle newsletter form submission
    document.getElementById('newsletter-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for subscribing to our newsletter!');
    });
});
