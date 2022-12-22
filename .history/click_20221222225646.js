const button = document.querySelector(".button");
// Cach 1 :
button.addEventListener("click", function (event) {
  //   console.log("click me!");
  console.log(event.target);
  console.log(event.currentTarget);
});

// Cach 2
// function handleClick() {
//   console.log("click me 2!");
// }

// button.addEventListener("click", handleClick);

const click = document.querySelector(".click");
click.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("ngăn không cho load trang mới");
});
