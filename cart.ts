interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
}

let cart: CartItem[] = [];

// Function to get cart items from localStorage
function getCartItems(): CartItem[] {
    const cartData = localStorage.getItem('cart');
    return cartData ? JSON.parse(cartData) : [];
}

// Function to save cart items to localStorage
function saveCartItems(): void {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Function to add items to the cart
function addToCart(id: number, name: string, price: number, image: string): void {
    const existingItem = cart.find(item => item.id === id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ id, name, price, quantity: 1, image });
    }
    saveCartItems(); // Save cart to localStorage after updating
    renderCart();
}

// Function to render the cart
function renderCart(): void {
    const cartList = document.getElementById('cart-list');
    const totalItems = document.getElementById('total-items');
    const totalPrice = document.getElementById('total-price');

    if (cartList && totalItems && totalPrice) {
        cartList.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;

            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div class="cart-item-details">
                    <img src="${item.image}" alt="${item.name}">
                    <div class="cart-item-info">
                        <h3>${item.name}</h3>
                        <p>${item.price.toLocaleString()}$</p>
                    </div>
                </div>
                <div class="cart-item-quantity">
                    <button onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateQuantity(${item.id}, 1)">+</button>
                </div>
                <div class="cart-item-total">
                    <p>${itemTotal.toLocaleString()}</p>
                </div>
                <button class="remove-item" onclick="removeFromCart(${item.id})">
                    <i class="fas fa-trash"></i>
                </button>
            `;
            cartList.appendChild(cartItem);
        });

        totalItems.textContent = cart.length.toString();
        totalPrice.textContent = total.toLocaleString() + '$';
    }
}

// Function to update quantity
function updateQuantity(id: number, change: number): void {
    const item = cart.find(item => item.id === id);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(id);
        } else {
            saveCartItems(); // Save changes to localStorage
            renderCart();
        }
    }
}

// Function to remove items from the cart
function removeFromCart(id: number): void {
    cart = cart.filter(item => item.id !== id);
    saveCartItems(); // Save changes to localStorage
    renderCart();
}

// Function to load the cart when the page loads
function loadCart(): void {
    cart = getCartItems(); // Load cart from localStorage
    renderCart();
}

// Function to handle checkout
function checkout(): void {
    alert('Proceeding to checkout...');
    // Implement checkout logic here
}

// Load cart items on page load
window.onload = loadCart;


// At the bottom of your cart.ts
(window as any).addToCart = addToCart;
(window as any).updateQuantity = updateQuantity;
(window as any).removeFromCart = removeFromCart;
