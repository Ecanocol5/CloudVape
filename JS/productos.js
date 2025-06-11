function applyFilters() {
    const category = document.getElementById('categoryFilter').value;
    const price = document.getElementById('priceFilter').value;
    const brand = document.getElementById('brandFilter').value;
    const search = document.getElementById('searchFilter').value;

    console.log('Filtros aplicados:', { category, price, brand, search });
    alert('Filtros aplicados correctamente. En una implementación real, los productos se filtrarían aquí.');
}

function addToCart(productId) {
    // Simular agregar al carrito
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const product = {
        id: productId,
        name: getProductName(productId),
        price: getProductPrice(productId),
        quantity: 1
    };

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push(product);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Producto añadido al carrito');
}

function getProductName(id) {
    const products = {
        1: 'CloudTech Pro Max',
        2: 'Premium Mix Fruits',
        3: 'Power Bank Vape',
        4: 'VapePro Starter Kit'
    };
    return products[id] || 'Producto';
}

function getProductPrice(id) {
    const prices = {
        1: 89.99,
        2: 12.99,
        3: 34.99,
        4: 45.99
    };
    return prices[id] || 0;
}

// Mobile menu functionality
document.querySelector('.mobile-menu').addEventListener('click', function () {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Search functionality
document.getElementById('searchFilter').addEventListener('input', function (e) {
    if (e.target.value.length > 2) {
        // En una implementación real, aquí harías búsqueda en tiempo real
        console.log('Buscando:', e.target.value);
    }
});