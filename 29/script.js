/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

"use strict";

let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}
start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов?", ""),
      b = +prompt("На сколько оцените его?", "");

    if (a.length < 50 && a !== null && b !== null && a !== "" && b !== "") {
      personalMovieDB.movies[a] = b;
    } else {
      console.log("error");
      i--;
    }
  }
}
rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
  } else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
  } else {
    console.log("Error");
  }
}
detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
  for (let i = 0; i < 3; i++) {
    personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`, "");
  }
}
writeYourGenres();

//
function calculateVolumeAndArea(length) {
  if (isNaN(length) || length < 0 || !Number.isInteger(length)) {
    return "При вычислении произошла ошибка";
  }
  let s = 6 * (length * length);
  let v = length * length * length;

  return `Объем куба: ${v}, площадь всей поверхности: ${s}`;
}

function getCoupeNumber(num) {
  if (isNaN(num) || num < 0 || !Number.isInteger(num)) {
    return "Ошибка. Проверьте правильность введенного номера места";
  }
  if (num === 0 || num > 36) {
    return "Таких мест в вагоне не существует";
  }
  return Math.ceil(num / 4);
}

// Место для первой задачи
function getTimeFromMinutes(mins) {
  if (mins < 0 || isNaN(mins) || !Number.isInteger(mins)) {
    return "Ошибка, проверьте данные";
  }

  let hours = Math.floor(mins / 60);
  let minutes = mins % 60;
  let hoursWord;
  let minutesWord = "минут";

  if (hours === 0 || hours >= 5) {
    hoursWord = "часов";
  } else if (hours > 1 && hours < 5) {
    hoursWord = "часа";
  } else {
    hoursWord = "час";
  }

  return `Это ${hours} ${hoursWord} и ${minutes} ${minutesWord}`;
}
console.log(getTimeFromMinutes(150));

// Место для второй задачи
function findMaxNumber(a, b, c, d) {
  if (
    typeof a !== "number" ||
    typeof b !== "number" ||
    typeof c !== "number" ||
    typeof d !== "number"
  ) {
    return 0;
  }
  return Math.max(a, b, c, d);
}

// Fibonacci number 
function fib(num) {
  if (typeof num !== "number" || num <= 0 || !Number.isInteger(num)) {
    return "";
  }

  let res = "";
  let first = 0;
  let second = 1;
  
  for (let i = 0; i < num; i++) {
    if (i + 1 === num) {
      res += `${first}`;
    } else {
      res += `${first} `;
    }
    let third = first + second;
    first = second;
    second = third;
  }

  return res;
}

console.log(fib(4));
