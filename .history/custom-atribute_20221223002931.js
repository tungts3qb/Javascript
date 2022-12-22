const link = document.querySelector(".link");
link.addEventListener("click", function (event) {
  event.preventDefault();
  // lấy data từ data-name
  const name = event.target.dataset.name;
  // nếu tên dài như thế này data-name-abc -> dataset.nameAbc
  console.log(name);
});
