const button = document.querySelector(".button");
// Cach 1 :
button.addEventListener("click", function (e) {
  console.log("click me!");
});

// Cach 2
// function handleClick() {
//   console.log("click me 2!");
// }

// button.addEventListener("click", handleClick);

// ============================== bubbling =============================
const span = document.querySelector(".btnSpan");
span.addEventListener("click", function (e) {
  e.stopImmediatePropagation;
  console.log("click span 1");
});

span.addEventListener("click", function () {
  console.log("click span 2");
});
