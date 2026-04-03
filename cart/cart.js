let cart = JSON.parse(localStorage.getItem("cart")) || [];
let container = document.getElementById("cartContainer");
let totalEl = document.getElementById("total");

function displayCart() {

    container.innerHTML = "";
    let total = 0;

    // Empty cart
    if (cart.length === 0) {
        container.innerHTML = "<h2>Your cart is empty</h2>";
        totalEl.textContent = "";
        return;
    }

    cart.forEach((item, index) => {

        let price = Number(item.price) || 0;
        let qty = item.qty || 1;

        let itemTotal = price * qty; 
        total += itemTotal;

        container.innerHTML += `
        <div class="cart-card">
            <img src="${item.image}">

            <div>
                <h3>${item.title}</h3>

                <!--Total price based on qty -->
                <p class="price">₹${itemTotal*90}</p>

                <p>Qty: ${qty}</p>

                <div class="qty">
                    <button onclick="decrease(${index})">-</button>
                    <span>${qty}</span>
                    <button onclick="increase(${index})">+</button>
                </div>

                <button onclick="removeItem(${index})" class="remove">Remove</button>
            </div>
        </div>
        `;
    });

    // Total
  totalEl.textContent = "Total: ₹" + total*90;
}

//Increase
function increase(i) {
    cart[i].qty = (cart[i].qty || 1) + 1;
    update();
}

// Decrease
function decrease(i) {
    if ((cart[i].qty || 1) > 1) {
        cart[i].qty--;
    } else {
        cart.splice(i, 1);
    }
    update();
}

//Remove button
function removeItem(i) {
    cart.splice(i, 1);
    update();
}

// Update
function update() {
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

displayCart();