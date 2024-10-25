var products = [];
var nextId = 1; // To keep track of the next available ID
// Function to render products
function renderProducts() {
    var productList = document.getElementById('product-list');
    if (productList) {
        productList.innerHTML = ''; // Clear existing products
        products.forEach(function (product) {
            var productDiv = document.createElement('div');
            productDiv.className = 'product-item';
            productDiv.innerHTML = "\n                <img src=\"".concat(product.image, "\" alt=\"").concat(product.name, "\" style=\"width: 100px; height: 100px;\">\n                <h4>").concat(product.name, "</h4>\n                <p>Price: $").concat(product.price, "</p>\n                <p>").concat(product.description, "</p>\n                <button onclick=\"deleteProduct(").concat(product.id, ")\">Delete</button>\n            ");
            productList.appendChild(productDiv);
        });
    }
}
// Function to handle form submission
document.getElementById('product-form').addEventListener('submit', function (event) {
    event.preventDefault();
    var form = event.target;
    var name = form[0].value;
    var price = form[1].value; // Price is a string
    var description = form[2].value;
    var imageFile = form[3].files[0];
    if (imageFile) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            var newProduct = {
                id: nextId++, // Assign the current ID and increment for the next product
                name: name,
                price: price, // Keep price as string
                description: description,
                image: (_a = e.target) === null || _a === void 0 ? void 0 : _a.result, // Image data URL
            };
            products.push(newProduct);
            renderProducts();
            form.reset(); // Clear the form after submission
        };
        reader.readAsDataURL(imageFile);
    }
});
// Function to save
function saveProductsToLocalStorage(products) {
    localStorage.setItem('products', JSON.stringify(products));
}
// Function to load
function loadProductsFromLocalStorage() {
    var products = localStorage.getItem('products');
    return products ? JSON.parse(products) : [];
}
// Function to add
var addProduct = function (event) {
    event.preventDefault();
    var products = loadProductsFromLocalStorage();
    var newProduct = {
        id: products.length + 1, // Auto-increment ID
        name: document.getElementById('productName').value,
        price: document.getElementById('productPrice').value,
        description: document.getElementById('productDescription').value,
        image: '', // Handle image upload separately
    };
    products.push(newProduct);
    saveProductsToLocalStorage(products);
    renderProducts(); // Call renderProducts instead of displayProducts
};
var productForm = document.getElementById('product-form');
productForm === null || productForm === void 0 ? void 0 : productForm.addEventListener('submit', addProduct);
// Function to delete a product by ID
// Make sure this function is globally accessible
function deleteProduct(id) {
    products = products.filter(function (product) { return product.id !== id; }); // Remove product with the specified ID
    renderProducts();
}
// Attach deleteProduct function to window so it's globally accessible
window.deleteProduct = deleteProduct;
// Initial render
renderProducts();
