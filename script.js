const products = [
    { name: "iPhone 14 Pro Max", cat: "mobiles", price: 1200 },
    { name: "iPhone 13", cat: "mobiles", price: 800 },
    { name: "iPhone 11 Screen", cat: "screens", price: 120 },
    { name: "iPhone X Screen", cat: "screens", price: 90 },
    { name: "iPhone 12 Battery", cat: "batteries", price: 40 },
    { name: "iPhone 8 Battery", cat: "batteries", price: 25 },
    { name: "Charging Port iPhone 11", cat: "others", price: 18 },
    { name: "Camera Lens iPhone 12", cat: "others", price: 15 },
];

function displayProducts(list) {
    const container = document.getElementById("products");
    container.innerHTML = "";
    list.forEach(p => {
        container.innerHTML += `
            <div class="product">
                <h3>${p.name}</h3>
                <p>Price: $${p.price}</p>
                <button class="btn">Add to Cart</button>
            </div>`;
    });
}

function filterProducts(cat) {
    if (cat === "all") displayProducts(products);
    else displayProducts(products.filter(p => p.cat === cat));
}

function searchProducts() {
    const q = document.getElementById("search").value.toLowerCase();
    displayProducts(products.filter(p => p.name.toLowerCase().includes(q)));
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".chip").forEach(chip => {
        chip.addEventListener("click", () => {
            const category = chip.innerText.toLowerCase();
            if (category === "all") filterProducts("all");
            else if (category === "mobiles") filterProducts("mobiles");
            else if (category === "screens") filterProducts("screens");
            else if (category === "batteries") filterProducts("batteries");
            else filterProducts("others");
        });
    });
    displayProducts(products);
});