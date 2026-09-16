//navigation buttons
function showSection(sectionId) {
    const sections = document.querySelectorAll("main section");

    sections.forEach(function(section) {
        section.style.display = "none";
    });

    document.getElementById(sectionId).style.display = "block";
}

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

showSection("home");