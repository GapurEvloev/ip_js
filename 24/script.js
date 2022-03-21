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
    privat: true,
    start: function() {
        this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (this.count == "" || this.count == null || isNaN(this.count)) {
            this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
        for(let i = 0; i < 2; i++) {
            let a = prompt('Один из последних просмотренных фильмов?', ''),
                b = prompt('На сколько оцените его?', '');
        
            if(a !== "" && b !== "" && a !== null && b !== null && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if(personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if(personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            console.log("Вы классический зритель");
        } else {
            console.log("Вы киноман");
        }
    },
    showMyDB: function(hidden) {
        if(!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i < 2; i++) {
            // let genre = prompt(`Ваш любимый жанр под номером ${i}`, '');

            // if(genre === '' || genre === null) {
            //     console.log("Введены некорректные данные");
            //     i--;
            // } else {
            //     personalMovieDB.genres.push(genre);
            // }

            let genres = prompt(`Ваши любимые жанры через запятую`, '');

            if(genres === '' || genres === null) {
                console.log("Введены некорректные данные");
                i--;
            } else {
                personalMovieDB.genres = genres.split(", ");
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимые жанры ${i+1} - это ${item}`);
        });
    },
    toggleVisibleMyDB: function(){
        this.privat = !this.privat;
    }
};

// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.showMyDB(personalMovieDB.privat);
// personalMovieDB.writeYourGenres();


// console.log(personalMovieDB);