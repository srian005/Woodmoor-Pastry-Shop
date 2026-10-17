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
        image: "https://placehold.co/400x300?text=8+Inch+Cake",
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
        image: "https://placehold.co/400x300?text=10+Inch+Cake",
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
        image: "https://placehold.co/400x300?text=8+Inch+Filling+Cake",
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
        image: "https://placehold.co/400x300?text=10+Inch+Filling+Cake",
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
    },

    // Strawberry Shortcake
    {
        id: "strawberry-shortcake-9-round",
        category: "Strawberry Shortcake",
        name: '9" Round Strawberry Shortcake',
        description: "Half sheet strawberry shortcake with fresh strawberries and whipped cream.",
        image: "https://placehold.co/400x300?text=9+Inch+Strawberry+Shortcake",
        price: 50.99,
        inventory: 2,
        advanceOrder: true,
        advanceDays: 3,
        seasonal: false,
        featured: false
    },

    // Specialty Cakes
    {
        id: "Specialty Cakes",
        category: "Specialty Cakes",
        name: 'Specialty Cakes',
        description: "Custom-designed cakes for special occasions.",
        image: "https://placehold.co/400x300?text=Specialty+Cake",
        price: 49.99,
        inventory: 2,
        advanceOrder: true,
        advanceDays: 3,
        seasonal: false,
        featured: false
    },

    // Breads
    {
        id: "Breads",
        category: "Breads",
        name: 'Butter Top Bread',
        description: "Freshly baked butter top bread.",
        image: "https://placehold.co/400x300?text=Butter+Top+Bread",
        price: 3.89,
        inventory: 8,
        advanceOrder: false,
        advanceDays: 0,
        seasonal: false,
        featured: false,
        options: [
            "Sliced",
            "Whole"
        ]
    },

    {
        id: "bread-french",
        category: "Breads",
        name: 'French Bread',
        description: "Freshly baked French bread.",
        image: "https://placehold.co/400x300?text=French+Bread",
        price: 3.89,
        inventory: 8,
        advanceOrder: false,
        advanceDays: 0,
        seasonal: false,
        options: [
            "Sliced",
            "Whole"
        ]
    },

    // Donuts 
    {
        id: "donut-glazed",
        category: "Donuts",
        name: 'Glazed Donut',
        description: "Classic glazed donut.",
        image: "https://placehold.co/400x300?text=Glazed+Donut",
        price: 1.49,
        dozenPrice: 14.99,
        inventory: 24,
        advanceOrder: false,
        advanceDays: 0,
        seasonal: false,
        featured: true
    },

    {
        id: "donut-chocolate-frosted",
        category: "Donuts",
        name: 'Chocolate FrostedDonut',
        description: "Classic chocolate glazed donut.",
        image: "https://placehold.co/400x300?text=Chocolate+Frosted+Donut",
        price: 1.69,
        dozenPrice: 16.99,
        inventory: 24,
        advanceOrder: false,
        advanceDays: 0,
        seasonal: false,
        featured: true
    },

    {
        id: "donut-boston-cream",
        category: "Donuts",
        name: 'Boston Cream Donut',
        description: "Filled with vanilla custard and topped with chocolate.",
        image: "https://placehold.co/400x300?text=Boston+Cream+Donut",
        price: 1.89,
        dozenPrice: 18.99,
        inventory: 24,
        advanceOrder: false,
        advanceDays: 0,
        seasonal: false,
        featured: false
    },

    {
        id: "donut-jelly-filled",
        category: "Donuts",
        name: 'Jelly Filled Donut',
        description: "Filled with fruit jelly and topped with powdered sugar.",
        image: "https://placehold.co/400x300?text=Jelly+Filled+Donut",
        price: 1.89,
        dozenPrice: 18.99,
        inventory: 24,
        advanceOrder: false,
        advanceDays: 0,
        seasonal: false,
        featured: false
    },

    {
        id: "donut-cinnamon-sugar",
        category: "Donuts",
        name: 'Cinnamon Sugar Donut',
        description: "Coated with cinnamon sugar.",
        image: "https://placehold.co/400x300?text=Cinnamon+Sugar+Donut",
        price: 1.49,
        dozenPrice: 14.99,
        inventory: 24,
        advanceOrder: false,
        advanceDays: 0,
        seasonal: false,
        featured: false
    },

    // Danishes
    {
        id: "danish-cheese",
        category: "Danishes",
        name: 'Cheese Danish',
        description: "Flaky pastry filled with sweet cream cheese.",
        image: "https://placehold.co/400x300?text=Cheese+Danish",
        price: 2.99,
        inventory: 12,
        advanceOrder: false,
        advanceDays: 0,
        seasonal: false,
        featured: false
    },

    {
        id: "danish-apple",
        category: "Danishes",
        name: 'Apple Danish',
        description: "Flaky pastry filled with apple filling.",
        image: "https://placehold.co/400x300?text=Apple+Danish",
        price: 3.19,
        inventory: 12,
        advanceOrder: false,
        advanceDays: 0,
        seasonal: false,
        featured: false
    },

    {
        id: "danish-cherry",
        category: "Danishes",
        name: 'Cherry Danish',
        description: "Flaky pastry filled with cherry filling.",
        image: "https://placehold.co/400x300?text=Cherry+Danish",
        price: 3.19,
        inventory: 12,
        advanceOrder: false,
        advanceDays: 0,
        seasonal: false,
        featured: false
    },

    // Pies 
    {
        id: "pie-apple",
        category: "Pies",
        name: 'Apple Pie',
        description: "Classic apple pie with a flaky crust.",
        image: "https://placehold.co/400x300?text=Apple+Pie",
        price: 18.00,
        inventory: 4,
        advanceOrder: false,
        advanceDays: 0,
        seasonal: false,
        featured: false
    },

    {
        id: "pie-cherry",
        category: "Pies",
        name: 'Cherry Pie',
        description: "Classic cherry pie with a flaky crust.",
        image: "https://placehold.co/400x300?text=Cherry+Pie",
        price: 18.00,
        inventory: 4,
        advanceOrder: false,
        advanceDays: 0,
        seasonal: false,
        featured: false
    },

    {
        id: "pie-blueberry",
        category: "Pies",
        name: 'Blueberry Pie',
        description: "Classic blueberry pie with a flaky crust.",
        image: "https://placehold.co/400x300?text=Blueberry+Pie",
        price: 19.00,
        inventory: 4,
        advanceOrder: false,
        advanceDays: 0,
        seasonal: false,
        featured: false
    },

    {
        id: "pie-pumpkin",
        category: "Pies",
        name: 'Pumpkin Pie',
        description: "Classic pumpkin pie with a flaky crust.",
        image: "https://placehold.co/400x300?text=Pumpkin+Pie",
        price: 20.00,
        inventory: 4,
        advanceOrder: false,
        advanceDays: 0,
        seasonal: true,
        featured: false
    },

    // Coffee
    {
        id: "coffee-regular",
        category: "Coffee",
        name: 'Regular Coffee',
        description: "A refreshing cup of regular coffee with unlimited sugar and cream.",
        image: "https://placehold.co/400x300?text=Regular+Coffee",
        price: 1.50,
        inventory: 30,
        advanceOrder: false,
        advanceDays: 0,
        seasonal: false,
        featured: false
    },

    // Rolls
    {
        id: "rolls-parkerhouse",
        category: "Rolls",
        name: 'Parkerhouse Rolls',
        description: "Soft and buttery rolls.",
        image: "https://placehold.co/400x300?text=Parkerhouse+Rolls",
        price: null, 
        inventory: 12,
        advanceOrder: false,
        advanceDays: 0,
        seasonal: false,
        featured: false,
        options: [
            "1 Dozen",
            "2 Dozen"
        ]
    },

    {
        id: "rolls-hot-dog-buns",
        category: "Rolls",
        name: 'Hot Dog Buns',
        description: "Soft and fluffy hot dog buns.",
        image: "https://placehold.co/400x300?text=Hot+Dog+Buns",
        price: null, 
        inventory: 12,
        advanceOrder: false,
        advanceDays: 0,
        seasonal: false,
        featured: false,
    },

    {
        id: "rolls-burger-buns",
        category: "Rolls",
        name: 'Burger Buns',
        description: "Soft and fluffy burger buns.",
        image: "https://placehold.co/400x300?text=Burger+Buns",
        price: null,
        inventory: 12,
        advanceOrder: false,
        advanceDays: 0,
        seasonal: false,
        featured: false,
    },

    // Grab-and-Go Torte
    {
        id: "grab-and-go-torte",
        category: "Grab-and-Go Torte",
        name: 'Grab-and-Go Torte',
        description: "A convenient and delicious torte for on-the-go enjoyment.",
        image: "https://placehold.co/400x300?text=Grab-and-Go+Torte",
        price: null,
        inventory: 3,
        advanceOrder: false,
        advanceDays: 0,
        seasonal: false, 
        featured: true, 
    }
];

// Seasonal Products
const seasonalProducts = {
    fall: [
        {
            id: "seasonal-pumpkin-spice-pastry",
            category: "Seasonal Specials",
            name: "Pumpkin Spice Pastry",
            description: "A delightful pastry infused with the flavors of fall.",
            image: "https://placehold.co/400x300?text=Pumpkin+Spice+Pastry",
            price: null,
            inventory: 6
        },

        {
            id: "seasonal-pumpkin-pie",
            category: "Seasonal Specials",
            name: "Pumpkin Pie",
            description: "A classic pumpkin pie with a flaky crust.",
            image: "https://placehold.co/400x300?text=Pumpkin+Pie",
            price: 20.00,
            inventory: 4
        },

        {
            id: "seasonal-halloween-cookie",
            category: "Seasonal Specials",
            name: "Halloween Cookie",
            description: "A spooky cookie perfect for the holiday.",
            image: "https://placehold.co/400x300?text=Halloween+Cookie",
            price: null,
            inventory: 12
        } 
    ],

    winter: [
        {
            id: "seasonal-christmas-cake",
            category: "Seasonal Specials",
            name: "Christmas Wonderland Cake",
            description: "A festive cake decorated for the holiday season.",
            image: "https://placehold.co/400x300?text=Christmas+Wonderland+Cake",
            price: null,
            inventory: 3
        },

        {
            id: "seasonal-peppermint-pastry",
            category: "Seasonal Specials",
            name: "Peppermint Pastry",
            description: "A sweet treat with a refreshing peppermint flavor.",
            image: "https://placehold.co/400x300?text=Peppermint+Pastry",
            price: null,
            inventory: 6
        }
    ],

    mardiGras: [
        {
            id: "seasonal-king-cake",
            category: "Seasonal Specials",
            name: "King Cake",
            description: "A traditional cake enjoyed during Mardi Gras celebrations.",
            image: "https://placehold.co/400x300?text=King+Cake",
            price: null,
            inventory: 3
        },

        {
            id: "seasonal-mardi-gras-pastry",
            category: "Seasonal Specials",
            name: "Mardi Gras Pastry",
            description: "A colorful pastry perfect for the festive season.",
            image: "https://placehold.co/400x300?text=Mardi+Gras+Pastry",
            price: null,
            inventory: 6
        }
    ]
};


// Display Products
function displayProducts() {
    const productList = document.getElementById("product-list");

    // Clear the menu before displaying products
    productList.innerHTML = "";

    // Loop through every product
    products.forEach(function(product) {
        const productCard = document.createElement("div");

        // Apply the product card styling
        productCard.classList.add("product-card");

        // Display TBD when the price has not been set
        const priceDisplay = product.price === null
            ? "TBD"
            : "$" + product.price.toFixed(2);

        // Create the product card content, including its image
        productCard.innerHTML = `
            <img
                src="${product.image}"
                alt="${product.name}"
                class="product-image"
            >
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>Price: ${priceDisplay}</p>
            <p>Available: ${product.inventory}</p>
        `;

        // Add the finished card to the menu
        productList.appendChild(productCard);
    });
}

/**
 * Adds a selected product to the shopping cart.
 * @param {string} productId - The ID of the product to add to the cart.
 */
function addToCart(productId) {
    const product = products.find(function(item) {
        return item.id === productId;
    });

    if (!product) {
        alert("Product not found.");
        return;
    }

    if (product.inventory <= 0) {
        alert("Sorry, this product is out of stock.");
        return;
    }

    const cartItem = cart.find(function(item) {
        return item.product.id === productId;
    });

    if (cartItem) {
        if (cartItem.quantity < product.inventory) {
            cartItem.quantity++;
        } else {
            alert("You have reached the maximum available quantity for this product.");
            return;
        }
    } else {
        cart.push({
            product: product,
            quantity: 1
        });
    }

    alert(`${product.name} has been added to your cart.`);
    updateCartDisplay();
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