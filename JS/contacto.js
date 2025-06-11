
// Crear partículas flotantes
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        const size = Math.random() * 6 + 2;
        const left = Math.random() * 100;
        const delay = Math.random() * 6;

        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = left + '%';
        particle.style.animationDelay = delay + 's';
        particle.style.top = Math.random() * 100 + '%';

        particlesContainer.appendChild(particle);
    }
}

// Manejar el formulario de contacto
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const submitBtn = document.getElementById('submitBtn');
    const btnText = document.getElementById('btnText');
    const loading = document.getElementById('loading');
    const successMessage = document.getElementById('successMessage');

    // Mostrar loading
    btnText.style.display = 'none';
    loading.style.display = 'block';
    submitBtn.disabled = true;

    // Simular envío (en una aplicación real, aquí enviarías los datos al servidor)
    setTimeout(() => {
        // Ocultar loading
        btnText.style.display = 'inline';
        loading.style.display = 'none';
        submitBtn.disabled = false;

        // Mostrar mensaje de éxito
        successMessage.style.display = 'block';

        // Limpiar formulario
        this.reset();

        // Ocultar mensaje después de 5 segundos
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 5000);

        // Scroll suave al mensaje
        successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 2000);
});

// Toggle FAQ
function toggleFaq(element) {
    const faqItem = element.parentNode;
    const isActive = faqItem.classList.contains('active');

    // Cerrar todos los FAQs
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });

    // Abrir el clickeado si no estaba activo
    if (!isActive) {
        faqItem.classList.add('active');
    }
}

// Efectos de hover para las tarjetas sociales
document.querySelectorAll('.social-card').forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.background = 'linear-gradient(135deg, rgba(79, 172, 254, 0.2) 0%, rgba(0, 242, 254, 0.2) 100%)';
    });

    card.addEventListener('mouseleave', function () {
        this.style.background = 'rgba(255, 255, 255, 0.1)';
    });
});

// Validación en tiempo real del formulario
const formInputs = document.querySelectorAll('.form-input, .form-textarea, .form-select');
formInputs.forEach(input => {
    input.addEventListener('blur', function () {
        if (this.hasAttribute('required') && !this.value.trim()) {
            this.style.borderColor = '#ff6b6b';
            this.style.boxShadow = '0 0 20px rgba(255, 107, 107, 0.3)';
        } else if (this.type === 'email' && this.value && !isValidEmail(this.value)) {
            this.style.borderColor = '#ff6b6b';
            this.style.boxShadow = '0 0 20px rgba(255, 107, 107, 0.3)';
        } else {
            this.style.borderColor = 'rgba(255, 255, 255, 0.2)';
            this.style.boxShadow = 'none';
        }
    });

    input.addEventListener('input', function () {
        if (this.style.borderColor === 'rgb(255, 107, 107)') {
            this.style.borderColor = 'rgba(255, 255, 255, 0.2)';
            this.style.boxShadow = 'none';
        }
    });
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Animación de escritura para el hero
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Inicializar cuando la página carga
document.addEventListener('DOMContentLoaded', function () {
    createParticles();

    // Efecto de paralaje suave en scroll
    window.addEventListener('scroll', function () {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.hero-section');
        const speed = scrolled * 0.5;
        parallax.style.transform = `translateY(${speed}px)`;
    });
});