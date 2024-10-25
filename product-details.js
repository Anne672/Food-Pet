// product-details.ts
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
// Mock function to simulate fetching a product by its ID
function fetchProductById(id) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve) {
                    setTimeout(function () {
                        var mockData = [
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
                        var product = mockData.find(function (product) { return product.id === id; }) || null;
                        resolve(product);
                    }, 1000); // Simulate network delay
                })];
        });
    });
}
function displayProductDetails() {
    return __awaiter(this, void 0, void 0, function () {
        var urlParams, productId, product_1, productDetailDiv, quantityInput_1, decreaseButton, increaseButton, addToCartButton, buyNowButton;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    urlParams = new URLSearchParams(window.location.search);
                    productId = Number(urlParams.get('id'));
                    if (!!isNaN(productId)) return [3 /*break*/, 2];
                    return [4 /*yield*/, fetchProductById(productId)];
                case 1:
                    product_1 = _a.sent();
                    productDetailDiv = document.getElementById('product-detail');
                    if (product_1 && productDetailDiv) {
                        productDetailDiv.innerHTML = "\n                <div class=\"product-details\" style=\"padding-right: 100px;padding-left: 100px;\">\n                    <img src=\"".concat(product_1.image, "\" alt=\"").concat(product_1.name, "\">\n                    <div class=\"product-info\">\n                        <h3>").concat(product_1.name, "</h3>\n                        <div class=\"product-price\">").concat(product_1.price, "</div>\n                        <div class=\"quantity-selector\">\n                            <button class=\"quantity-button\" id=\"decrease-quantity\">-</button>\n                            <input type=\"number\" value=\"1\" min=\"1\" class=\"quantity-input\" id=\"quantity-input\">\n                            <button class=\"quantity-button\" id=\"increase-quantity\">+</button>\n                        </div>\n                        <button class=\"add-to-cart\" id=\"add-to-cart\">TH\u00CAM V\u00C0O GI\u1ECE H\u00C0NG</button>\n                        <button class=\"buy-now\" id=\"buy-now\">MUA NGAY</button>\n                        <p class=\"no-return\">S\u1EA3n ph\u1EA9m kh\u00F4ng nh\u1EADn \u0111\u1ED5i tr\u1EA3</p>\n                        <h4>TH\u00D4NG TIN S\u1EA2N PH\u1EA8M</h4>\n                        <p>").concat(product_1.description, "</p>\n                    </div>\n                </div>\n            ");
                        quantityInput_1 = document.getElementById('quantity-input');
                        decreaseButton = document.getElementById('decrease-quantity');
                        increaseButton = document.getElementById('increase-quantity');
                        if (decreaseButton && increaseButton) {
                            decreaseButton.addEventListener('click', function () {
                                var currentQuantity = Number(quantityInput_1.value);
                                if (currentQuantity > 1) {
                                    quantityInput_1.value = (currentQuantity - 1).toString();
                                }
                            });
                            increaseButton.addEventListener('click', function () {
                                var currentQuantity = Number(quantityInput_1.value);
                                quantityInput_1.value = (currentQuantity + 1).toString();
                            });
                        }
                        addToCartButton = document.getElementById('add-to-cart');
                        if (addToCartButton) {
                            addToCartButton.addEventListener('click', function () {
                                var quantity = Number(quantityInput_1.value);
                                for (var i = 0; i < quantity; i++) {
                                    addToCart(product_1.id, product_1.name, parseFloat(product_1.price.replace('$', '')), product_1.image);
                                }
                                alert("Product added to cart!");
                            });
                        }
                        buyNowButton = document.getElementById('buy-now');
                        if (buyNowButton) {
                            buyNowButton.addEventListener('click', function () {
                                var quantity = Number(quantityInput_1.value);
                                for (var i = 0; i < quantity; i++) {
                                    addToCart(product_1.id, product_1.name, parseFloat(product_1.price.replace('$', '')), product_1.image);
                                }
                                // Redirect to cart.html
                                window.location.href = 'cart.html';
                            });
                        }
                    }
                    else {
                        console.error('Product not found');
                    }
                    return [3 /*break*/, 3];
                case 2:
                    console.error('Invalid product ID');
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    });
}
// Call the function to display product details when the page loads
window.onload = function () {
    displayProductDetails();
};
