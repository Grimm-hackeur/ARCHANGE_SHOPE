// Navigation active
function setActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

// Effet de parallaxe
function initParallax() {
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
}

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    setActiveNav();
    initParallax();
    
    // Animation fade-in
    setTimeout(() => {
        document.querySelectorAll('.fade-in').forEach(el => {
            el.style.animation = 'fadeIn 0.6s ease-out';
        });
    }, 100);
});