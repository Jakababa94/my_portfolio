// JavaScript for form validation and submission
document.querySelector('.contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validate form fields
    if (!name || !email || !subject || !message) {
        alert('Please fill in all fields.');
        return;
    }

    // Display success message
    alert('Thank you, ' + name + '! Your message has been sent successfully.');

    // Optionally, reset the form
    document.querySelector('.contact-form').reset();
});

// JavaScript for smooth scrolling to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dark mode toggle functionality
const darkModeCheckbox = document.getElementById('dark-mode-checkbox');
darkModeCheckbox.addEventListener('change', function() {
    document.body.classList.toggle('dark-mode', this.checked);
});

// Read More button functionality for projects
document.querySelectorAll('.read-more-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
        const extra = this.nextElementSibling;
        if (extra && extra.classList.contains('project-extra')) {
            const isVisible = extra.style.display === 'block';
            extra.style.display = isVisible ? 'none' : 'block';
            this.textContent = isVisible ? 'Read More' : 'Show Less';
        }
    });
});