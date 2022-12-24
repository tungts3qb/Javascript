const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

toggle.addEventListener("click", function (event) {
  event.target.classList("fa-times");
  menu.classList.toggle("is-show");
});
