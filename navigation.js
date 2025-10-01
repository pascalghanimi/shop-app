const pages = document.querySelectorAll("[data-page]");
const pageButtons = document.querySelectorAll("[data-page-buttons]");
const navBarClose = document.getElementById("nav-bar-close");
const navBarOpen = document.getElementById("nav-bar-open");

pageButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    navBarClose.classList.add("active");
    navBarOpen.classList.remove("active");
    pages.forEach((page) => {
      if (page.dataset.page === btn.dataset.pageButtons) {
        page.classList.add("active");
      } else {
        page.classList.remove("active");
      }
    });
  });
});
