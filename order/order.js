let container = document.getElementById("orderContainer");
let totalPriceEl = document.getElementById("totalPrice");

let orders = JSON.parse(localStorage.getItem("order")) || [];

//Display Orders
function displayOrders() {
    container.innerHTML = "";
    let total = 0;

    //Empty cart check
    if (orders.length === 0) {
        container.innerHTML = "<h2>Your cart is empty</h2>";
        totalPriceEl.textContent = "";
        return;
    }

    orders.forEach((item, index) => {

        let price = Number(item.price) || 0;
        let quantity = item.quantity || 1;

        let itemTotal = price * quantity;   
        total += itemTotal;

        container.innerHTML += `
            <div class="card">
                <img src="${item.image}">
                <div class="content">
                    <h3>${item.title}</h3>
                    <!-- Quantity calculation -->
                   <p class="price">₹${(itemTotal * 76).toFixed(2)}</p>
                     <p>Qty: ${quantity}</p>

                    <div class="controls">
                        <button onclick="decrease(${index})">-</button>
                        <span>${quantity}</span>
                        <button onclick="increase(${index})">+</button>
                    </div>
                </div>
            </div>
        `;
    });

    // Total display
   totalPriceEl.textContent = "₹" + (total * 76).toFixed(2);
}

// Increase quantity
function increase(index) {
    orders[index].quantity = (orders[index].quantity || 1) + 1;
    updateCart();
}

//Decrease quantity
function decrease(index) {
    if ((orders[index].quantity || 1) > 1) {
        orders[index].quantity--;
    } else {
        orders.splice(index, 1); 
    }
    updateCart();
}

//Update cart
function updateCart() {
    localStorage.setItem("order", JSON.stringify(orders));
    displayOrders();
}

//Initial call
displayOrders();