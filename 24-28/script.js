/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

"use strict";

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

// let lastWatchedMovie = prompt("Один из последних просмотренных фильмов?", "");
// let lastWatchedMovieRate = +prompt("На сколько оцените его?", "");

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

if (personalMovieDB.count < 10) {
  console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
  console.log("Вы киноман");
} else {
  console.log("Error");
}

console.log(personalMovieDB);

// exercises start
// Место для первой задачи
function sayHello(name) {
  return `Привет, ${name}`;
}

// Место для второй задачи
function returnNeighboringNumbers(num) {
  return [num - 1, num, num + 1];
}

// Место для третьей задачи
function getMathResult(num1, num2) {
  if (typeof(num2) !== 'number' || num2 <= 0) {
    return num1;
  }

  let progression = '';
  for (let i = 1; i <= num2; i++) {
    progression += num1 * i;
    if(i === num2) {
      return progression;
    }
    progression += "---";
  }
}

console.log(getMathResult(10, 3));
// exercises end


const str = "test";
const fruit = "Some fruit";
const logg = "Hello world";

// console.log(str.length); // => 4
// console.log(fruit.indexOf("fruit")); // => 5
// console.log(logg.slice(7, 11)); // => orld
// console.log(logg.slice(7, 8)); // => o
// console.log(logg.slice(7, 9)); // => or
// console.log(logg.substring(7, 2)); // => or
console.log(logg.substr(2, 3)); // => or