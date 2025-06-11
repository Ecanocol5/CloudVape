
// Variables globales
let cart = [];
let cartTotal = 0;

// Smooth scrolling
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

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(0, 0, 0, 0.4)';
    } else {
        header.style.background = 'rgba(0, 0, 0, 0.2)';
    }
});

function getProductIcon(productName) {
    const icons = {
        'Vape Cloud Pro': '💨',
        'Thunder Mod': '⚡',
        'Stellar Kit': '🌟',
        'Fire Storm': '🔥',
        'Diamond Series': '💎',
        'Rocket Vape': '🚀'
    };
    return icons[productName] || '💨';
}

function checkout() {
    if (cart.length === 0) {
        alert('Tu carrito está vacío');
        return;
    }

    alert(`¡Gracias por tu compra!\nTotal: €${cartTotal.toFixed(2)}\n\nTe redirigiremos al proceso de pago...`);

    // Simular proceso de checkout
    setTimeout(() => {
        cart = [];
        updateCart();
        toggleCart();
    }, 2000);
}
// Parallax effect
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero');
    const speed = scrolled * 0.5;

    if (parallax) {
        parallax.style.transform = `translateY(${speed}px)`;
    }
});

// Product card animations on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe product cards
document.addEventListener('DOMContentLoaded', () => {
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
});