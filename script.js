const menuBtn = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu");

const menuHeadersText = document.querySelectorAll(".list-header-text-wrap");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("show");
});

menuHeadersText.forEach((headerText) => {
  headerText.addEventListener("click", () => {
    const headerMainElement = headerText.parentNode;
    headerMainElement.classList.toggle("show");
  });
});
