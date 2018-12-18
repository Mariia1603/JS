"use strict";
/*const isAdmin = true;
const isLogIn = true;
if (isAdmin && isLogIn) {
  console.log("запускаю");
} else {
  console.log("нет прав");
}*/
const adminLogin = "admin";
const adminPassword = "m4ng0h4ckz";
let message = "";
let userInput = prompt("Введите логин");

/*let userInput = prompt("введите пароль");*/
if (!userInput) {
  console.log("отмена пользователем"); /*console.log("отмена пользователем");*/
  /*(userInput === null) */
} else {
  if (userInput !== adminLogin) {
    console.log("доступ запрещен.неверный логин");
  } else {
    prompt("введите пароль");
  }
}
/*adahttps://codepen.io/Maria_1603/pen/PXGWQL