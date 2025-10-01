import { itemsMen, itemsWomen, popularProducts, newProducts } from "./items.js";
import { cart, updateAmountBadge } from "./cart.js";
import { calculateTotalPrice } from "./render-cart.js";

const menItemContainer = document.querySelector(".men-item-container");
const womenItemContainer = document.querySelector(".women-item-container");
const popularItemsContainer = document.getElementById(
  "popular-items-container"
);
const newProductsContainer = document.getElementById("new-products");

const renderItems = (items, itemContainer) => {
  items.forEach((item) => {
    let amountOfItems = 0;
    // create the wrapper
    const itemWrapper = document.createElement("div");
    itemWrapper.classList.add("item-wrapper");

    //create top image
    const img = document.createElement("img");
    img.src = item.image;
    img.classList.add("item-image");
    itemWrapper.append(img);

    //create title
    const title = document.createElement("p");
    title.classList.add("item-title");
    title.textContent = item.name;
    itemWrapper.append(title);

    //create material
    const materialDiv = document.createElement("div");
    materialDiv.classList.add("material-container");
    const materialText = document.createElement("p");
    materialText.classList.add("material-info");
    materialText.textContent = "Material";
    const material = document.createElement("p");
    material.textContent = item.material;
    materialDiv.append(materialText);
    materialDiv.append(material);
    itemWrapper.append(materialDiv);

    //create weight
    const weightDiv = document.createElement("div");
    weightDiv.classList.add("weight-container");
    const weightText = document.createElement("p");
    weightText.classList.add("weight-info");
    weightText.textContent = "Weight";
    const weight = document.createElement("p");
    weight.textContent = item.weight;
    weightDiv.append(weightText);
    weightDiv.append(weight);
    itemWrapper.append(weightDiv);

    //create price
    const priceDiv = document.createElement("div");
    priceDiv.classList.add("price-container");
    const price = document.createElement("p");
    price.classList.add("price");
    price.textContent = `$${item.price}`;
    priceDiv.append(price);
    const selectAmountDiv = document.createElement("div");
    const minusButton = document.createElement("button");
    minusButton.textContent = "-";
    const plusButton = document.createElement("button");
    plusButton.textContent = "+";
    minusButton.classList.add("amount-btn");
    plusButton.classList.add("amount-btn");
    plusButton.addEventListener("click", () => {
      amountOfItems++;
      selectedNumber.textContent = amountOfItems;
    });
    minusButton.addEventListener("click", () => {
      if (amountOfItems > 0) {
        amountOfItems--;
        selectedNumber.textContent = amountOfItems;
      }
    });
    const selectedNumber = document.createElement("p");
    selectedNumber.textContent = amountOfItems;
    selectAmountDiv.append(minusButton);
    selectAmountDiv.append(selectedNumber);
    selectAmountDiv.append(plusButton);
    selectAmountDiv.classList.add("select-amount-container");
    priceDiv.append(price);
    priceDiv.append(selectAmountDiv);
    itemWrapper.append(priceDiv);

    //create button
    const addToCardBtnContainer = document.createElement("div");
    addToCardBtnContainer.classList.add("add-to-cart-btn-container");
    const addToCartBtn = document.createElement("button");
    addToCartBtn.classList.add("add-to-cart-btn");
    addToCartBtn.textContent = "Add to cart";
    addToCartBtn.addEventListener("click", () => {
      if (amountOfItems >= 1) {
        cart.push({ id: item.id, amount: amountOfItems });
        localStorage.setItem("cart", JSON.stringify(cart));
        amountOfItems = 0;
        selectedNumber.textContent = amountOfItems;
        updateAmountBadge();
        calculateTotalPrice();
      }
    });
    addToCardBtnContainer.append(addToCartBtn);
    itemWrapper.append(addToCardBtnContainer);

    //append itemWrapper to menItemContainer
    itemContainer.append(itemWrapper);
  });
};

renderItems(itemsMen, menItemContainer);
renderItems(itemsWomen, womenItemContainer);

renderItems(popularProducts, popularItemsContainer);
renderItems(newProducts, newProductsContainer);
