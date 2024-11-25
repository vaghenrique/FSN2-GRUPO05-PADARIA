// Recupera os itens do carrinho do localStorage

const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

const totalPrice = localStorage.getItem("totalPrice") || "Total: R$ 0,00";

// Elementos da página
const checkoutItems = document.getElementById("checkout-items");
const checkoutTotal = document.getElementById("checkout-total");
const returnToMenuButton = document.getElementById("return-to-menu");

// Renderiza os itens do carrinho
cartItems.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;
    checkoutItems.appendChild(li);
});

// Exibe o total
checkoutTotal.textContent = totalPrice;

// Botão para voltar ao cardápio
returnToMenuButton.addEventListener("click", () => {
    window.location.href = "index.html"; // Redireciona para o cardápio
});

// Simulação de submissão do formulário de pagamento
const paymentForm = document.getElementById("payment-form");

paymentForm.addEventListener("submit", event => {
    event.preventDefault(); // Impede o comportamento padrão do formulário

    alert("Pagamento realizado com sucesso! Obrigado por comprar na Boulangerie Pain d'Or.");
    localStorage.clear(); // Limpa o carrinho após o pagamento
    window.location.href = "index.html"; // Redireciona para a página inicial
});