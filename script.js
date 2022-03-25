const menuBtn = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu");
const menuHeadersText = document.querySelectorAll(".list-header-text-wrap");

function headerClick(e) {
  const headerMainElement = e.currentTarget.parentNode;
  headerMainElement.classList.toggle("show");
  document.activeElement.blur();
}

function addShowtomenu() {
  menu.classList.toggle("show");
}

let mobileNavEventListeners = false;

const mobileNav = () => {
  // if mobile width resize
  if (window.innerWidth <= 1078) {
    if (mobileNavEventListeners === false) {
      mobileNavEventListeners = true;
      // [...menuHeadersText].forEach((headerText) => {
      menuHeadersText.forEach((headerText) => {
        headerText.addEventListener("click", headerClick);
      });
      menuBtn.addEventListener("click", addShowtomenu);
    } else {
      return;
    }
  } else {
    // if desktop width resize
    if (mobileNavEventListeners === true) {
      mobileNavEventListeners = false;
      // [...menuHeadersText].forEach((headerText) => {
      menuHeadersText.forEach((headerText) => {
        const headerMainElement = headerText.parentNode;
        headerMainElement.classList.remove("show");
        headerText.removeEventListener("click", headerClick);
      });
      menu.classList.remove("show");
      menuBtn.removeEventListener("click", addShowtomenu);
    } else {
      return;
    }
  }
};

mobileNav();
window.onresize = mobileNav;
