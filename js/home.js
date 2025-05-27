document.addEventListener('DOMContentLoaded', () => {
    // Sidebar toggle functionality
    const menuButton = document.querySelector('.menu-button');
    const sidebar = document.querySelector('#sidebar-header');
    
    if (menuButton && sidebar) {
        menuButton.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });
    }

    // Smooth scroll for navigation buttons
    const navButtons = document.querySelectorAll('.nav-button');

    if (navButtons.length) {
        navButtons.forEach((button) => {
            button.addEventListener('click', (event) => {
                event.preventDefault();
                const targetId = button.getAttribute('href')?.substring(1);
                const targetSection = document.getElementById(targetId);

                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                    });
                }
            });
        });
    }

    document.addEventListener('DOMContentLoaded', () => {
        // Smooth scroll for the Contact button
        const contactButton = document.querySelector('.nav-button[href="#contact"]');
    
        if (contactButton) {
            contactButton.addEventListener('click', (event) => {
                event.preventDefault();
                const contactSection = document.getElementById('contact');
    
                if (contactSection) {
                    contactSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                    });
                }
            });
        }
    
        // Form submission alert (for demonstration purposes)
        const contactForm = document.getElementById('contact-form');
    
        if (contactForm) {
            contactForm.addEventListener('submit', (event) => {
                event.preventDefault(); // Prevent default form submission
                alert('Thank you for reaching out! I will get back to you shortly.');
                contactForm.reset(); // Clear the form after submission
            });
        }
    });
    
    // Typing text effect
    const typingText = document.querySelector('.typing-text');

    if (typingText) {
        const textToType =
            "I'm an independent creative web developer and I like to design beautiful websites and other interactive frontend products. I also like to write and talk about web-dev products.";
        let index = 0;
        const typingSpeed = 100;

        function typeText() {
            if (index < textToType.length) {
                typingText.textContent += textToType.charAt(index);
                index++;
                setTimeout(typeText, typingSpeed);
            }
        }

        // Clear the text and start the animation
        typingText.textContent = '';
        typeText();
    }
});
