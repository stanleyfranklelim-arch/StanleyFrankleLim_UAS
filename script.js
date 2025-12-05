// Memastikan DOM siap
document.addEventListener('DOMContentLoaded', () => {
    // --- Burger Menu Functionality ---
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    const toggleMenu = () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');
        // Burger Animation
        burger.classList.toggle('toggle');
    }

    burger.addEventListener('click', toggleMenu);

    // Close menu when a link is clicked (for mobile UX)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('nav-active')) {
                toggleMenu();
            }
        });
    });

    // --- Modal/Popup Functionality ---
    const successModal = document.getElementById('successModal');
    const projectModal = document.getElementById('projectModal');
    const contactForm = document.getElementById('contactForm');
    const viewButtons = document.querySelectorAll('.view-btn');
    const closeButtons = document.querySelectorAll('.close-button, .close-btn-main');

    const openModal = (modalElement) => {
        modalElement.style.display = 'flex';
    }

    const closeModal = (modalElement) => {
        modalElement.style.display = 'none';
    }

    // 1. Contact Form Submission
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Memunculkan Modal Sukses
        openModal(successModal);
        contactForm.reset();
    });

    // 2. Project Details Popup
    viewButtons.forEach(button => {
        button.addEventListener('click', () => {
            const title = button.getAttribute('data-title');
            const description = button.getAttribute('data-desc');
            
            document.getElementById('projectTitle').innerText = title;
            document.getElementById('projectDescription').innerText = description;

            openModal(projectModal);
        });
    });

    // 3. Close Modals (via X or OK button)
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            closeModal(successModal);
            closeModal(projectModal);
        });
    });

    // 4. Close Modals (via clicking outside)
    window.addEventListener('click', (event) => {
        if (event.target === successModal) {
            closeModal(successModal);
        }
        if (event.target === projectModal) {
            closeModal(projectModal);
        }
    });
});