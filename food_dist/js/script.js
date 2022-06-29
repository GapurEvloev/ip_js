"use strict";

document.addEventListener("DOMContentLoaded", () => {
  // Tabs start
  const tabs = document.querySelectorAll(".tabheader__item"),
    tabsContent = document.querySelectorAll(".tabcontent"),
    tabsParent = document.querySelector(".tabheader__items");

  function hideTabContent() {
    tabsContent.forEach((item) => {
      // item.style.display = "none";
      item.classList.add("hide");
      item.classList.remove("show", "fade");
    });
    tabs.forEach((item) => {
      item.classList.remove("tabheader__item_active");
    });
  }

  function showTabContent(i = 0) {
    // tabsContent[i].style.display = "block";
    tabsContent[i].classList.remove("hide");
    tabsContent[i].classList.add("show", "fade");
    tabs[i].classList.add("tabheader__item_active");
  }

  hideTabContent();
  showTabContent();

  tabsParent.addEventListener("click", (event) => {
    const target = event.target;

    tabs.forEach((item, i) => {
      if (target && target === item) {
        hideTabContent();
        showTabContent(i);
      }
    });
  });
  // Tabs end

  // Timer start
  const deadline = "2022-07-11";

  function getTimeRemaining(time) {
    let days, hours, minutes, seconds;
    const t = Date.parse(time) - Date.parse(new Date());

    if (t <= 0) {
      days = 0;
      hours = 0;
      minutes = 0;
      seconds = 0;
    } else {
      (days = Math.floor(t / (1000 * 24 * 60 * 60))),
        (hours = Math.floor((t / (1000 * 60 * 60)) % 24)),
        (minutes = Math.floor((t / 1000 / 60) % 60)),
        (seconds = Math.floor((t / 1000) % 60));
    }

    return {
      total: t,
      days,
      hours,
      minutes,
      seconds,
    };
  }

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  function setClock(selector, endTime) {
    const timer = document.querySelector(selector),
      days = timer.querySelector("#days"),
      hours = timer.querySelector("#hours"),
      minutes = timer.querySelector("#minutes"),
      seconds = timer.querySelector("#seconds"),
      timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
      const t = getTimeRemaining(endTime);

      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setClock(".timer", deadline);
  // Timer end

  // Modal start
  const modal = document.querySelector(".modal");
  const modalTriggers = document.querySelectorAll("[data-modal='open']");
  const modalClose = document.querySelectorAll("[data-modal='close']");

  function handelModalClose() {
    modal.classList.remove("show");
    modal.classList.add("hide");
    document.body.style.overflow = "auto";
  }

  function handelModalOpen() {
    modal.classList.add("show");
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden";
    // clearInterval(modalTimerId);
    window.removeEventListener("scroll", showModalByScrooll);
  }

  modalClose.forEach((el) => {
    el.addEventListener("click", handelModalClose);
  });

  modalTriggers.forEach((el) => {
    el.addEventListener("click", handelModalOpen);
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      handelModalClose();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && modal.classList.contains("show")) {
      handelModalClose();
    }
  });

  // const modalTimerId = setTimeout(handelModalOpen, 3000);

  function showModalByScrooll() {
    if (
      window.pageYOffset + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight - 1
    ) {
      handelModalOpen();
    }
  }

  window.addEventListener("scroll", showModalByScrooll);
  // Modal end

  // Class cards start
  const cardsData = [
    {
      img: "img/tabs/vegy.jpg",
      alt: "vegy",
      subtitle: "Меню “Фитнес“",
      descr:
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
      price: {
        cost: "Цена",
        total: 229,
        valute: "грн/день",
      },
    },
    {
      img: "img/tabs/elite.jpg",
      alt: "elite",
      subtitle: "Меню “Премиум”",
      descr:
        "В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!",
      price: {
        cost: "Цена",
        total: 550,
        valute: "грн/день",
      },
    },
    {
      img: "img/tabs/post.jpg",
      alt: "post",
      subtitle: "Меню “Постное“",
      descr:
        "Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.",
      price: {
        cost: "Цена",
        total: 430,
        valute: "грн/день",
      },
    },
  ];

  class Card {
    constructor(img, alt, subtitle, descr, price, parentSelector) {
      this.img = img;
      this.alt = alt;
      this.subtitle = subtitle;
      this.descr = descr;
      this.price = price;
      this.parentSelector = document.querySelector(parentSelector);
      this.transfer = 1;
      this.changeToUAH();
    }

    changeToUAH() {
      this.price.total = this.price.total * this.transfer;
    }

    render() {
      let item = `
        <div class="menu__item">
          <img src="${this.img}" alt="${this.alt}">
          <h3 class="menu__item-subtitle">${this.subtitle}</h3>
          <div class="menu__item-descr">${this.descr}</div>
          <div class="menu__item-divider"></div>
          <div class="menu__item-price">
            <div class="menu__item-cost">${this.price.cost}:</div>
            <div class="menu__item-total"><span>${this.price.total}</span> ${this.price.valute}</div>
          </div>
        </div>
      `;
      this.parentSelector.innerHTML += item;
    }
  }

  document.querySelector(".menu__field .container").innerHTML = "";

  cardsData.map(card => {
    new Card(card.img, card.alt, card.subtitle, card.descr, card.price, ".menu__field .container").render();
  });
  // Class cards end
});
