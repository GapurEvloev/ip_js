/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

//

/* Задания на урок: 48

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const promoAdv = document.querySelector(".promo__adv"),
        promoAdvBanners = promoAdv.querySelectorAll("img"),
        promoGenre = document.querySelector(".promo__genre"),
        promoBg = document.querySelector(".promo__bg"),
        promoInteractiveList = document.querySelector(".promo__interactive-list"),
        addForm = document.querySelector(".add"),
        addInput = addForm.querySelector(".adding__input"),
        addButton = addForm.querySelector(".add button"),
        checkbox = addForm.querySelector("[type='checkbox']"),
        promoInteractiveListItems = promoInteractiveList.querySelectorAll(".promo__interactive-item");

  const movieDB = {
    movies: [
      "Логан",
      "Лига справедливости",
      "Ла-ла лэнд",
      "Одержимость",
      "Скотт Пилигрим против...",
    ],
  };

  const sortArr = (arr) => {
    arr.sort();
  };
  sortArr(movieDB.movies);

  const removeAdv = (els) => {
    els.forEach((el) => {
      el.remove();
    });
  };
  removeAdv(promoAdvBanners);

  const makeChanges = () => {
    promoGenre.textContent = "Драма";
    promoBg.style.backgroundImage = "url(./img/bg.jpg)";
  };
  makeChanges();

  const renderList = (data, parent) => {
    parent.innerHTML = "";
    sortArr(data);

    data.forEach((el, i) => {
      parent.innerHTML += `
        <li class="promo__interactive-item">
            ${i + 1}. ${el} <div class="delete"></div>
        </li>
    `;
    });

    promoInteractiveList.querySelectorAll(".delete").forEach((btn, i) => {
      btn.addEventListener("click", () => {
        btn.parentElement.remove();
        movieDB.movies.splice(i, 1);
        
        renderList(data, parent);
      });
    });
  };
  renderList(movieDB.movies, promoInteractiveList);

  const handleAddNewFilm = (e) => {
    e.preventDefault();

    let newFilm = addInput.value;

    if (newFilm) {
      if (newFilm.length > 21) {
        newFilm = `${newFilm.substring(0, 21)}...`;
        console.log(newFilm.length );
      }
      movieDB.movies.push(newFilm);
      renderList(movieDB.movies, promoInteractiveList);
    }
  };

  addForm.addEventListener("submit", (e) => {
    handleAddNewFilm(e);
    e.target.reset();
  });
});
