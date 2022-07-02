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

  function handelModalClose() {
    modal.classList.remove("show");
    modal.classList.add("hide");
    document.body.style.overflow = "auto";
  }

  function handelModalOpen() {
    modal.classList.add("show");
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden";
    clearInterval(modalTimerId);
    window.removeEventListener("scroll", showModalByScroll);
  }

  modalTriggers.forEach((el) => {
    el.addEventListener("click", handelModalOpen);
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target.getAttribute("data-modal") === "close") {
      handelModalClose();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && modal.classList.contains("show")) {
      handelModalClose();
    }
  });

  const modalTimerId = setTimeout(handelModalOpen, 50000);

  function showModalByScroll() {
    if (
      window.pageYOffset + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight - 1
    ) {
      handelModalOpen();
    }
  }

  window.addEventListener("scroll", showModalByScroll);
  // Modal end

  // Class cards start
  class Card {
    constructor(card, parentSelector) {
      this.img = card.img;
      this.alt = card.alt;
      this.title = card.title;
      this.descr = card.descr;
      this.price = card.price;
      this.classes = card.classes;
      this.parentSelector = document.querySelector(parentSelector);
      this.transfer = 29;
      this.changeToUAH();
    }

    changeToUAH() {
      this.price.total = this.price.total * this.transfer;
    }

    render() {
      let item = `
        <div class="menu__item${this.classes?.length ? " " + this.classes.join(" ") : ""}">
          <img src="${this.img}" alt="${this.alt}">
          <h3 class="menu__item-subtitle">${this.title}</h3>
          <div class="menu__item-descr">${this.descr}</div>
          <div class="menu__item-divider"></div>
          <div class="menu__item-price">
            <div class="menu__item-cost">${this.price.cost}:</div>
            <div class="menu__item-total"><span>${this.price.total}</span> ${
        this.price.valute
      }</div>
          </div>
        </div>
      `;
      this.parentSelector.innerHTML += item;
    }
  }

  document.querySelector(".menu__field .container").innerHTML = "";

  const getCards = async (url) => {
    const res = await fetch(url);

    if(!res.ok) {
      throw new Error(`Fetching ${url} failed, status: ${res.status}`);
    }

    return await res.json();
  };

  getCards("http://localhost:3000/menu")
    .then(data => {
      data.map((card) => {
        new Card(card, ".menu__field .container").render();
      });
    });
  // Class cards end

  // Forms start
  const forms = document.querySelectorAll("form");

  const formMessages = {
    loading: "img/form/spinner.svg",
    success: "Success!",
    failure: "Failure. Something went wrong...",
  };

  forms.forEach((item) => {
    bindPostData(item);
  });

  const postData = async (url, data) => {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    });

    return await res.json();
  };

  function bindPostData(form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const statusMessage = document.createElement("img");
      statusMessage.src = formMessages.loading;
      statusMessage.classList.add("loading");
      form.querySelector("button").append(statusMessage);

      const formData = new FormData(form);

      const json = JSON.stringify(Object.fromEntries(formData.entries()));

      postData('http://localhost:3000/requests', json)
      .then((data) => {
        console.log(data);
        showThanksModal(formMessages.success);
        statusMessage.remove();
      })
      .catch(() => {
        showThanksModal(formMessages.failure);
      })
      .finally(() => {
        form.reset();
      });
    });
  }

  function showThanksModal(message) {
    const prevModalDialog = document.querySelector(".modal__dialog");
    prevModalDialog.classList.add("hide");
    handelModalOpen();

    const thanksModal = document.createElement("div");
    thanksModal.classList.add("modal__dialog");
    thanksModal.innerHTML = `
      <div class="modal__content">
        <div data-modal="close" class="modal__close">&times;</div>
        <div class="modal__title">${message}</div>
      </div>
    `;
    document.querySelector(".modal").append(thanksModal);
    setTimeout(() => {
      thanksModal.remove();
      prevModalDialog.classList.add("show");
      prevModalDialog.classList.remove("hide");
      handelModalClose();
    }, 4000);
  }
  // Forms end

  // Slider start
  const slides = document.querySelectorAll(".offer__slide"),
        prev = document.querySelector(".offer__slider-prev"),
        next = document.querySelector(".offer__slider-next"),
        total = document.querySelector("#total"),
        current = document.querySelector("#current"),
        slider = document.querySelector(".offer__slider"),
        slidesWrapper = document.querySelector(".offer__slider-wrapper"),
        slidesField = document.querySelector(".offer__slider-inner"),
        wrapperWidth = window.getComputedStyle(slidesWrapper).width;

  let slideIndex = 1;
  let offset = 0;

  if(slides.length < 10) {
    total.textContent = `0${slides.length}`;
    current.textContent = `0${slideIndex}`;
  } else {
    total.textContent = slides.length;
    current.textContent = slideIndex;
  }

  slidesField.style.width = 100 * slides.length + "%";

  slides.forEach(slide => {
    slide.style.width = wrapperWidth;
  });

  // dots
  const indicators = document.createElement("ol"),
        dots = [];

  indicators.classList.add("carousel-indicators");
  slider.append(indicators);

  for(let i = 0; i < slides.length; i++) {
    const dot = document.createElement("li");
    dot.classList.add("dot");
    dot.setAttribute("data-slide-to", i+1);
    if(i === 0) {
      dot.style.opacity = 1;
    }
    indicators.append(dot);
    dots.push(dot);
  }

  next.addEventListener("click", () => {
    if(offset === +wrapperWidth.replace("px", "") * (slides.length - 1)) {
      offset = 0;
    } else {
      offset += +wrapperWidth.replace("px", "");
    }
    slidesField.style.transform = `translateX(-${offset}px)`;

    if(slideIndex === slides.length) {
      slideIndex = 1;
    } else {
      slideIndex++;
    }

    if(slides.length < 10) {
      current.textContent = `0${slideIndex}`;
    } else {
      current.textContent = slideIndex;
    }

    dots.forEach(dot => dot.style.opacity = 0.5);
    dots[slideIndex - 1].style.opacity = 1;
  });

  prev.addEventListener("click", () => {
    if(offset === 0) {
      offset = +wrapperWidth.replace("px", "") * (slides.length - 1);
    } else {
      offset -= +wrapperWidth.replace("px", "");
    }
    slidesField.style.transform = `translateX(-${offset}px)`;

    if(slideIndex === 1) {
      slideIndex = slides.length;
    } else {
      slideIndex--;
    }

    if(slides.length < 10) {
      current.textContent = `0${slideIndex}`;
    } else {
      current.textContent = slideIndex;
    }

    dots.forEach(dot => dot.style.opacity = 0.5);
    dots[slideIndex - 1].style.opacity = 1;
  });

  dots.forEach(dot => {
    dot.addEventListener("click", (e) => {
      const slideTo = dot.getAttribute("data-slide-to");

      slideIndex = slideTo;
      offset = +wrapperWidth.replace("px", "") * (slideTo - 1);
      slidesField.style.transform = `translateX(-${offset}px)`;

      if(slides.length < 10) {
        current.textContent = `0${slideIndex}`;
      } else {
        current.textContent = slideIndex;
      }
      
      dots.forEach(dot => dot.style.opacity = 0.5);
      dots[slideIndex - 1].style.opacity = 1;
    });
  });
});
