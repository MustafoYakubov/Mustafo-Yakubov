"use strict";
let numbers = [0];
let btn = document.querySelector(".start");
const resetBtn = document.querySelector(".reset");
let lookAt = document.querySelector(".test");
lookAt.innerHTML = numbers;
btn.addEventListener("click", function () {
  numbers++;
  lookAt.innerHTML = numbers;
});
resetBtn.addEventListener("click", function () {
  numbers = 0;
  lookAt.innerHTML = numbers;
});
