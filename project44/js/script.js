/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const promoAdv = document.querySelector(".promo__adv"),
      promoAdvBanners = promoAdv.querySelectorAll("img"),
      promoGenre = document.querySelector(".promo__genre"),
      promoBg = document.querySelector(".promo__bg"),
      promoInteractiveList = document.querySelector(".promo__interactive-list"),
      promoInteractiveListItems = promoInteractiveList.querySelectorAll(".promo__interactive-item");

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

movieDB.movies.sort();

promoAdvBanners.forEach(el => {
    el.remove();
});

promoGenre.textContent = "Драма";

promoBg.style.backgroundImage = "url(./img/bg.jpg)";

promoInteractiveList.innerHTML = "";
movieDB.movies.forEach((el, i) => {
    promoInteractiveList.innerHTML += `
        <li class="promo__interactive-item">
            ${i+1}. ${el} <div class="delete"></div>
        </li>
    `;
});