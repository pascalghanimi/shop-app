import { cart } from "./cart.js";
import { itemsMen, itemsWomen } from "./items.js";

const summary = document.getElementById("summary");
const totalPrice = document.getElementById("total-price");

export const calculateTotalPrice = () => {
  let priceOfAllItems = 0;

  cart.forEach((item) => {
    // Items Men
    itemsMen.forEach((itemMen) => {
      if (itemMen.id === item.id) {
        const container = document.createElement("div");
        container.classList.add("summary-item-container");

        const imageWrapperDiv = document.createElement("div");
        const image = document.createElement("img");
        image.src = itemMen.image;
        image.classList.add("summary-image");
        imageWrapperDiv.append(image);

        const infoWrapperDiv = document.createElement("div");
        infoWrapperDiv.classList.add("info-wrapper");

        const title = document.createElement("p");
        title.textContent = itemMen.name;
        title.classList.add("summary-title");

        const summaryInfoContainer = document.createElement("div");
        const material = document.createElement("p");
        material.classList.add("summary-info");
        material.textContent = itemMen.material;
        const weight = document.createElement("p");
        weight.classList.add("summary-info");
        weight.textContent = itemMen.weight;
        summaryInfoContainer.append(material, weight);

        const price = document.createElement("p");
        price.textContent = "$" + itemMen.price;

        const statsContainer = document.createElement("div");
        statsContainer.classList.add("summary-price-and-info");
        statsContainer.append(summaryInfoContainer, price);

        infoWrapperDiv.append(title, statsContainer);
        container.append(imageWrapperDiv, infoWrapperDiv);
        summary.prepend(container);

        priceOfAllItems += itemMen.price * item.amount;
      }
    });

    // Items Women
    itemsWomen.forEach((itemWomen) => {
      if (itemWomen.id === item.id) {
        const container = document.createElement("div");
        container.classList.add("summary-item-container");

        const imageWrapperDiv = document.createElement("div");
        const image = document.createElement("img");
        image.src = itemWomen.image;
        image.classList.add("summary-image");
        imageWrapperDiv.append(image);

        const infoWrapperDiv = document.createElement("div");
        infoWrapperDiv.classList.add("info-wrapper");

        const title = document.createElement("p");
        title.textContent = itemWomen.name;
        title.classList.add("summary-title");

        const summaryInfoContainer = document.createElement("div");
        const material = document.createElement("p");
        material.classList.add("summary-info");
        material.textContent = itemWomen.material;
        const weight = document.createElement("p");
        weight.classList.add("summary-info");
        weight.textContent = itemWomen.weight;
        summaryInfoContainer.append(material, weight);

        const price = document.createElement("p");
        price.textContent = "$" + itemWomen.price;

        const statsContainer = document.createElement("div");
        statsContainer.classList.add("summary-price-and-info");
        statsContainer.append(summaryInfoContainer, price);

        infoWrapperDiv.append(title, statsContainer);
        container.append(imageWrapperDiv, infoWrapperDiv);
        summary.prepend(container);

        priceOfAllItems += itemWomen.price * item.amount;
      }
    });
  });

  totalPrice.textContent = "$" + priceOfAllItems.toFixed(2);
};

calculateTotalPrice();
