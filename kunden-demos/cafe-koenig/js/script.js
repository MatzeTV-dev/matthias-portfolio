// Mobile Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Contact Form Handling with mailto
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone') || 'Nicht angegeben';
        const message = formData.get('message');
        const privacy = formData.get('privacy');

        if (!privacy) {
            alert('Bitte akzeptieren Sie die Datenschutzerklärung.');
            return;
        }

        // Create mailto link with all form data
        const recipient = 'willkommen@cafe-koenig.at';
        const subject = encodeURIComponent(`Kontaktanfrage von ${name}`);
        const body = encodeURIComponent(
            `Name: ${name}\r\n\r\n` +
            `E-Mail: ${email}\r\n\r\n` +
            `Telefon: ${phone}\r\n\r\n` +
            `Nachricht:\r\n${message}\r\n\r\n` +
            `---\r\n` +
            `Diese Nachricht wurde über das Kontaktformular auf cafe-koenig.at gesendet.`
        );

        // Open default mail client with pre-filled data
        window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;

        // Reset form after opening mail client
        setTimeout(() => {
            contactForm.reset();
        }, 500);
    });
}

// Add scroll effect to navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    }
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all section elements
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Animate cards on scroll
const cards = document.querySelectorAll('.kaffee-card, .gallery-item, .info-card');
cards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;

    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    cardObserver.observe(card);
});

// Add hover effect to gallery items
const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        // In a real implementation, this would open a lightbox
        console.log('Gallery item clicked');
    });
});

console.log('Cafe König Website loaded successfully! ☕');
