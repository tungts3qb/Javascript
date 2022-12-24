const tabItems = document.querySelectorAll(".tab-item");
const tabContents = document.querySelectorAll(".tab-content");
console.log(tabContents);
[...tabItems].forEach((item) => item.addEventListener("click", handleTabClick));
function handleTabClick(event) {
  [...tabItems].forEach((item) => item.classList.remove("active"));
  event.target.classList.add("active");
  const tabNumber = parseInt(event.target.dataset.tab);
  [...tabContents].forEach((item) => {
    item.classList.remove("active");
    item.getAttribute("data-tab");
  });
  [...tabContents][tabNumber - 1].classList.add("active");
}
