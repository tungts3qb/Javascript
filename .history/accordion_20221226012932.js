const accordionHeaders = document.querySelectorAll(".accordion-header");
[...accordionHeaders].forEach((item) =>
  item.addEventListener("click", handleClickAccordion)
);

function handleClickAccordion(e) {
  //   console.log(e.target);
  e.target.nextElementSibling.classList.add("is-active");
  const icon = e.target.querySelector(".icon");
  console.log(icon);
}
