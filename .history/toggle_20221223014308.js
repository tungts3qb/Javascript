const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

toggle.addEventListener("click", function (event) {
  menu.classList.toggle("is-show");
});
