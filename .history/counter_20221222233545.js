const buttonMinus = document.querySelector(".counter-decrease");
const buttonPlus = document.querySelector(".counter-increase");
const counterNumber = document.querySelector(".counter-number");
let counterValue = parseInt(counterNumber.textContent);

buttonPlus.addEventListener("click", function () {
  counterValue++;
});

buttonMinus.addEventListener("click", function () {});
