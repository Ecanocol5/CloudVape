  // Cart functionality
        let cart = [];
        let cartCount = 0;
        let cartTotal = 0;

        function toggleCart() {
            const cartSidebar = document.getElementById('cartSidebar');
            cartSidebar.classList.toggle('open');
        }

        function addToCart(name, price) {
            cart.push({ name, price });
            cartCount++;
            cartTotal += price;
            
            document.querySelector('.cart-count').textContent = cartCount;
            document.getElementById('cartTotal').textContent = cartTotal.toFixed(2);
            
            updateCartDisplay();
        }

        function updateCartDisplay() {
            const cartItems = document.getElementById('cartItems');
            if (cart.length === 0) {
                cartItems.innerHTML = '<p style="text-align: center; opacity: 0.7;">Tu carrito está vacío</p>';
            } else {
                cartItems.innerHTML = cart.map(item => `
                    <div class="cart-item">
                        <div class="cart-item-image">🛍️</div>
                        <div>
                            <h4>${item.name}</h4>
                            <p>€${item.price.toFixed(2)}</p>
                        </div>
                    </div>
                `).join('');
            }
        }

        function checkout() {
            if (cart.length === 0) {
                alert('Tu carrito está vacío');
                return;
            }
            alert('Redirigiendo al proceso de pago...');
        }

        function applyFilters() {
            // Placeholder for filter functionality
            alert('Filtros aplicados');
        }

        // Mobile menu toggle
        document.querySelector('.mobile-menu').addEventListener('click', function() {
            document.querySelector('.nav-links').style.display = 
                document.querySelector('.nav-links').style.display === 'flex' ? 'none' : 'flex';
        });