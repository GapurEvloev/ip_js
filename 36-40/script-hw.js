/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';


const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start() {
    this.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
  
    while (this.count == "" || this.count == null || isNaN(this.count)) {
      this.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
  },
  rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
      const a = prompt("Один из последних просмотренных фильмов?", "").trim(),
        b = +prompt("На сколько оцените его?", "");
  
      if (a.length < 50 && a !== null && b !== null && a !== "" && b !== "") {
        this.movies[a] = b;
      } else {
        console.log("error");
        i--;
      }
    }
  },
  detectPersonalLevel() {
    if (this.count < 10) {
      console.log("Просмотрено довольно мало фильмов");
    } else if (this.count >= 10 && this.count < 30) {
      console.log("Вы классический зритель");
    } else if (this.count >= 30) {
      console.log("Вы киноман");
    } else {
      console.log("Error");
    }
  },
  showMyDB(hidden) {
    if (!hidden) {
      console.log(this);
    }
  },
  toggleVisibleMyDB() {
    if (this.privat) {
      this.privat = false;
    } else {
      this.privat = true;
    }
  },
  writeYourGenres() {
    for (let i = 0; i < 3; i++) {
      let genre = prompt(`Ваш любимый жанр под номером ${i + 1}`, "").toLowerCase();
      if(genre === null || genre.length <= 0) {
        console.log("Некорректные данные!");
        i--;
      } else {
        this.genres[i] = genre;
      }
    }

    this.genres.forEach((genre, i) => {
      console.log(`Любимый жанр #${i+1} - это ${genre}`);
    });
  }
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB(personalMovieDB.privat);
personalMovieDB.toggleVisibleMyDB(personalMovieDB.privat);
personalMovieDB.writeYourGenres();
