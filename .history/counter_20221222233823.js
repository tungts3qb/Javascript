const buttonMinus = document.querySelector(".counter-decrease");
const buttonPlus = document.querySelector(".counter-increase");
const counterNumber = document.querySelector(".counter-number");
let counterValue = parseInt(counterNumber.textContent);

buttonPlus.addEventListener("click", function () {
  counterValue++;
  counterNumber.textContent = counterValue;
});

buttonMinus.addEventListener("click", function () {
  counterValue--;
  if (counterValue < 0) {
    counterValue = 0;
  }
});
