const button = document.querySelector(".button");
// Cach 1 :
button.addEventListener("click", function () {
  console.log("click me!");
});

// Cach 2
function handleClick() {
  console.log("click me!");
}

button.addEventListener("click", handleClick);
