"use strict";

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function(login) {
  if (login.length >= 4 && login.length <= 16) {
    return true;
  } else return false;
};

// // console.log(isLoginValid(login));


const isLoginUnique = function(allLogins, login) {
  if (allLogins.includes(login)) {
    return false;
  } else {
    return true;
  }
};
// console.log(isLoginUnique(allLogins, login));

const addLogin = function(allLogins, login) {
  if (isLoginValid(login) && isLoginUnique(allLogins, login)) {
    return logins.push(login) && console.log("Логин успешно добавлен!");
  } else if (!isLoginValid(login)) {
    return console.log("Ошибка! Логин должен быть от 4 до 16 символов");
  } else return console.log("Такой логин уже используется!");
};

// addLogin(logins, "Swew");

// // Вызовы функции для проверки
// addLogin(logins, "Ajax"); // 'Логин успешно добавлен!'
// addLogin(logins, 'robotGoogles'); // 'Такой логин уже используется!'
// // addLogin(logins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
// addLogin(logins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'