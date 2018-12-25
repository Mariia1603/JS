"use strict";

let userInput;
const numbers = [];
let counter = 0;
let total = 0;

// while (true) {
//   userInput = prompt("введи число");
//   console.log(numbers);
do {
  userInput = prompt("введи число");
  numbers.push(Number(userInput));
  userInput = Number(userInput);
} while (userInput);
console.log("ввели числа:", numbers);

if (numbers.length !== 0) {
  for (let i = 0; i < numbers.length; i += 1) {
    total += numbers[i];
  }
  console.log(total);
}
