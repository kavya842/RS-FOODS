// Update nav badge counts
function updateCounts() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const order = JSON.parse(localStorage.getItem("order")) || [];

  const cartTotal = cart.reduce((sum, i) => sum + (i.qty || 1), 0);
  const orderTotal = order.reduce((sum, i) => sum + (i.quantity || 1), 0);

  document.getElementById("cartCount").textContent = cartTotal;
  document.getElementById("orderCount").textContent = orderTotal;
}

updateCounts();