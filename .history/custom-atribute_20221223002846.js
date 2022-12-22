const link = document.querySelector(".link");
link.addEventListener("click", function (event) {
  event.preventDefault();
  // lấy data từ data-name
  const name = event.target.dataset.name;
  console.log(name);
});
