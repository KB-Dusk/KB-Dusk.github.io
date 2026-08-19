// --- NAVBAR SCROLL EFFECT ---
// changes the navbar appearance when you scroll down
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.borderBottomColor = 'rgba(241, 7, 163, 0.3)';
    } else {
        navbar.style.borderBottomColor = 'rgba(123, 47, 247, 0.2)';
    }
});

// --- SMOOTH ACTIVE NAV LINK ---
// highlights the nav link for the section you're currently viewing
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.style.color = '#a0a0b0';
        if (link.getAttribute('href') === `#${current}`) {
            link.style.color = '#f107a3';
        }
    });
});

// --- FADE IN ON SCROLL ---
// makes sections fade in as you scroll down to them
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.skill-card, .project-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});

// --- TYPING EFFECT ---
// types out the hero greeting text like a terminal
const greetingEl = document.querySelector('.hero-greeting');
const greetingText = '// hello world';
greetingEl.textContent = '';

let i = 0;
function typeGreeting() {
    if (i < greetingText.length) {
        greetingEl.textContent += greetingText[i];
        i++;
        setTimeout(typeGreeting, 80);
    }
}

typeGreeting();

// add visible class styles
const style = document.createElement('style');
style.textContent = `
    .visible {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);