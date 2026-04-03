let cart = JSON.parse(localStorage.getItem("cart")) || [];
let container = document.getElementById("cartContainer");
let totalEl = document.getElementById("total");

function displayCart() {

    container.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {

        total += item.price * item.qty;

        container.innerHTML += `
        <div class="cart-card">
            <img src="${item.image}">

            <div>
                <h3>${item.title}</h3>
                <p>₹${item.price}</p>

                <div class="qty">
                    <button onclick="decrease(${index})">-</button>
                    <span>${item.qty}</span>
                    <button onclick="increase(${index})">+</button>
                </div>

                <button onclick="removeItem(${index})" class="remove">Remove</button>
            </div>
        </div>
        `;
    });

    totalEl.innerHTML = "Total: ₹" + total;
}

function increase(i) {
    cart[i].qty++;
    update();
}

function decrease(i) {
    if (cart[i].qty > 1) cart[i].qty--;
    update();
}

function removeItem(i) {
    cart.splice(i, 1);
    update();
}

function update() {
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

displayCart();