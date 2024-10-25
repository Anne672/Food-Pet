// product-details.ts

interface Product {
    id: number;
    name: string;
    price: string;
    description: string;
    image: string;
    category: string;
}

// Mock function to simulate fetching a product by its ID
async function fetchProductById(id: number): Promise<Product | null> {
    return new Promise((resolve) => {
        setTimeout(() => {
            const mockData: Product[] = [
                { id: 1, name: "CupCake", price: "$20", description: "Chocolate Lover, YUMMY!", image: "images/1.jpg", category: "1C" },
                { id: 2, name: "Custard Eggs", price: "$15", description: "Delicious Pure Protein", image: "images/7l.jpg", category: "2CT" },
                { id: 3, name: "Cheese Pizza", price: "$40", description: "Pizza for a GoOoOoD BoY", image: "images/1p.jpg", category: "3P" },
                { id: 4, name: "Macaron Fruits Flavor", price: "$15", description: "Cutesie Macaron For Besties", image: "images/3l.jpg", category: "1C" },
                { id: 5, name: "Pizza Pepperoni", price: "$40", description: "Pizza pizza PIZZa", image: "images/2p.jpg", category: "3P" },
                { id: 6, name: "Waffles Cake", price: "$10", description: "Yummy BF for ya Tummy :3", image: "images/1l.jpg", category: "1C" },
                { id: 7, name: "Berries Cake", price: "$25", description: "Delisimo for both ME and U", image: "images/4.jpg", category: "1C" },
                { id: 8, name: "Berries Cream Cake", price: "$20", description: "Delisimo for both ME and U (but with cream :3)", image: "images/8l.jpg", category: "1C" },
                { id: 9, name: "Sugar Powder Buns", price: "$10", description: "Taste DA Sweet Buns", image: "images/9l.jpg", category: "1C" },
                { id: 10, name: "Wedding Cake", price: "$60", description: "Mama is proud of y'all, live HAPPY", image: "images/2.jpg", category: "1C" },
            ];
            const product = mockData.find(product => product.id === id) || null;
            resolve(product);
        }, 1000); // Simulate network delay
    });
}

// Function to add items to the cart
declare function addToCart(id: number, name: string, price: number, image: string): void;

async function displayProductDetails(): Promise<void> {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = Number(urlParams.get('id'));
    
    if (!isNaN(productId)) {
        const product = await fetchProductById(productId);
        const productDetailDiv = document.getElementById('product-detail');

        if (product && productDetailDiv) {
            productDetailDiv.innerHTML = `
                <div class="product-details" style="padding-right: 100px;padding-left: 100px;">
                    <img src="${product.image}" alt="${product.name}">
                    <div class="product-info">
                        <h3>${product.name}</h3>
                        <div class="product-price">${product.price}</div>
                        <div class="quantity-selector">
                            <button class="quantity-button" id="decrease-quantity">-</button>
                            <input type="number" value="1" min="1" class="quantity-input" id="quantity-input">
                            <button class="quantity-button" id="increase-quantity">+</button>
                        </div>
                        <button class="add-to-cart" id="add-to-cart">THÊM VÀO GIỎ HÀNG</button>
                        <button class="buy-now" id="buy-now">MUA NGAY</button>
                        <p class="no-return">Sản phẩm không nhận đổi trả</p>
                        <h4>THÔNG TIN SẢN PHẨM</h4>
                        <p>${product.description}</p>
                    </div>
                </div>
            `;

            // Event listeners for quantity buttons
            const quantityInput = document.getElementById('quantity-input') as HTMLInputElement;
            const decreaseButton = document.getElementById('decrease-quantity');
            const increaseButton = document.getElementById('increase-quantity');

            if (decreaseButton && increaseButton) {
                decreaseButton.addEventListener('click', () => {
                    let currentQuantity = Number(quantityInput.value);
                    if (currentQuantity > 1) {
                        quantityInput.value = (currentQuantity - 1).toString();
                    }
                });

                increaseButton.addEventListener('click', () => {
                    let currentQuantity = Number(quantityInput.value);
                    quantityInput.value = (currentQuantity + 1).toString();
                });
            }

            // Event listener for "THÊM VÀO GIỎ HÀNG"
            const addToCartButton = document.getElementById('add-to-cart');
            if (addToCartButton) {
                addToCartButton.addEventListener('click', () => {
                    const quantity = Number(quantityInput.value);
                    for (let i = 0; i < quantity; i++) {
                        addToCart(product.id, product.name, parseFloat(product.price.replace('$', '')), product.image);
                    }
                    alert("Product added to cart!");
                });
            }

            // Event listener for "MUA NGAY"
            const buyNowButton = document.getElementById('buy-now');
            if (buyNowButton) {
                buyNowButton.addEventListener('click', () => {
                    const quantity = Number(quantityInput.value);
                    for (let i = 0; i < quantity; i++) {
                        addToCart(product.id, product.name, parseFloat(product.price.replace('$', '')), product.image);
                    }
                    // Redirect to cart.html
                    window.location.href = 'cart.html';
                });
            }
        } else {
            console.error('Product not found');
        }
    } else {
        console.error('Invalid product ID');
    }
}

// Call the function to display product details when the page loads
window.onload = () => {
    displayProductDetails();
};



