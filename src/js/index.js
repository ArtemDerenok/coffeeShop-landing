window.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".mobile-menu"),
    menuItem = document.querySelectorAll(".mobile-menu__list-item"),
    hamburger = document.querySelector(".hamburger");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger_active");
    menu.classList.toggle("mobile-menu_active");
  });

  menu.addEventListener("click", () => {
    hamburger.classList.remove("hamburger_active");
    menu.classList.remove("mobile-menu_active");
  });

  menuItem.forEach((item) => {
    item.addEventListener("click", () => {
      hamburger.classList.toggle("hamburger_active");
      menu.classList.toggle("mobile-menu_active");
    });
  });
});
