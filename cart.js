var cart = [];
// Function to get cart items from localStorage
function getCartItems() {
    var cartData = localStorage.getItem('cart');
    return cartData ? JSON.parse(cartData) : [];
}
// Function to save cart items to localStorage
function saveCartItems() {
    localStorage.setItem('cart', JSON.stringify(cart));
}
// Function to add items to the cart
function addToCart(id, name, price, image) {
    var existingItem = cart.find(function (item) { return item.id === id; });
    if (existingItem) {
        existingItem.quantity += 1;
    }
    else {
        cart.push({ id: id, name: name, price: price, quantity: 1, image: image });
    }
    saveCartItems(); // Save cart to localStorage after updating
    renderCart();
}
// Function to render the cart
function renderCart() {
    var cartList = document.getElementById('cart-list');
    var totalItems = document.getElementById('total-items');
    var totalPrice = document.getElementById('total-price');
    if (cartList && totalItems && totalPrice) {
        cartList.innerHTML = '';
        var total_1 = 0;
        cart.forEach(function (item) {
            var itemTotal = item.price * item.quantity;
            total_1 += itemTotal;
            var cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = "\n                <div class=\"cart-item-details\">\n                    <img src=\"".concat(item.image, "\" alt=\"").concat(item.name, "\">\n                    <div class=\"cart-item-info\">\n                        <h3>").concat(item.name, "</h3>\n                        <p>").concat(item.price.toLocaleString(), "$</p>\n                    </div>\n                </div>\n                <div class=\"cart-item-quantity\">\n                    <button onclick=\"updateQuantity(").concat(item.id, ", -1)\">-</button>\n                    <span>").concat(item.quantity, "</span>\n                    <button onclick=\"updateQuantity(").concat(item.id, ", 1)\">+</button>\n                </div>\n                <div class=\"cart-item-total\">\n                    <p>").concat(itemTotal.toLocaleString(), "</p>\n                </div>\n                <button class=\"remove-item\" onclick=\"removeFromCart(").concat(item.id, ")\">\n                    <i class=\"fas fa-trash\"></i>\n                </button>\n            ");
            cartList.appendChild(cartItem);
        });
        totalItems.textContent = cart.length.toString();
        totalPrice.textContent = total_1.toLocaleString() + '$';
    }
}
// Function to update quantity
function updateQuantity(id, change) {
    var item = cart.find(function (item) { return item.id === id; });
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(id);
        }
        else {
            saveCartItems(); // Save changes to localStorage
            renderCart();
        }
    }
}
// Function to remove items from the cart
function removeFromCart(id) {
    cart = cart.filter(function (item) { return item.id !== id; });
    saveCartItems(); // Save changes to localStorage
    renderCart();
}
// Function to load the cart when the page loads
function loadCart() {
    cart = getCartItems(); // Load cart from localStorage
    renderCart();
}
// Function to handle checkout
function checkout() {
    alert('Proceeding to checkout...');
    // Implement checkout logic here
}
// Load cart items on page load
window.onload = loadCart;
// At the bottom of your cart.ts
window.addToCart = addToCart;
window.updateQuantity = updateQuantity;
window.removeFromCart = removeFromCart;
