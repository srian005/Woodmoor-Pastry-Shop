// Navigation buttons
function showSection(sectionId) {
    const sections = document.querySelectorAll("main section");

    sections.forEach(function(section) {
        section.style.display = "none";
    });

    document.getElementById(sectionId).style.display = "block";
}


// Product Data
const products = [
    // Cakes
    {
        id: "cake-8-round",
        category: "Cakes",
        name: '8" Round Cake',
        description: "Serves 10-12 people.",
        price: 19.99,
        inventory: 6,
        advanceOrder: false,
        advanceDays: 0,
        seasonal: false,
        featured: true
    },

    {
        id: "cake-10-round",
        category: "Cakes",
        name: '10" Round Cake',
        description: "Serves 12-15 people.",
        price: 26.49,
        inventory: 4,
        advanceOrder: true,
        advanceDays: 3,
        seasonal: false,
        featured: false
    },

    // Filling Cakes
    {
        id: "filling-cake-8-round",
        category: "Filling Cakes",
        name: '8" Round Filling Cake',
        description: "Choose from five filling options.",
        price: null,
        inventory: 4,
        advanceOrder: true,
        advanceDays: 3,
        seasonal: false,
        featured: false,
        fillingOptions: {
            "Lemon": 4.00,
            "Bavarian Creme": 4.00,
            "Cherry": 4.00,
            "Peach": 4.00,
            "Raspberry": 4.00
        }
    },

    {
        id: "filling-cake-10-round",
        category: "Filling Cakes",
        name: '10" Round Filling Cake',
        description: "Choose from five filling options.",
        price: null,
        inventory: 4,
        advanceOrder: true,
        advanceDays: 3,
        seasonal: false,
        featured: false,
        fillingOptions: {
            "Lemon": 5.00,
            "Bavarian Creme": 5.00,
            "Cherry": 5.00,
            "Peach": 5.00,
            "Raspberry": 5.00
        }
    }
];


// Display Products
function displayProducts() {
    const productList = document.getElementById("product-list");

    productList.innerHTML = "";

    products.forEach(function(product) {
        const productCard = document.createElement("div");

        const priceDisplay = product.price === null
            ? "TBD"
            : "$" + product.price.toFixed(2);

        productCard.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>Price: ${priceDisplay}</p>
            <p>Available: ${product.inventory}</p>
        `;

        productList.appendChild(productCard);
    });
}


// Navigation Event Listeners
document.getElementById("home-button").addEventListener("click", function() {
    showSection("home");
});

document.getElementById("menu-button").addEventListener("click", function() {
    showSection("menu");
});

document.getElementById("cart-button").addEventListener("click", function() {
    showSection("cart");
});

document.getElementById("checkout-button").addEventListener("click", function() {
    showSection("checkout");
});

document.getElementById("view-menu-button").addEventListener("click", function() {
    showSection("menu");
});


// Start on Home
showSection("home");

// Display Products
displayProducts();