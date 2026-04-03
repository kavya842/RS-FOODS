let container = document.getElementById("recipesContainer");

fetch("https://dummyjson.com/recipes")
    .then(res => res.json())
    .then(data => {

        data.recipes.forEach(item => {

            let card = document.createElement("div");
            card.classList.add("card");

            card.innerHTML = `
                <img src="${item.image}" alt="food">

                <div class="content">
                    <h3>${item.name}</h3>
                    <p>${item.cuisine}</p>
                    <p>⭐ ${item.rating}</p>

                    <button class="cartBtn">
                        Add to Cart 
                    </button>

                    <button class="orderBtn">
                        Order Now 
                    </button>
                </div>
            `;

            // CLICK ON CARD → DETAILS PAGE
            card.addEventListener("click", () => {
                localStorage.setItem("selectedRecipe", JSON.stringify(item));
                window.location.href =  "../details/details.html";
            });

            // BUTTONS separate ga handle cheyyali
            let cartBtn = card.querySelector(".cartBtn");
            let orderBtn = card.querySelector(".orderBtn");

            // CART BUTTON
            cartBtn.addEventListener("click", (e) => {
                e.stopPropagation(); // ❗ important
                addToCart(item.name, item.rating, item.image);
            });

            // ORDER BUTTON
            orderBtn.addEventListener("click", (e) => {
                e.stopPropagation(); // ❗ important
                addToOrder(item.name, item.rating, item.image);
            });

            container.appendChild(card);
        });
    });


//ADD TO CART
function addToCart(name, price, image) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let existing = cart.find(item => item.title === name);

    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({
            title: name,
            price: price,
            image: image,
            qty: 1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Added to Cart ");
}


//ADD TO ORDER
function addToOrder(name, price, image) {

    let order = JSON.parse(localStorage.getItem("order")) || [];

    order.push({
        title: name,
        price: price,
        image: image
    });

    localStorage.setItem("order", JSON.stringify(order));

    window.location.href = "../order/order.html";
}