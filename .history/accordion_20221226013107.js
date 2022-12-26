const accordionHeaders = document.querySelectorAll(".accordion-header");
[...accordionHeaders].forEach((item) =>
  item.addEventListener("click", handleClickAccordion)
);

function handleClickAccordion(e) {
  e.target.nextElementSibling.classList.add("is-active");
  const icon = e.target.querySelector(".icon");
  icon.classList.remove("fa-angle-down");
  icon.classList.add("fa-angle-up");
}
