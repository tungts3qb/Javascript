const link = document.querySelector(".link");
link.addEventListener("click", function (event) {
  event.preventDefault();
  const name = event.target.dataset.name;
  console.log(name);
});
