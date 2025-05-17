// Global cart object to manage cart items
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Add item to cart
function addToCart() {
  const item = {
    name: "360 Photo Booth",
    price: 299, // Example price per day
    quantity: 1,
  };
  
  // Check if item already exists in cart and update quantity if so
  const existingItem = cart.find(cartItem => cartItem.name === item.name);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push(item);
  }

  // Save the updated cart to localStorage
  localStorage.setItem("cart", JSON.stringify(cart));

  // Optional: Update the cart display immediately (e.g., show cart count in header)
  updateCartDisplay();
}

// Update cart display (optional feature)
function updateCartDisplay() {
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  document.getElementById("cart-count").textContent = `Cart: ${cartCount} items`;
}

// Get cart details and display them on the checkout page
function displayCartItems() {
  const cartContainer = document.getElementById("cart-items");
  cartContainer.innerHTML = ""; // Clear any previous cart items

  let total = 0;
  cart.forEach(item => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;
    const itemElement = document.createElement("div");
    itemElement.innerHTML = `
      <p>${item.name} - $${item.price} x ${item.quantity} = $${itemTotal}</p>
    `;
    cartContainer.appendChild(itemElement);
  });

  // Display total, taxes, and shipping on the checkout page
  const taxRate = 0.1; // Example 10% tax
  const shippingFee = 20; // Example flat shipping fee
  const tax = total * taxRate;
  const grandTotal = total + tax + shippingFee;

  document.getElementById("total").textContent = `Subtotal: $${total.toFixed(2)}`;
  document.getElementById("tax").textContent = `Taxes (10%): $${tax.toFixed(2)}`;
  document.getElementById("shipping").textContent = `Shipping: $${shippingFee.toFixed(2)}`;
  document.getElementById("grand-total").textContent = `Total: $${grandTotal.toFixed(2)}`;
}

// Clear cart after checkout
function clearCart() {
  localStorage.removeItem("cart");
  cart = [];
  updateCartDisplay();  // Update cart display (if applicable)
  window.location.href = "index.html"; // Redirect to homepage or another page
}
