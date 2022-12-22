const button = document.querySelector(".button");
// Cach 1 :
button.addEventListener("click", function (e) {
  //   e.stopImmediatePropagation;
  e.stopPropagation;
  console.log("click me!");
});

// Cach 2
function handleClick() {
  console.log("click me 2!");
}

button.addEventListener("click", handleClick);
