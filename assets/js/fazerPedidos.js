const cart = []; // Lista de itens do carrinho

const cartPopup = document.getElementById("cart-popup");

const cartItems = document.getElementById("cart-items");
const totalPrice = document.getElementById("total-price");
const viewCartBtn = document.getElementById("view-cart");
const closeCartBtn = document.getElementById("close-cart");

// Adiciona itens ao carrinho
document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", () => {
        const name = button.dataset.name;
        const price = parseFloat(button.dataset.price);

        cart.push({ name, price });
        alert(`${name} adicionado ao carrinho!`);
    });
});

// Exibe o carrinho
viewCartBtn.addEventListener("click", () => {
    if (cart.length === 0) {
        alert("Seu carrinho está vazio!");
        return;
    }

    cartPopup.style.display = "block";
    renderCart();
});

// Fecha o carrinho
closeCartBtn.addEventListener("click", () => {
    cartPopup.style.display = "none";
});

// Atualiza o carrinho
function renderCart() {
    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remover";
        removeBtn.style.marginLeft = "10px";
        removeBtn.addEventListener("click", () => {
            cart.splice(index, 1);
            renderCart();
        });

        li.appendChild(removeBtn);
        cartItems.appendChild(li);

        total += item.price;
    });

    totalPrice.textContent = `Total: R$ ${total.toFixed(2)}`;
}
const checkoutButton = document.getElementById("checkout");

checkoutButton.addEventListener("click", () => {
    if (cart.length === 0) {
        alert("Seu carrinho está vazio!");
        return;
    }

    // Simulação de redirecionamento para a página de pagamento
    localStorage.setItem("cartItems", JSON.stringify(cart)); // Armazena o carrinho no localStorage
    localStorage.setItem("totalPrice", totalPrice.textContent); // Armazena o total no localStorage
    window.location.href = "checkout.html"; // Redireciona para a página de pagamento
});
// Exibe o carrinho como pop-up
viewCartBtn.addEventListener("click", () => {
  if (cart.length === 0) {
      alert("Seu carrinho está vazio!");
      return;
  }

  cartPopup.style.display = "block"; // Torna o pop-up visível
  document.body.classList.add("modal-open"); // Impede rolagem
  renderCart();
});

// Fecha o carrinho e restaura o layout
closeCartBtn.addEventListener("click", () => {
  cartPopup.style.display = "none"; // Oculta o pop-up
  document.body.classList.remove("modal-open"); // Permite rolagem novamente
});
