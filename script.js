// Navigation buttons
function showSection(sectionId) {
    const sections = document.querySelectorAll("main > section");

    sections.forEach(function(section) {
        section.style.display = "none";
    });

    const selectedSection = document.getElementById(sectionId);

    if (selectedSection) {
        selectedSection.style.display = "block";
    }
}


// Product Data
const products = [
    // Cakes
    {
        id: "cake-8-round",
        category: "Cakes",
        name: '8" Round Cake',
        description: "Serves 10-12 people.",
        image: "images/8-inch-cake.jpg",
        price: 19.99,
        inventory: 6,
        advanceOrder: false,
        advanceDays: 0,
        seasonal: false,
        featured: true,
        imageSource: "https://bakesbybrownsugar.com/vanilla-layer-cake/"
    },

    {
        id: "cake-10-round",
        category: "Cakes",
        name: '10" Round Cake',
        description: "Serves 12-15 people.",
        image: "images/10-inch-cake.jpg",
        price: 26.49,
        inventory: 4,
        advanceOrder: true,
        advanceDays: 3,
        seasonal: false,
        featured: false,
        imageSource: "https://bakesbybrownsugar.com/coconut-layer-cake/"
    },

    // Filling Cakes
    {
        id: "filling-cake-8-round",
        category: "Filling Cakes",
        name: '8" Round Filling Cake',
        description: "Choose from five filling options.",
        image: "images/8-inch-filling-cake.jpg",
        price: null,
        inventory: 4,
        advanceOrder: true,
        advanceDays: 3,
        seasonal: false,
        featured: false,
        imageSource: "https://bakesbybrownsugar.com/blackberry-lime-cake/",
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
        image: "images/10-inch-filling-cake.jpg",
        price: null,
        inventory: 4,
        advanceOrder: true,
        advanceDays: 3,
        seasonal: false,
        featured: false,
        imageSource: "https://bakesbybrownsugar.com/fresh-strawberry-cake/",
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
        image: "images/strawberry-shortcake.jpg",
        price: 50.99,
        inventory: 2,
        advanceOrder: true,
        advanceDays: 3,
        seasonal: false,
        featured: false,
        imageSource: "https://commons.wikimedia.org/wiki/File:Cake_%2832811889183%29.jpg"
    },

    // Specialty Cakes
    {
        id: "Specialty Cakes",
        category: "Specialty Cakes",
        name: 'Specialty Cakes',
        description: "Custom-designed cakes for special occasions.",
        image: "images/specialty-cakes.jpg",
        price: 49.99,
        inventory: 2,
        advanceOrder: true,
        advanceDays: 3,
        seasonal: false,
        featured: false,
        imageSource: "https://www.foodiesfeed.com/s/cake"
    },

    // Breads
    {
        id: "Breads",
        category: "Breads",
        name: 'Butter Top Bread',
        description: "Freshly baked butter top bread.",
        image: "images/butter-top-bread.jpg",
        price: 3.89,
        inventory: 8,
        advanceOrder: false,
        advanceDays: 0,
        seasonal: false,
        featured: false,
        imageSource: "https://bakesbybrownsugar.com/brioche-loaf/",
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
        image: "images/french-bread.jpg",
        price: 3.89,
        inventory: 8,
        advanceOrder: false,
        advanceDays: 0,
        seasonal: false,
        imageSource: "https://www.stockvault.net/photo/218282/french-bread",
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
        image: "images/glazed-donut.jpg",
        price: 1.49,
        dozenPrice: 14.99,
        inventory: 24,
        advanceOrder: false,
        advanceDays: 0,
        seasonal: false,
        featured: true,
        imageSource: "https://www.flickr.com/photos/aloha75/5676161821"
    },

    {
        id: "donut-chocolate-frosted",
        category: "Donuts",
        name: 'Chocolate Frosted Donut',
        description: "Classic chocolate glazed donut.",
        image: "images/chocolate-frosted-donut.jpg",
        price: 1.69,
        dozenPrice: 16.99,
        inventory: 24,
        advanceOrder: false,
        advanceDays: 0,
        seasonal: false,
        featured: true,
        imageSource: "https://www.publicdomainpictures.net/en/view-image.php?image=298431&picture=donut"
    },

    {
        id: "donut-boston-cream",
        category: "Donuts",
        name: 'Boston Cream Donut',
        description: "Filled with vanilla custard and topped with chocolate.",
        image: "images/boston-cream-donut.jpg",
        price: 1.89,
        dozenPrice: 18.99,
        inventory: 24,
        advanceOrder: false,
        advanceDays: 0,
        seasonal: false,
        featured: false,
        imageSource: "https://commons.wikimedia.org/wiki/File:Bavarian_Cr%C3%A8me_Bismark_-_Top_Pot_Doughnuts_-_27_November_2022.jpg"
    },

    {
        id: "donut-jelly-filled",
        category: "Donuts",
        name: 'Jelly Filled Donut',
        description: "Filled with fruit jelly and topped with powdered sugar.",
        image: "images/jelly-filled-donut.jpg",
        price: 1.89,
        dozenPrice: 18.99,
        inventory: 24,
        advanceOrder: false,
        advanceDays: 0,
        seasonal: false,
        featured: false,
        imageSource: "https://www.needpix.com/photo/964868/donut-berlin-carnival-sugar-food-eat-baked-goods-dessert-sweet"
    },

    {
        id: "donut-cinnamon-sugar",
        category: "Donuts",
        name: 'Cinnamon Sugar Donut',
        description: "Coated with cinnamon sugar.",
        image: "images/cinnamon-sugar-donut.jpg",
        price: 1.49,
        dozenPrice: 14.99,
        inventory: 24,
        advanceOrder: false,
        advanceDays: 0,
        seasonal: false,
        featured: false,
        imageSource: "https://picryl.com/media/buns-donuts-meal-fc3502"
    },

    // Danishes
    {
        id: "danish-cheese",
        category: "Danishes",
        name: 'Cheese Danish',
        description: "Flaky pastry filled with sweet cream cheese.",
        image: "images/cheese-danish.jpg",
        price: 2.99,
        inventory: 12,
        advanceOrder: false,
        advanceDays: 0,
        seasonal: false,
        featured: false,
        imageSource: "https://bakesbybrownsugar.com/cherry-cream-cheese-puff-pastry/"
    },

    {
        id: "danish-apple",
        category: "Danishes",
        name: 'Apple Danish',
        description: "Flaky pastry filled with apple filling.",
        image: "images/apple-danish.jpg",
        price: 3.19,
        inventory: 12,
        advanceOrder: false,
        advanceDays: 0,
        seasonal: false,
        featured: false,
        imageSource: "https://commons.wikimedia.org/wiki/File:Glazed_apple_Danish.jpg"
    },

    {
        id: "danish-cherry",
        category: "Danishes",
        name: 'Cherry Danish',
        description: "Flaky pastry filled with cherry filling.",
        image: "images/cherry-danish.jpg",
        price: 3.19,
        inventory: 12,
        advanceOrder: false,
        advanceDays: 0,
        seasonal: false,
        featured: false,
        imageSource: "https://bakesbybrownsugar.com/cherry-cream-cheese-puff-pastry/"
    },

    // Pies 
    {
        id: "pie-apple",
        category: "Pies",
        name: 'Apple Pie',
        description: "Classic apple pie with a flaky crust.",
        image: "images/apple-pie.jpg",
        price: 18.00,
        inventory: 4,
        advanceOrder: false,
        advanceDays: 0,
        seasonal: false,
        featured: false,
        imageSource: "https://bakesbybrownsugar.com/apple-caramel-crumble-pie/"
    },

    {
        id: "pie-cherry",
        category: "Pies",
        name: 'Cherry Pie',
        description: "Classic cherry pie with a flaky crust.",
        image: "images/cherry-pie.jpg",
        price: 18.00,
        inventory: 4,
        advanceOrder: false,
        advanceDays: 0,
        seasonal: false,
        featured: false,
        imageSource: "https://bakesbybrownsugar.com/cranberry-pie/"
    },

    {
        id: "pie-blueberry",
        category: "Pies",
        name: 'Blueberry Pie',
        description: "Classic blueberry pie with a flaky crust.",
        image: "images/blueberry-pie.jpg",
        price: 19.00,
        inventory: 4,
        advanceOrder: false,
        advanceDays: 0,
        seasonal: false,
        featured: false,
        imageSource: "https://bakesbybrownsugar.com/blueberry-crumble-pie/"
    },

    {
        id: "pie-pumpkin",
        category: "Pies",
        name: 'Pumpkin Pie',
        description: "Classic pumpkin pie with a flaky crust.",
        image: "images/pumpkin-pie.jpg",
        price: 20.00,
        inventory: 4,
        advanceOrder: false,
        advanceDays: 0,
        seasonal: true,
        featured: false,
        imageSource: "https://bakesbybrownsugar.com/sweet-potato-pie-with-graham-cracker-crust/"
    },

    // Coffee
    {
        id: "coffee-regular",
        category: "Coffee",
        name: 'Regular Coffee',
        description: "A refreshing cup of regular coffee with unlimited sugar and cream.",
        image: "images/coffee.jpg",
        price: 1.50,
        inventory: 30,
        advanceOrder: false,
        advanceDays: 0,
        seasonal: false,
        featured: false,
        imageSource: "https://www.foodiesfeed.com/free-food-photo/delicious-coffee-with-cream-pouring"
    },

    // Rolls
    {
        id: "rolls-parkerhouse",
        category: "Rolls",
        name: 'Parkerhouse Rolls',
        description: "Soft and buttery rolls.",
        image: "images/parkerhouse-rolls.jpg",
        price: null, 
        inventory: 12,
        advanceOrder: false,
        advanceDays: 0,
        seasonal: false,
        featured: false,
        imageSource: "https://commons.wikimedia.org/wiki/File:Parker_House_Rolls_%2816452387836%29.jpg",
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
        image: "images/hot-dogs.jpg",
        price: null, 
        inventory: 12,
        advanceOrder: false,
        advanceDays: 0,
        seasonal: false,
        featured: false,
        imageSource: "https://www.publicdomainpictures.net/en/view-image.php?image=349060&picture=sausage-rolls-2"
    },

    {
        id: "rolls-burger-buns",
        category: "Rolls",
        name: 'Burger Buns',
        description: "Soft and fluffy burger buns.",
        image: "images/burger-buns.jpg",
        price: null,
        inventory: 12,
        advanceOrder: false,
        advanceDays: 0,
        seasonal: false,
        featured: false,
        imageSource: "https://www.foodiesfeed.com/zh/free-food-photo/soft-sesame-burger-buns-freshly-baked"
    },

    // Grab-and-Go Torte
    {
        id: "grab-and-go-torte",
        category: "Grab-and-Go Torte",
        name: 'Grab-and-Go Torte',
        description: "A convenient and delicious torte for on-the-go enjoyment.",
        image: "images/torte.jpg",
        price: null,
        inventory: 3,
        advanceOrder: false,
        advanceDays: 0,
        seasonal: false, 
        featured: true, 
        imageSource: "https://commons.wikimedia.org/wiki/File:Sarah-Bernhardt_torte.JPG"
    }
];


let cart = [];
let orders = [];

// Seasonal Products
const seasonalProducts = {
    fall: [
        {
            id: "seasonal-pumpkin-spice-pastry",
            category: "Seasonal Specials",
            name: "Pumpkin Spice Muffin",
            description: "A delightful muffin infused with the flavors of fall.",
            image: "images/pumpkin-muffin.jpg",
            price: null,
            inventory: 6,
            imageSource: "https://www.facebook.com/GirlWhoAteEverything/videos/pumpkin-cream-cheese-muffins-ive-never-had-anyone-taste-these-and-say-i-dont-lik/2342632376568921/"
        },

        {
            id: "seasonal-pumpkin-pie",
            category: "Seasonal Specials",
            name: "Pumpkin Pie",
            description: "A classic pumpkin pie with a flaky crust.",
            image: "images/pumpkin-pie.jpg",
            price: 20.00,
            inventory: 4,
            imageSource: "https://bakesbybrownsugar.com/sweet-potato-pie-with-graham-cracker-crust/"
        },

        {
            id: "seasonal-halloween-cookie",
            category: "Seasonal Specials",
            name: "Halloween Cookie",
            description: "A spooky cookie perfect for the holiday.",
            image: "images/halloween-cookie.jpg",
            price: null,
            inventory: 12,
            imageSource: "https://www.publicdomainpictures.net/fr/view-image.php?image=815352&picture=decorer-des-biscuits-d-halloween"
        } 
    ],

    winter: [
        {
            id: "seasonal-christmas-cake",
            category: "Seasonal Specials",
            name: "Christmas Wonderland Cake",
            description: "A festive cake decorated for the holiday season.",
            image: "images/christmas-cake.jpg",
            price: null,
            inventory: 3,
            imageSource: "https://www.flickr.com/photos/chriswaits/8242458449"
        },

        {
            id: "seasonal-peppermint-pastry",
            category: "Seasonal Specials",
            name: "Peppermint Pastry",
            description: "A sweet treat with a refreshing peppermint flavor.",
            image: "images/peppermint-pastry.jpg",
            price: null,
            inventory: 6,
            imageSource: "https://www.facebook.com/SixSistersStuff/posts/day-8-of-12-peppermint-snowball-cookies-these-beauties-are-not-just-gorgeous-the/1398061245017671/"
        }
    ],

    mardiGras: [
        {
            id: "seasonal-king-cake",
            category: "Seasonal Specials",
            name: "King Cake",
            description: "A traditional cake enjoyed during Mardi Gras celebrations.",
            image: "images/king-cake.jpg",
            price: null,
            inventory: 3,
            imageSource: "https://www.flickr.com/photos/27164521@N00/4405840173"
        },

        {
            id: "seasonal-mardi-gras-pastry",
            category: "Seasonal Specials",
            name: "Mardi Gras Pastry",
            description: "A colorful pastry perfect for the festive season.",
            image: "images/mardi-gras-pastry.jpg",
            price: null,
            inventory: 6,
            imageSource: "https://www.facebook.com/groups/3220021954712162/posts/6057350534312609/"
        }
    ]
};


// Display Products
function displayProducts() {
    const productList = document.getElementById("product-list");

    // Clear the menu before rebuilding it
    productList.innerHTML = "";

    // Group products by their category
    const groupedProducts = {};

    products.forEach(function(product) {
        const category = product.category || "Other Treats";

        if (!groupedProducts[category]) {
            groupedProducts[category] = [];
        }

        groupedProducts[category].push(product);
    });

    // Create a separate section for every product category
    Object.keys(groupedProducts).forEach(function(category) {
        const categorySection = document.createElement("section");
        categorySection.className = "menu-category-section";
        categorySection.id = "category-" + category.toLowerCase().replace(/\s+/g, "-");

        const categoryHeading = document.createElement("h2");
        categoryHeading.className = "menu-category-heading";
        categoryHeading.textContent = category;

        const productGrid = document.createElement("div");
        productGrid.className = "menu-category-grid";

        categorySection.appendChild(categoryHeading);
        categorySection.appendChild(productGrid);

        // Display each product inside its category's grid
        groupedProducts[category].forEach(function(product) {
            const productCard = document.createElement("div");
            productCard.classList.add("product-card");

            const priceDisplay = product.price === null
                ? "Price to be determined"
                : "$" + product.price.toFixed(2);

            let optionsDisplay = "";

            if (product.options) {
                optionsDisplay = `
                    <p>Options: ${product.options.join(" / ")}</p>
                `;
            }

            if (product.fillingOptions) {
                optionsDisplay = `
                    <p>Filling Options: ${
                        Object.keys(product.fillingOptions).join(", ")
                    }</p>
                `;
            }

            // Show a flavor dropdown for Specialty Cakes
            if (product.id === "Specialty Cakes") {
                optionsDisplay = `
                    <label for="flavor-${product.id}">Choose a flavor:</label>
                    <select id="flavor-${product.id}">
                        <option value="">Select a flavor</option>
                        <option value="Vanilla">Vanilla</option>
                        <option value="Chocolate">Chocolate</option>
                        <option value="Red Velvet">Red Velvet</option>
                        <option value="Lemon">Lemon</option>
                        <option value="Marble">Marble</option>
                    </select>
                `;
            }

            if (product.options) {
                optionsDisplay = `
                    <p>Options: ${product.options.join(" / ")}</p>
                `;
            }

            if (product.fillingOptions) {
                optionsDisplay = `
                    <p>Filling Options: ${
                        Object.keys(product.fillingOptions).join(", ")
                    }</p>
                `;
            }

            // Build the product card
            productCard.innerHTML = `
                <img
                    src="${product.image}"
                    alt="${product.name}"
                    class="product-image"
                >

                <h3>${product.name}</h3>

                <p>${product.description}</p>

                ${optionsDisplay}

                <p class="product-price">${priceDisplay}</p>

                <p class="product-stock">
                    ${
                        product.inventory > 0
                            ? product.inventory + " available"
                            : "Out of stock"
                    }
                </p>

                <button
                    type="button"
                    onclick="addToCart('${product.id}')"
                    ${product.inventory <= 0 ? "disabled" : ""}
                >
                    ${product.inventory > 0 ? "Add to Cart" : "Sold Out"}
                </button>
            `;

            productGrid.appendChild(productCard);
        });

        productList.appendChild(categorySection);
    });
}

/**
 * Adds a selected product to the shopping cart.
 * @param {string} productId - The ID of the product to add to the cart.
 */
function addToCart(productId) {
    // Search regular and seasonal products
    const allSeasonalProducts = Object.values(seasonalProducts).flat();

    const product = [...products, ...allSeasonalProducts].find(function(item) {
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

    displayCart();
}

/**
 * Displays cart items, quantity controls, and order totals.
 */
function displayCart() {
    const cartItems = document.getElementById("cart-items");
    const subtotalDisplay = document.getElementById("cart-subtotal");
    const taxDisplay = document.getElementById("cart-tax");
    const totalDisplay = document.getElementById("cart-total");
    const totalsContainer = document.getElementById("cart-totals");

    if (!cartItems || !subtotalDisplay || !taxDisplay || !totalDisplay) {
        return;
    }

    // Create a discount row if it does not already exist.
    let discountRow = document.getElementById("cart-discount-row");

    if (!discountRow && totalsContainer) {
        discountRow = document.createElement("p");
        discountRow.id = "cart-discount-row";
        discountRow.textContent = "Reward discount: $0.00";
        totalsContainer.appendChild(discountRow);
    }

    cartItems.innerHTML = "";

    // Handle an empty cart.
    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Your cart is empty.</p>";
        subtotalDisplay.textContent = "0.00";
        taxDisplay.textContent = "0.00";
        totalDisplay.textContent = "0.00";

        if (discountRow) {
            discountRow.textContent = "Reward discount: $0.00";
        }

        updateCartDisplay();
        return;
    }

    let subtotal = 0;
    let hasUnpricedItems = false;

    // Display each item in the cart.
    cart.forEach(function(item, index) {
        const product = item.product;
        const cartRow = document.createElement("div");
        cartRow.className = "cart-item-row";

        if (product.price === null) {
            hasUnpricedItems = true;
        } else if (!item.isFree) {
            subtotal += product.price * item.quantity;
        }

        const itemTotal = product.price === null
            ? "TBD"
            : "$" + (
                item.isFree ? 0 : product.price * item.quantity
            ).toFixed(2);

        const priceLabel = item.isFree
            ? "FREE — spinner reward"
            : product.price === null
                ? "TBD"
                : "$" + product.price.toFixed(2);

        cartRow.innerHTML = `
            <h3>${product.name}</h3>
            ${item.isFree ? "<p><strong>Reward item — free</strong></p>" : ""}
            <p>Price per item: ${priceLabel}</p>
            <p>Item total: ${itemTotal}</p>
        `;

        const quantityDisplay = document.createElement("p");
        quantityDisplay.textContent = "Quantity: " + item.quantity;
        cartRow.appendChild(quantityDisplay);

        // Prevent customers from separating the paid Danish
        // from the free Danish in a BOGO reward.
        const lockedRewardPair = Boolean(item.rewardItem);

        const decreaseButton = document.createElement("button");
        decreaseButton.type = "button";
        decreaseButton.textContent = "-";
        decreaseButton.disabled = lockedRewardPair;

        decreaseButton.addEventListener("click", function() {
            if (item.quantity > 1) {
                item.quantity--;
            } else {
                cart.splice(index, 1);
            }

            displayCart();
        });

        const increaseButton = document.createElement("button");
        increaseButton.type = "button";
        increaseButton.textContent = "+";
        increaseButton.disabled = Boolean(item.isFree || item.rewardItem);

        increaseButton.addEventListener("click", function() {
            const quantityInCart = cart.reduce(function(total, cartItem) {
                return total + (
                    cartItem.product.id === product.id
                        ? cartItem.quantity
                        : 0
                );
            }, 0);

            if (quantityInCart < product.inventory) {
                item.quantity++;
                displayCart();
            } else {
                alert("You have reached the available stock limit.");
            }
        });

        const removeButton = document.createElement("button");
        removeButton.type = "button";
        removeButton.textContent = "Remove";
        removeButton.disabled = Boolean(item.rewardItem);

        removeButton.addEventListener("click", function() {
            cart.splice(index, 1);
            displayCart();
        });

        cartRow.appendChild(decreaseButton);
        cartRow.appendChild(increaseButton);
        cartRow.appendChild(removeButton);

        cartItems.appendChild(cartRow);
    });

    // Apply the winning percentage discount to paid items.
    const discountAmount = subtotal * discountRate;
    const discountedSubtotal = Math.max(0, subtotal - discountAmount);
    const tax = discountedSubtotal * 0.06;
    const total = discountedSubtotal + tax;

    if (discountRow) {
        discountRow.textContent = discountRate > 0
            ? `Reward discount (${Math.round(discountRate * 100)}%): -$${discountAmount.toFixed(2)}`
            : "Reward discount: $0.00";
    }

    // Preserve TBD totals when an item has no listed price.
    if (hasUnpricedItems) {
        subtotalDisplay.textContent = "TBD";
        taxDisplay.textContent = "TBD";
        totalDisplay.textContent = "TBD";
    } else {
        subtotalDisplay.textContent = subtotal.toFixed(2);
        taxDisplay.textContent = tax.toFixed(2);
        totalDisplay.textContent = total.toFixed(2);
    }

    updateCartDisplay();
}

/**
 * Updates the number of items displayed in the cart
 */
function updateCartDisplay() {
    const cartCount = cart.reduce(function(total, item) {
        return total + item.quantity;
    }, 0);

    const cartCountDisplay = document.getElementById("cart-count");

    if (cartCountDisplay) {
        cartCountDisplay.textContent = cartCount;
    }
}

/**
 * Checks that a pickup date is selected and is not in the past.
 */
function validatePickupDate() {
    const pickupDate = document.getElementById("pickup-date").value;

    if (pickupDate === "") {
        alert("Please select a pickup date.");
        return false;
    }

    const selectedDate = new Date(pickupDate + "T00:00:00");

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (selectedDate < today) {
        alert("Pickup date cannot be in the past. Please choose today or a future date.");
        return false;
    }

    return true;
}

/**
 * Validates checkout information and processes the order. 
 */

document.getElementById("checkout-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const firstName = document.getElementById("first-name").value.trim();
    const lastName = document.getElementById("last-name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const notes = document.getElementById("notes").value.trim();
    const pickupDate = document.getElementById("pickup-date").value;

    // Validate customer information.
    if (firstName === "" || lastName === "") {
        alert("Please enter your first and last name.");
        return;
    }

    if (phone === "" || email === "") {
        alert("Please enter both your phone number and email address.");
        return;
    }

    if (!validatePickupDate()) {
        return;
    }

    if (cart.length === 0) {
        alert("Your cart is empty. Please add products before checking out.");
        return;
    }

    // Generate a unique order number.
    const orderNumber = "WPS-" + Date.now();

    // Calculate the subtotal, excluding free reward items.
    const hasUnpricedItems = cart.some(function(item) {
        return item.product.price === null && !item.isFree;
    });

    const orderSubtotal = cart.reduce(function(sum, item) {
        if (item.isFree || item.product.price === null) {
            return sum;
        }

        return sum + item.product.price * item.quantity;
    }, 0);

    // Apply the percentage reward discount.
    const discountAmount = orderSubtotal * discountRate;
    const discountedSubtotal = orderSubtotal - discountAmount;

    // Calculate tax after the discount.
    const orderTax = discountedSubtotal * 0.06;
    const orderTotal = discountedSubtotal + orderTax;

    // Save the order items, including free reward items.
    const orderedItems = cart.map(function(item) {
        return {
            id: item.product.id,
            name: item.product.name,
            price: item.product.price,
            quantity: item.quantity,
            isFree: Boolean(item.isFree),
            rewardItem: Boolean(item.rewardItem)
        };
    });

    // Display the order number and customer information.
    document.getElementById("order-number").textContent = orderNumber;

    const orderSummary = document.getElementById("order-summary");

    orderSummary.innerHTML = `
        <h3>Customer Information</h3>
        <p>Name: ${firstName} ${lastName}</p>
        <p>Phone: ${phone}</p>
        <p>Email: ${email}</p>
        <p>Pickup Date: ${pickupDate}</p>
        <p>Order Notes / Allergy Information: ${
            notes || "None provided"
        }</p>
        <h3>Items Ordered</h3>
    `;

    // Display every item, clearly identifying free rewards.
    orderedItems.forEach(function(item) {
        const itemDetails = document.createElement("p");

        const itemTotal = item.isFree
            ? 0
            : item.price === null
                ? null
                : item.price * item.quantity;

        itemDetails.textContent =
            item.name + " x " + item.quantity +
            (item.isFree
                ? " — FREE REWARD ($0.00)"
                : itemTotal === null
                    ? " — Price TBD"
                    : " — $" + itemTotal.toFixed(2));

        orderSummary.appendChild(itemDetails);
    });

    // Display the reward and final price breakdown.
    const rewardDetails = document.createElement("div");

    rewardDetails.innerHTML = `
        <h3>Order Total</h3>
        <p>Subtotal: $${orderSubtotal.toFixed(2)}</p>
        <p>Reward discount: -$${discountAmount.toFixed(2)}</p>
        <p>Tax: $${orderTax.toFixed(2)}</p>
        <p><strong>Total: ${hasUnpricedItems
            ? "TBD"
            : "$" + orderTotal.toFixed(2)}</strong></p>
    `;

    if (activePrize) {
        const rewardMessage = document.createElement("p");
        rewardMessage.textContent = "Reward earned: " + activePrize.name;
        rewardDetails.prepend(rewardMessage);
    }

    orderSummary.appendChild(rewardDetails);

    // Update inventory for all items, including free rewards.
    cart.forEach(function(item) {
        item.product.inventory -= item.quantity;
    });

    // Save the order for the admin dashboard.
    orders.push({
        orderNumber: orderNumber,
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        email: email,
        notes: notes,
        pickupDate: pickupDate,
        items: orderedItems,
        subtotal: orderSubtotal,
        discount: discountAmount,
        discountRate: discountRate,
        tax: orderTax,
        total: hasUnpricedItems ? null : orderTotal,
        reward: activePrize ? activePrize.name : null,
        placedAt: new Date()
    });

    // Clear the cart and reset the reward for the next order.
    cart.length = 0;
    discountRate = 0;
    activePrize = null;
    hasSpun = false;
    rewardApplied = false;
    wheelRotation = 0;

    displayCart();
    updateCartDisplay();
    displayProducts();

    // Reset the spinner for the next order.
    const wheel = document.getElementById("prize-wheel");
    const spinButton = document.getElementById("spin-button");
    const prizeResult = document.getElementById("prize-result");
    const prizeDetails = document.getElementById("prize-details");

    if (wheel) {
        wheel.style.transition = "none";
        wheel.style.transform = "rotate(0deg)";
    }

    if (spinButton) {
        spinButton.disabled = false;
    }

    if (prizeResult) {
        prizeResult.textContent = "Your reward will appear here!";
    }

    if (prizeDetails) {
        prizeDetails.innerHTML = "";
    }

    // Show the confirmation page.
    showSection("confirmation");
});

/**
 * Admin login and temporary passcode management.
 */

// Generate a random six digit passcode
function generateAdminPasscode() {
    return String(Math.floor(100000 + Math.random() * 900000))
}

// Initial admin passcode
let adminPasscode = "246810";

// Track whether admin is logged in
let isAdminLoggedIn = false;

// Handle admin login 
document.getElementById("admin-login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const enteredPasscode = document.getElementById("admin-passcode").value;
    const message = document.getElementById("admin-login-message");

    if (enteredPasscode === adminPasscode) {
        isAdminLoggedIn = true;
        message.textContent = "";
        document.getElementById("admin-passcode").value = "";

        showSection("admin-dashboard");
        displayAdminDashboard();
    } else {
        message.textContent = "Incorrect passcode. Please try again.";
    }
});

//Handle Admin Logout
document.getElementById("admin-logout-button").addEventListener("click", function() {
    isAdminLoggedIn = false;

    // Generate a new passcode for the next login
    adminPasscode = generateAdminPasscode();

    // Clear the login field 
    document.getElementById("admin-passcode").value="";

    alert("You have logged out. Your new temporary passcode is: " + adminPasscode);

    showSection("home");
});

/**
 * Displays the bakery's current orders and inventory.
 */
function displayAdminDashboard() {
    // Display today's date
    const today = new Date();
    document.getElementById("admin-date").textContent =
        today.toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        });

    // Find orders placed today
    const todaysOrders = orders.filter(function(order) {
        return new Date(order.placedAt).toDateString() === today.toDateString();
    });

    // Display the number of orders placed today
    document.getElementById("orders-today").textContent =
        todaysOrders.length;

    // Display today's order details
    const adminOrders = document.getElementById("admin-orders");
    adminOrders.innerHTML = "";

    if (todaysOrders.length === 0) {
        adminOrders.innerHTML = "<p>No orders have been placed today.</p>";
    } else {
        todaysOrders.forEach(function(order) {
            const orderCard = document.createElement("div");

            const itemNames = order.items.map(function(item) {
                return item.name + " x " + item.quantity;
            }).join(", ");

            // Check if any item in the order has a null price
            const hasUnpricedItems = order.items.some(function(item) {
                return item.price === null;
            });

            orderCard.innerHTML = `
                <h4>Order ${order.orderNumber}</h4>
                <p>Customer: ${order.firstName} ${order.lastName}</p>
                <p>Pickup Date: ${order.pickupDate}</p>
                <p>Items: ${itemNames}</p>
                <p>Total: ${hasUnpricedItems ? "TBD" : "$" + order.total.toFixed(2)}</p>
            `;

             // Create an order status selector
            const statusLabel = document.createElement("label");
            statusLabel.textContent = "Order Status: ";

            const statusSelect = document.createElement("select");

            const orderStatuses = [
                "Pending",
                "Preparing",
                "Ready for Pickup",
                "Completed"
            ];

            // Keep the current status, or default to Pending
            order.status = order.status || "Pending";

            orderStatuses.forEach(function(status) {
                const option = document.createElement("option");
                option.value = status;
                option.textContent = status;
                statusSelect.appendChild(option);
            });

            statusSelect.value = order.status;

            // Save the new status when the admin changes it
            statusSelect.addEventListener("change", function() {
                order.status = statusSelect.value;
            });

            statusLabel.appendChild(statusSelect);
            orderCard.appendChild(statusLabel);

            adminOrders.appendChild(orderCard);
        });
    }

    // Display current inventory in three categories
    const inStockDisplay = document.getElementById("admin-in-stock");
    const lowStockDisplay = document.getElementById("admin-low-stock");
    const outOfStockDisplay = document.getElementById("admin-out-of-stock");

    // Clear the sections before updating them
    inStockDisplay.innerHTML = "";
    lowStockDisplay.innerHTML = "";
    outOfStockDisplay.innerHTML = "";

    // Sort products into the correct inventory groups
    products.forEach(function(product) {
        const inventoryRow = document.createElement("p");

        inventoryRow.textContent =
            product.name + " — " + product.inventory + " remaining";

        if (product.inventory <= 0) {
            outOfStockDisplay.appendChild(inventoryRow);
        } else if (product.inventory <= 3) {
            lowStockDisplay.appendChild(inventoryRow);
        } else {
            inStockDisplay.appendChild(inventoryRow);
        }
    });

    // Show a message if a section is empty
    if (inStockDisplay.innerHTML === "") {
        inStockDisplay.textContent = "No products currently in stock.";
    }

    if (lowStockDisplay.innerHTML === "") {
        lowStockDisplay.textContent = "No low-stock products.";
    }

    if (outOfStockDisplay.innerHTML === "") {
        outOfStockDisplay.textContent = "No products are out of stock.";
    }
}

/* =========================================
   PRIZE SPINNER
   One spin and one reward per order
========================================= */

let activePrize = null;
let hasSpun = false;
let wheelRotation = 0;
let rewardApplied = false;
let discountRate = 0;

const prizeOptions = [
    { id: "sweet10", name: "10% OFF", chance: 29.33 },
    { id: "freeDonut", name: "FREE DONUT", chance: 29.33 },
    { id: "danishBogo", name: "BUY ONE, GET ONE DANISH FREE", chance: 29.34 },
    { id: "sweet20", name: "20% OFF", chance: 12 }
];

// Keep these angles aligned with your working wheel.
const prizeSliceCenters = [7.8, 113.4, 219, 293.4];

/**
 * Spins once and selects a reward.
 */
function spinPrizeWheel() {
    if (hasSpun) {
        document.getElementById("prize-result").textContent =
            "Your prize is already locked in for this order!";
        return;
    }

    if (cart.length === 0) {
        alert("Add an item to your cart before spinning!");
        return;
    }

    const wheel = document.getElementById("prize-wheel");
    const result = document.getElementById("prize-result");
    const spinButton = document.getElementById("spin-button");

    if (!wheel || !result || !spinButton) return;

    hasSpun = true;
    spinButton.disabled = true;
    result.textContent = "Spinning...";

    const randomNumber = Math.random() * 100;
    let runningTotal = 0;

    for (const prize of prizeOptions) {
        runningTotal += prize.chance;

        if (randomNumber < runningTotal) {
            activePrize = prize;
            break;
        }
    }

    const centerAngle =
        prizeSliceCenters[prizeOptions.indexOf(activePrize)];

    const targetRotation = (360 - centerAngle + 360) % 360;
    const currentRotation = wheelRotation % 360;
    const adjustment =
        (targetRotation - currentRotation + 360) % 360;

    wheelRotation += 5 * 360 + adjustment;

    wheel.style.transition =
        "transform 4s cubic-bezier(0.15, 0.8, 0.2, 1)";
    wheel.style.transform = `rotate(${wheelRotation}deg)`;

    setTimeout(function() {
        result.textContent = `You won: ${activePrize.name}!`;
        showPrizeDetails();
    }, 4100);
}

/**
 * Displays the appropriate reward information and selection menu.
 */
function showPrizeDetails() {
    const details = document.getElementById("prize-details");

    if (!details || !activePrize) return;

    details.innerHTML = "";

    const message = document.createElement("p");

    if (activePrize.id === "sweet10") {
        discountRate = 0.10;
        rewardApplied = true;

        message.textContent =
            "Use code SWEET10! Your 10% discount has been applied automatically.";

        details.appendChild(message);
        displayCart();
        return;
    }

    if (activePrize.id === "sweet20") {
        discountRate = 0.20;
        rewardApplied = true;

        message.textContent =
            "Your 20% discount has been applied automatically!";

        details.appendChild(message);
        displayCart();
        return;
    }

    if (activePrize.id === "freeDonut") {
        message.textContent =
            "Choose your free donut flavor:";

        details.appendChild(message);
        addRewardFlavorSelector(
            details,
            "Donuts",
            "Redeem Free Donut",
            redeemFreeDonut
        );
        return;
    }

    if (activePrize.id === "danishBogo") {
        message.textContent =
            "Choose the Danish flavor you want to buy. You'll receive a second one of the same flavor free!";

        details.appendChild(message);
        addRewardFlavorSelector(
            details,
            "Danishes",
            "Redeem Danish BOGO",
            redeemDanishBogo
        );
    }
}

/**
 * Creates a flavor selector for a reward.
 */
function addRewardFlavorSelector(container, category, buttonText, redeemFunction) {
    const selector = document.createElement("select");
    selector.id = "reward-flavor-select";

    const placeholder = document.createElement("option");
    placeholder.value = "";
    placeholder.textContent = "Choose a flavor";
    selector.appendChild(placeholder);

    products
        .filter(function(product) {
            return product.category === category && product.inventory > 0;
        })
        .forEach(function(product) {
            const option = document.createElement("option");
            option.value = product.id;
            option.textContent =
                `${product.name} — $${product.price.toFixed(2)}`;

            selector.appendChild(option);
        });

    const redeemButton = document.createElement("button");
    redeemButton.type = "button";
    redeemButton.textContent = buttonText;

    redeemButton.addEventListener("click", function() {
        if (!selector.value) {
            alert("Please choose a flavor first.");
            return;
        }

        redeemFunction(selector.value);
    });

    container.appendChild(selector);
    container.appendChild(redeemButton);
}

/**
 * Counts a product's quantity already in the cart.
 */
function getCartQuantity(productId) {
    return cart.reduce(function(total, item) {
        return total + (
            item.product.id === productId ? item.quantity : 0
        );
    }, 0);
}

/**
 * Redeems a free donut reward.
 */
function redeemFreeDonut(productId) {
    if (rewardApplied) {
        alert("Your reward has already been redeemed.");
        return;
    }

    const product = products.find(function(item) {
        return item.id === productId;
    });

    if (!product || product.category !== "Donuts") {
        alert("Please select a valid donut.");
        return;
    }

    if (getCartQuantity(productId) + 1 > product.inventory) {
        alert("There isn't enough stock for this reward.");
        return;
    }

    cart.push({
        product: product,
        quantity: 1,
        isFree: true,
        rewardItem: true
    });

    rewardApplied = true;

    document.getElementById("prize-result").textContent =
        `Your free ${product.name} has been added to the cart!`;

    document.getElementById("prize-details").innerHTML =
        "<p>Your free donut is in your cart.</p>";

    displayCart();
    updateCartDisplay();
}

/**
 * Redeems buy-one-get-one-free Danish.
 */
function redeemDanishBogo(productId) {
    if (rewardApplied) {
        alert("Your reward has already been redeemed.");
        return;
    }

    const product = products.find(function(item) {
        return item.id === productId;
    });

    if (!product || product.category !== "Danishes") {
        alert("Please select a valid Danish.");
        return;
    }

    if (getCartQuantity(productId) + 2 > product.inventory) {
        alert("There isn't enough stock for both Danishes.");
        return;
    }

    // Add the paid Danish and the free Danish as linked reward items.
    cart.push({
        product: product,
        quantity: 1,
        rewardItem: true,
        rewardPair: productId
    });

    cart.push({
        product: product,
        quantity: 1,
        isFree: true,
        rewardItem: true,
        rewardPair: productId
    });

    rewardApplied = true;

    document.getElementById("prize-result").textContent =
        `Buy one, get one free! Two ${product.name}s have been added.`;

    document.getElementById("prize-details").innerHTML =
        "<p>One Danish is paid; the second is free.</p>";

    displayCart();
    updateCartDisplay();
}

document.getElementById("spin-button").addEventListener(
    "click",
    spinPrizeWheel
);

// Jump to a product category when its menu button is clicked
document.querySelectorAll("#menu-category-nav button").forEach(function(button) {
    button.addEventListener("click", function() {
        const targetCategory = button.dataset.category.trim().toLowerCase();

        const categorySections = document.querySelectorAll(
            "#product-list .menu-category-section"
        );

        let matchingSection = null;

        categorySections.forEach(function(section) {
            const heading = section.querySelector(".menu-category-heading");

            if (
                heading &&
                heading.textContent.trim().toLowerCase() === targetCategory
            ) {
                matchingSection = section;
            }
        });

        if (matchingSection) {
            matchingSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        } else {
            console.log("Category not found:", button.dataset.category);
        }
    });
});

/**
 * Displays fall seasonal specials on the home page.
 */
function displaySeasonalProducts() {
    const seasonalList = document.getElementById("seasonal-product-list");

    if (!seasonalList) {
        return;
    }

    seasonalList.innerHTML = "";

    seasonalProducts.fall.forEach(function(product) {
        const card = document.createElement("div");
        card.className = "product-card seasonal-product-card";

        const priceDisplay = product.price === null
            ? "Price to be determined"
            : "$" + product.price.toFixed(2);

        card.innerHTML = `
            <img
                src="${product.image}"
                alt="${product.name}"
                class="product-image"
            >

            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p class="product-price">${priceDisplay}</p>

            <p class="product-stock">
                ${product.inventory > 0
                    ? product.inventory + " available"
                    : "Out of stock"}
            </p>

            <button
                type="button"
                onclick="addToCart('${product.id}')"
                ${product.inventory <= 0 ? "disabled" : ""}
            >
                ${product.inventory > 0 ? "Add to Cart" : "Sold Out"}
            </button>
        `;

        seasonalList.appendChild(card);
    });
}

/**
 * Filters the menu as the customer types.
 * Hides categories that have no matching products.
 */
function filterMenuProducts() {
    const searchInput = document.getElementById("product-search");
    const message = document.getElementById("product-search-message");
    const query = searchInput.value.trim().toLowerCase();

    let totalMatches = 0;

    document.querySelectorAll("#product-list .menu-category-section")
        .forEach(function(section) {
            let categoryMatches = 0;

            section.querySelectorAll(".product-card").forEach(function(card) {
                const matches = card.textContent.toLowerCase().includes(query);

                card.style.display = matches ? "" : "none";

                if (matches) {
                    categoryMatches++;
                    totalMatches++;
                }
            });

            section.style.display = categoryMatches > 0 ? "" : "none";
        });

    if (message) {
        if (query === "") {
            message.textContent = "";
        } else if (totalMatches === 0) {
            message.textContent = "No matching products found.";
        } else {
            message.textContent = totalMatches +
                (totalMatches === 1 ? " product found." : " products found.");
        }
    }
}

/**
 * Searches regular and seasonal products from the cart.
 */
function searchCartProducts() {
    const searchInput = document.getElementById("cart-product-search");
    const resultsContainer = document.getElementById("cart-search-results");

    if (!searchInput || !resultsContainer) {
        return;
    }

    const query = searchInput.value.trim().toLowerCase();
    resultsContainer.innerHTML = "";

    if (query === "") {
        resultsContainer.textContent = "Start typing to find more treats.";
        return;
    }

    const allSeasonalProducts = Object.values(seasonalProducts).flat();
    const allProducts = [...products, ...allSeasonalProducts];

    const matches = allProducts.filter(function(product) {
        return (
            product.name.toLowerCase().includes(query) ||
            product.category.toLowerCase().includes(query) ||
            product.description.toLowerCase().includes(query)
        );
    });

    if (matches.length === 0) {
        resultsContainer.textContent = "No matching products found.";
        return;
    }

    matches.forEach(function(product) {
        const result = document.createElement("div");
        result.className = "cart-search-result";

        const name = document.createElement("h4");
        name.textContent = product.name;

        const description = document.createElement("p");
        description.textContent = product.description;

        const price = document.createElement("p");
        price.textContent = product.price === null
            ? "Price to be determined"
            : "$" + product.price.toFixed(2);

        const stock = document.createElement("p");
        stock.textContent = product.inventory > 0
            ? product.inventory + " in stock"
            : "Out of stock";

        const button = document.createElement("button");
        button.type = "button";
        button.textContent = product.inventory > 0
            ? "Add to Cart"
            : "Sold Out";
        button.disabled = product.inventory <= 0;

        button.addEventListener("click", function() {
            addToCart(product.id);
        });

        result.appendChild(name);
        result.appendChild(description);
        result.appendChild(price);
        result.appendChild(stock);
        result.appendChild(button);

        resultsContainer.appendChild(result);
    });
}

const cartProductSearchInput =
    document.getElementById("cart-product-search");

if (cartProductSearchInput) {
    cartProductSearchInput.addEventListener("input", searchCartProducts);
}

// Update the menu immediately when the search changes.
const productSearchInput = document.getElementById("product-search");

if (productSearchInput) {
    productSearchInput.addEventListener("input", filterMenuProducts);
}

/**
 * Displays product photos in the bakery gallery.
 * Uses the same product data as the menu and seasonal specials.
 */
function displayGallery() {
    const galleryGrid = document.getElementById("gallery-grid");

    if (!galleryGrid) {
        return;
    }

    galleryGrid.innerHTML = "";

    // Combine regular products and all seasonal products.
    const allSeasonalProducts = Object.values(seasonalProducts).flat();
    const allProducts = [...products, ...allSeasonalProducts];

    allProducts.forEach(function(product) {
        const galleryCard = document.createElement("div");
        galleryCard.className = "gallery-card";

        const image = document.createElement("img");
        image.src = product.image;
        image.alt = product.name;
        image.loading = "lazy";

        // Hide a photo if its image URL is broken.
        image.addEventListener("error", function() {
            galleryCard.style.display = "none";
        });

        const caption = document.createElement("h3");
        caption.textContent = product.name;

        galleryCard.appendChild(image);
        galleryCard.appendChild(caption);
        galleryGrid.appendChild(galleryCard);
    });
}

/**
 * Displays image paths and source links for all products.
 */
function displayImageSources() {
    const sourcesList = document.getElementById("image-sources-list");

    if (!sourcesList) {
        return;
    }

    sourcesList.innerHTML = "";

    // Include regular products and every seasonal collection.
    const allSeasonalProducts = Object.values(seasonalProducts).flat();
    const allProducts = [...products, ...allSeasonalProducts];

    allProducts.forEach(function(product) {
        const card = document.createElement("div");
        card.className = "image-source-card";

        const name = document.createElement("h3");
        name.textContent = product.name;

        const imagePath = document.createElement("p");
        imagePath.textContent = "Image used: " + product.image;

        const sourceLabel = document.createElement("p");
        sourceLabel.textContent = "Original image source: ";

        if (
            product.imageSource &&
            /^https?:\/\//i.test(product.imageSource)
        ) {
            const link = document.createElement("a");
            link.href = product.imageSource;
            link.textContent = "Open source page";
            link.target = "_blank";
            link.rel = "noopener noreferrer";
            sourceLabel.appendChild(link);
        } else {
            sourceLabel.appendChild(
                document.createTextNode("Source link not added yet.")
            );
        }

        card.appendChild(name);
        card.appendChild(imagePath);
        card.appendChild(sourceLabel);
        sourcesList.appendChild(card);
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
    displayCart();
});

document.getElementById("view-menu-button").addEventListener("click", function() {
    showSection("menu");
});

document.getElementById("admin-button").addEventListener("click", function() {
    showSection("admin-login");
});

document.getElementById("gallery-button").addEventListener("click", function() {
    showSection("gallery");
    displayGallery();
});

// Open image sources only for a logged-in admin.
document.getElementById("admin-sources-button").addEventListener(
    "click",
    function() {
        if (!isAdminLoggedIn) {
            alert("Please log in as an admin first.");
            return;
        }

        displayImageSources();
        showSection("admin-sources");
    }
);

// Return to the existing admin dashboard.
document.getElementById("back-to-admin-button").addEventListener(
    "click",
    function() {
        if (!isAdminLoggedIn) {
            showSection("admin-login");
            return;
        }

        showSection("admin-dashboard");
        displayAdminDashboard();
    }
);

// Start on Home
showSection("home");

// Display Products
displayCart();
updateCartDisplay();
displayProducts();
displaySeasonalProducts();
filterMenuProducts();
displayGallery();
