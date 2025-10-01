const navBarOpen = document.getElementById("nav-bar-open");
const navBarClose = document.getElementById("nav-bar-close");
const openBtn = document.getElementById("open-btn");
const closeBtn = document.getElementById("close-btn");
const colorButtons = document.querySelectorAll("[data-color]");
const allShoes = document.querySelectorAll("[data-shoes]");

colorButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    allShoes.forEach((shoe) => {
      if (btn.dataset.color === shoe.dataset.shoes) {
        shoe.classList.add("active");
      } else {
        shoe.classList.remove("active");
      }
    });
  });
});

openBtn.addEventListener("click", () => {
  navBarClose.classList.remove("active");
  navBarOpen.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  navBarClose.classList.add("active");
  navBarOpen.classList.remove("active");
});
