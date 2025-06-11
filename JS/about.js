// Crear partículas flotantes
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.width = Math.random() * 8 + 3 + 'px';
        particle.style.height = particle.style.width;
        particle.style.animationDelay = Math.random() * 6 + 's';
        particlesContainer.appendChild(particle);
    }
}

// Animación de contador para estadísticas
function animateCounter(element, target, suffix = '') {
    let current = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current) + suffix;
    }, 20);
}

// Observer para animar contadores cuando entran en vista
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target.querySelector('.stat-number');
            const text = statNumber.textContent;

            if (text.includes('K+')) {
                animateCounter(statNumber, 50, 'K+');
            } else if (text.includes('+')) {
                animateCounter(statNumber, 500, '+');
            } else if (text.includes('%')) {
                animateCounter(statNumber, 99.9, '%');
            } else if (text.includes('24/7')) {
                statNumber.textContent = '24/7';
            }

            observer.unobserve(entry.target);
        }
    });
});

// Observar tarjetas de estadísticas
document.querySelectorAll('.stat-card').forEach(card => {
    observer.observe(card);
});

// Efecto parallax suave
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.floating-emoji');

    parallaxElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.2);
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Animación de entrada para las cartas
const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
});

document.querySelectorAll('.value-card, .team-member').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease';
    animateOnScroll.observe(card);
});

// Inicializar
createParticles();

// Efecto hover para miembros del equipo
document.querySelectorAll('.team-member').forEach(member => {
    member.addEventListener('mouseenter', function () {
        this.style.background = 'linear-gradient(135deg, rgba(79, 172, 254, 0.2), rgba(0, 242, 254, 0.2))';
    });

    member.addEventListener('mouseleave', function () {
        this.style.background = 'rgba(255, 255, 255, 0.1)';
    });
});