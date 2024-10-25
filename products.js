// // products.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a, _b, _c;
var _this = this;
function fetchProducts() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve) {
                    setTimeout(function () {
                        var mockData = [
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
                })];
        });
    });
}
function displayProducts(products) {
    var productList = document.getElementById('product-list');
    if (productList) {
        productList.innerHTML = ''; // Clear previous products
        products.forEach(function (product) {
            var productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = "\n                <img src=\"".concat(product.image, "\" alt=\"").concat(product.name, "\">\n                <h3>").concat(product.name, "</h3>\n                <div class=\"d-inline-block border border-primary rounded-pill px-3 mb-3\">").concat(product.price, "</div>\n                <p>").concat(product.description, "</p>\n                <a class=\"button\" href=\"product-details.html?id=").concat(product.id, "\">View Details</a>\n            ");
            productList.appendChild(productCard);
        });
    }
}
function displayProductsByCategory(category) {
    fetchProducts().then(function (products) {
        var filteredProducts = products.filter(function (product) { return product.category === category; });
        displayProducts(filteredProducts);
    });
}
function displayAllProducts() {
    fetchProducts().then(function (products) {
        displayProducts(products);
    });
}
// window.onload logic to handle both displaying all products and filtering by category
window.onload = function () { return __awaiter(_this, void 0, void 0, function () {
    var urlParams, category;
    return __generator(this, function (_a) {
        try {
            urlParams = new URLSearchParams(window.location.search);
            category = urlParams.get('category');
            if (category) {
                displayProductsByCategory(category); // Display filtered products by category
            }
            else {
                displayAllProducts(); // Display all products
            }
        }
        catch (error) {
            console.error('Error fetching products:', error);
        }
        return [2 /*return*/];
    });
}); };
(_a = document.getElementById('cakes-button')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () { return displayProductsByCategory('1C'); });
(_b = document.getElementById('custards-button')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () { return displayProductsByCategory('2CT'); });
(_c = document.getElementById('pizzas-button')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function () { return displayProductsByCategory('3P'); });
