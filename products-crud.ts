interface Product {
    id: number; // Added id field
    name: string;
    price: string; // Price is a string
    description: string;
    image: string;
}

let products: Product[] = [];
let nextId = 1; // To keep track of the next available ID

// Function to render products
function renderProducts() {
    const productList = document.getElementById('product-list');
    if (productList) {
        productList.innerHTML = ''; // Clear existing products
        products.forEach((product) => {
            const productDiv = document.createElement('div');
            productDiv.className = 'product-item';
            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.name}" style="width: 100px; height: 100px;">
                <h4>${product.name}</h4>
                <p>Price: $${product.price}</p>
                <p>${product.description}</p>
                <button onclick="deleteProduct(${product.id})">Delete</button>
            `;
            productList.appendChild(productDiv);
        });
    }
}

// Function to handle form submission
document.getElementById('product-form')!.addEventListener('submit', function (event) {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const name = (form[0] as HTMLInputElement).value;
    const price = (form[1] as HTMLInputElement).value; // Price is a string
    const description = (form[2] as HTMLTextAreaElement).value;
    const imageFile = (form[3] as HTMLInputElement).files![0];

    if (imageFile) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const newProduct: Product = {
                id: nextId++, // Assign the current ID and increment for the next product
                name: name,
                price: price, // Keep price as string
                description: description,
                image: e.target?.result as string, // Image data URL
            };
            products.push(newProduct);
            renderProducts();
            form.reset(); // Clear the form after submission
        };
        reader.readAsDataURL(imageFile);
    }
});

// Function to save
function saveProductsToLocalStorage(products: Product[]): void {
    localStorage.setItem('products', JSON.stringify(products));
}

// Function to load
function loadProductsFromLocalStorage(): Product[] {
    const products = localStorage.getItem('products');
    return products ? JSON.parse(products) : [];
}

// Function to add
const addProduct = (event: Event) => {
    event.preventDefault();
    const products = loadProductsFromLocalStorage();
    const newProduct: Product = {
        id: products.length + 1, // Auto-increment ID
        name: (document.getElementById('productName') as HTMLInputElement).value,
        price: (document.getElementById('productPrice') as HTMLInputElement).value,
        description: (document.getElementById('productDescription') as HTMLTextAreaElement).value,
        image: '', // Handle image upload separately
    };
    products.push(newProduct);
    saveProductsToLocalStorage(products);
    renderProducts(); // Call renderProducts instead of displayProducts
};

const productForm = document.getElementById('product-form');
productForm?.addEventListener('submit', addProduct);

// Function to delete a product by ID
// Make sure this function is globally accessible
function deleteProduct(id: number) {
    products = products.filter(product => product.id !== id); // Remove product with the specified ID
    renderProducts();
}

// Attach deleteProduct function to window so it's globally accessible
(window as any).deleteProduct = deleteProduct;

// Initial render
renderProducts();


