
// Cart functionality
function toggleCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    cartSidebar.classList.toggle('open');
}

function addToCart(name, price) {
    const existingItem = cart.find(item => item.name === name);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: 1
        });
    }

    updateCart();

    // Visual feedback
    const button = event.target;
    const originalText = button.textContent;
    button.innerHTML = '<span class="loading"></span>';
    button.disabled = true;

    setTimeout(() => {
        button.textContent = '¡Añadido!';
        button.style.background = 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)';

        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = '';
            button.disabled = false;
        }, 1000);
    }, 800);
}

function removeFromCart(name) {
    cart = cart.filter(item => item.name !== name);
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cartItems');
    const cartCount = document.querySelector('.cart-count');
    const cartTotalElement = document.getElementById('cartTotal');

    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; opacity: 0.7;">Tu carrito está vacío</p>';
        cartCount.textContent = '0';
        cartTotal = 0;
    } else {
        let itemsHTML = '';
        let totalItems = 0;
        cartTotal = 0;

        cart.forEach(item => {
            totalItems += item.quantity;
            cartTotal += item.price * item.quantity;

            itemsHTML += `
                        <div class="cart-item">
                            <div class="cart-item-image">
                                ${getProductIcon(item.name)}
                            </div>
                            <div style="flex: 1;">
                                <h4>${item.name}</h4>
                                <p>€${item.price} x ${item.quantity}</p>
                            </div>
                            <button onclick="removeFromCart('${item.name}')" 
                                    style="background: transparent; border: none; color: #ff4757; font-size: 1.2rem; cursor: pointer;">
                                ×
                            </button>
                        </div>
                    `;
        });

        cartItems.innerHTML = itemsHTML;
        cartCount.textContent = totalItems;
    }

    cartTotalElement.textContent = cartTotal.toFixed(2);
}

// Prevent cart from closing when clicking inside
document.getElementById('cartSidebar').addEventListener('click', (e) => {
    e.stopPropagation();
});

// Close cart when clicking outside
document.addEventListener('click', (e) => {
    const cartSidebar = document.getElementById('cartSidebar');
    const cartIcon = document.querySelector('.cart-icon');

    if (!cartSidebar.contains(e.target) && !cartIcon.contains(e.target)) {
        cartSidebar.classList.remove('open');
    }
});

// Mobile menu toggle
document.querySelector('.mobile-menu').addEventListener('click', function () {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = 'rgba(0, 0, 0, 0.9)';
        navLinks.style.padding = '1rem';
        navLinks.style.backdropFilter = 'blur(20px)';
    }
});
