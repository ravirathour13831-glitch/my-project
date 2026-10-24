


const products = [
  { id: 1, name: "3 Ply Carton Box", price: 18 },
  { id: 2, name: "5 Ply Carton Box", price: 32 }
];

let cart = [];

const addButtons = document.querySelectorAll(".product button");

addButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const product = products[index];
    const existing = cart.find(item => item.id === product.id);

    if (existing) {
      existing.quantity++;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    renderCart();
  });
});

function renderCart() {
  const cartItems = document.querySelector("#cart-items");
  const cartCount = document.querySelector("#cart-count");
  const cartTotal = document.querySelector("#cart-total");

  cartItems.innerHTML = "";

  cart.forEach(item => {
    const div = document.createElement("div");
    div.className = "cart-item";

    div.innerHTML = `
      <div>
        <strong>${item.name}</strong>
        <p>₹${item.price} × ${item.quantity}</p>
      </div>

      <div>
        <button data-action="minus" data-id="${item.id}">−</button>
        <button data-action="plus" data-id="${item.id}">+</button>
        <button data-action="remove" data-id="${item.id}">Remove</button>
      </div>
    `;

    cartItems.appendChild(div);
  });

  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  cartCount.textContent = count;
  cartTotal.textContent = total;
}

document.querySelector("#cart-items").addEventListener("click", event => {
  const button = event.target.closest("button[data-action]");
  if (!button) return;

  const id = Number(button.dataset.id);
  const item = cart.find(product => product.id === id);

  if (!item) return;

  if (button.dataset.action === "plus") {
    item.quantity++;
  } else if (button.dataset.action === "minus") {
    item.quantity--;
    if (item.quantity <= 0) {
      cart = cart.filter(product => product.id !== id);
    }
  } else if (button.dataset.action === "remove") {
    cart = cart.filter(product => product.id !== id);
  }

  renderCart();
});
