/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
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
          moviesItems = document.querySelectorAll(".promo__interactive-item"),
          addForm = document.querySelector("form.add"),
          addFormInput = addForm.querySelector(".adding__input"),
          addFormSubmit = addForm.querySelector("button"),
          addFormFavorite = addForm.querySelector("input[type='checkbox']");
    
    const makeChanges = () => {
        adv.remove();
        genre.textContent = "Драма";
        banner.style.backgroundImage = `url(./img/bg.jpg)`;
    };
    makeChanges();

    const sortSome = (some) => {
        some.sort();
    };
    
    function renderMovies(data, parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
        data.forEach((item, i) => {
            let moviesItem = document.createElement("div"),
                moviesItemDelete = document.createElement("div");
        
            moviesItem.classList.add("promo__interactive-item");
            moviesItemDelete.classList.add("delete");
            moviesItem.textContent = i+1 + ". " + item;
            moviesItem.append(moviesItemDelete);
            parent.append(moviesItem);
        });
        sortSome(data);

        document.querySelectorAll(".delete").forEach((btn, i) => {
            btn.addEventListener("click", (e) => {
                e.target.parentElement.remove();
                movieDB.movies.splice(i, 1);

                renderMovies(data, parent);
            });
        });
    }
    renderMovies(movieDB.movies, moviesList);
    
    // // alternative variant
    // movieDB.movies.forEach((item, i) => {
    //     moviesList.innerHTML += `
    //         <li class="promo__interactive-item">${i+ 1}. ${item}
    //             <div class="delete"></div>
    //         </li>
    //     `;
    // });
    
    function addNewMovie() {
        let value = addFormInput.value;
        addFormInput.value = '';
        
        
        if(value) {
            if(value.length > 15) {
                value = `${value.substring(0, 17)}...`;
            }
            
            if(addFormFavorite.checked && value) {
                console.log("Добавляем любимый фильм");
            }
            z
            movieDB.movies.push(value);
            sortSome(movieDB.movies);
            renderMovies(movieDB.movies, moviesList);
        }

    }
    
    function removeMovie(e) {
    }
    
    addForm.addEventListener("submit", (e) => {
        e.preventDefault();
        addNewMovie();
    });
    
});