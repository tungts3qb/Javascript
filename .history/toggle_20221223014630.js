const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

toggle.addEventListener("click", function (event) {
  event.target.classList.add("fa-times");
  //   event.target.classList.removw("fa-bars");
  menu.classList.toggle("is-show");
});
