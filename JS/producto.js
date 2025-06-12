let quantity = 1;
        const basePrice = 89.99;

        function changeQuantity(change) {
            quantity = Math.max(1, quantity + change);
            document.getElementById('quantity').textContent = quantity;
            document.getElementById('totalPrice').textContent = (basePrice * quantity).toFixed(2);
        }

        function addToCart() {
            const button = document.querySelector('.add-to-cart-btn');
            const originalText = button.innerHTML;
            
            button.innerHTML = '¡Añadido al Carrito! ✓';
            button.style.background = 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)';
            
            setTimeout(() => {
                button.innerHTML = originalText;
                button.style.background = '';
            }, 2000);
            
            // Simular añadir al carrito
            console.log(`Añadido al carrito: ${quantity}x Vape Cloud Pro`);
        }

        function buyNow() {
            alert(`¡Proceder al checkout!\nProducto: Vape Cloud Pro\nCantidad: ${quantity}\nTotal: €${(basePrice * quantity).toFixed(2)}`);
        }

        // Thumbnail gallery functionality
        document.querySelectorAll('.thumbnail').forEach((thumb, index) => {
            thumb.addEventListener('click', () => {
                document.querySelector('.thumbnail.active').classList.remove('active');
                thumb.classList.add('active');
                
                const emojis = ['💨', '⚡', '🌟', '🔥'];
                document.querySelector('.product-emoji').textContent = emojis[index];
            });
        });

        // Scroll effects
        window.addEventListener('scroll', () => {
            const header = document.querySelector('.header');
            if (window.scrollY > 100) {
                header.style.background = 'rgba(0, 0, 0, 0.4)';
            } else {
                header.style.background = 'rgba(0, 0, 0, 0.2)';
            }
        });

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