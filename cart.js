const saved = localStorage.getItem("cart");
export const cart = saved ? JSON.parse(saved) : [];
let totalAmount = 0;
console.log(cart);

const amountBadge = document.getElementById("amount-badge");
export const updateAmountBadge = () => {
  totalAmount = 0;
  cart.forEach((item) => {
    totalAmount += item.amount;
  });

  amountBadge.textContent = totalAmount;
};

updateAmountBadge();
