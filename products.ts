// // products.ts

// interface Product {
//     id: number;
//     name: string;
//     price: string;
//     description: string;
//     image: string;
// }

// async function fetchProducts(): Promise<Product[]> {
//     const response = await fetch('http://localhost:3000/api/products');
//     const data = await response.json();
//     return data;
// }

// function displayProducts(products: Product[]): void {
//     const productList = document.getElementById('product-list');
//     if (productList) {
//         products.forEach(product => {
//             const productCard = document.createElement('div');
//             productCard.className = 'product-card';
//             productCard.innerHTML = `
//                 <img src="${product.image}" alt="${product.name}">
//                 <h3>${product.name}</h3>
//                 <div class="d-inline-block border border-primary rounded-pill px-3 mb-3">${product.price}</div>
//                 <p>${product.description}</p>
//                 <a class="button" href="product-details.html?id=${product.id}">View Details</a>
//             `;
//             productList.appendChild(productCard);
//         });
//     }
// }

// window.onload = async () => {
//     try {
//         const products = await fetchProducts();
//         displayProducts(products);
//     } catch (error) {
//         console.error('Error fetching products:', error);
//     }
// };

interface Product {
    id: number;
    name: string;
    price: string;
    description: string;
    image: string;
    category: string; // Add category field to match with the products
}

async function fetchProducts(): Promise<Product[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            const mockData: Product[] = [
                { id: 1, name: "CupCake", price: "$20", description: "Chocolate Lover, YUMMY!", image: "images/1.jpg", category: "1C" },
                { id: 2, name: "Custard Eggs", price: "$15", description: "Delesios Pure Protein", image: "images/7l.jpg", category: "2CT" },
                { id: 3, name: "Cheese Pizza", price: "$40", description: "Pizza for a GoOoOoD BoY", image: "images/1p.jpg", category: "3P" },
                { id: 4, name: "Macaron Fruits Flavor", price: "$15", description: "Cutesie Macaron For Besties", image: "images/3l.jpg", category: "1C" },
                { id: 5, name: "Pizza Peparonies", price: "$40", description: "Pizza pizza PIZZa", image: "images/2p.jpg", category: "3P" },
                { id: 6, name: "Waffles cake", price: "$10", description: "Yummy BF for ya Tummy :3", image: "images/1l.jpg", category: "1C" },
                { id: 7, name: "Berries Cake", price: "$25", description: "Delisimo for both ME and U", image: "images/4.jpg", category: "1C" },
                { id: 8, name: "Berries Cream Cake", price: "$20", description: "Delisimo for both ME and U(but with cream :3)", image: "images/8l.jpg", category: "1C" },
                { id: 9, name: "Sugar powder Buns", price: "$10", description: "Taste DA Sweet Buns", image: "images/9l.jpg", category: "1C" },
                { id: 10, name: "Wedding Cake", price: "$60", description: "Mama is proud of yal bois, live HAPPY", image: "images/2.jpg", category: "1C" },
            ];
            resolve(mockData);
        }, 1000); // Simulate network delay
    });
}

function displayProducts(products: Product[]): void {
    const productList = document.getElementById('product-list');
    if (productList) {
        productList.innerHTML = ''; // Clear previous products
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <div class="d-inline-block border border-primary rounded-pill px-3 mb-3">${product.price}</div>
                <p>${product.description}</p>
                <a class="button" href="product-details.html?id=${product.id}">View Details</a>
            `;
            productList.appendChild(productCard);
        });
    }
}

function displayProductsByCategory(category: string): void {
    fetchProducts().then(products => {
        const filteredProducts = products.filter(product => product.category === category);
        displayProducts(filteredProducts);
    });
}

function displayAllProducts(): void {
    fetchProducts().then(products => {
        displayProducts(products);
    });
}

// window.onload logic to handle both displaying all products and filtering by category
window.onload = async () => {
    try {
        const urlParams = new URLSearchParams(window.location.search);
        const category = urlParams.get('category');

        if (category) {
            displayProductsByCategory(category); // Display filtered products by category
        } else {
            displayAllProducts(); // Display all products
        }
    } catch (error) {
        console.error('Error fetching products:', error);
    }
};


document.getElementById('cakes-button')?.addEventListener('click', () => displayProductsByCategory('1C'));
document.getElementById('custards-button')?.addEventListener('click', () => displayProductsByCategory('2CT'));
document.getElementById('pizzas-button')?.addEventListener('click', () => displayProductsByCategory('3P'));