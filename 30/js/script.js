/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelector(".promo__adv"),
      genre = document.querySelector(".promo__genre"),
      banner = document.querySelector(".promo__bg"),
      moviesList = document.querySelector(".promo__interactive-list"),
      moviesItems = document.querySelectorAll(".promo__interactive-item");

adv.remove();
genre.textContent = "Драма";
banner.style.backgroundImage = `url(./img/bg.jpg)`;
movieDB.movies.sort();

while (moviesList.firstChild) {
    moviesList.removeChild(moviesList.firstChild);
}

movieDB.movies.forEach((item, i) => {
    let moviesItem = document.createElement("div"),
        moviesItemDelete = document.createElement("div");

    moviesItem.classList.add("promo__interactive-item");
    moviesItemDelete.classList.add("delete");
    moviesItem.textContent = i+1 + ". " + item;
    moviesItem.append(moviesItemDelete);
    moviesList.append(moviesItem);
});