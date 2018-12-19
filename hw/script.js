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
let message = " ";
/*let userPass = prompt("введите пароль");*/

let userLogin = prompt("Введите логин");
if (!userLogin) {
  message = "пользователь нажал отмену";
} else if (userLogin !== adminLogin) {
  message = "досnуп запрещен неверній логин";
} else {
  let userPass = prompt("Введите пароль");
  if (!userPass) {
    message = "пользователь нажал отмену";
  } else if (userPass !== adminPassword) {
    message = "неверный пароль";
  } else {
    message = "добро пожаловать";
  }
}
console.log(message);
