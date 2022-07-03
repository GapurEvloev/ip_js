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

  function deleteNotDigits(str) {
    return +str.replace(/\D/g, "");
  }

  function setDots(dots) {
    dots.forEach(dot => dot.style.opacity = 0.5);
    dots[slideIndex - 1].style.opacity = 1;
  }

  function transformSlidesField() {
    slidesField.style.transform = `translateX(-${offset}px)`;
  }

  function setSlidesCounter() {
    if(slides.length < 10) {
      total.textContent = `0${slides.length}`;
      current.textContent = `0${slideIndex}`;
    } else {
      total.textContent = slides.length;
      current.textContent = slideIndex;
    }
  }

  setSlidesCounter();

  slidesField.style.width = 100 * slides.length + "%";

  slides.forEach(slide => {
    slide.style.width = wrapperWidth;
  });

  // set dots
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

  // next slide
  next.addEventListener("click", () => {
    if(offset === deleteNotDigits(wrapperWidth) * (slides.length - 1)) {
      offset = 0;
    } else {
      offset += deleteNotDigits(wrapperWidth);
    }
    transformSlidesField();

    if(slideIndex === slides.length) {
      slideIndex = 1;
    } else {
      slideIndex++;
    }

    setSlidesCounter();
    setDots(dots);
  });

  // prev slide
  prev.addEventListener("click", () => {
    if(offset === 0) {
      offset = deleteNotDigits(wrapperWidth) * (slides.length - 1);
    } else {
      offset -= deleteNotDigits(wrapperWidth);
    }
    transformSlidesField();

    if(slideIndex === 1) {
      slideIndex = slides.length;
    } else {
      slideIndex--;
    }

    setSlidesCounter();
    setDots(dots);
  });

  // click dots
  dots.forEach(dot => {
    dot.addEventListener("click", (e) => {
      const slideTo = dot.getAttribute("data-slide-to");

      slideIndex = slideTo;
      offset = deleteNotDigits(wrapperWidth) * (slideTo - 1);
      transformSlidesField();

      setSlidesCounter();
      setDots(dots);
    });
  });
  // Slider end =================================================================

  // Calculate
  const result = document.querySelector(".calculating__result span");
  let gender = "female", height, weight, age, ratio = 1.375;

  if (localStorage.getItem("gender")) {
    gender = localStorage.getItem("gender");
  } else {
    gender = "female";
    localStorage.setItem("gender", gender);
  }

  if (localStorage.getItem("ratio")) {
    ratio = localStorage.getItem("ratio");
  } else {
    ratio = 1.375;
    localStorage.setItem("ratio", ratio);
  }

  function initLocalSettings(selector, activeClass) {
    const elements = document.querySelectorAll(selector);

    elements.forEach(item => {
      item.classList.remove(activeClass);

      if (item.getAttribute("id") === localStorage.getItem("gender")) {
        item.classList.add(activeClass);
      }
      if (item.getAttribute("data-ratio") === localStorage.getItem("ratio")) {
        item.classList.add(activeClass);
      }
    });
  }

  initLocalSettings("#gender div", "calculating__choose-item_active");
  initLocalSettings(".calculating__choose_big div", "calculating__choose-item_active");

  function calcTotal() {
    if(!gender || !height || !weight || !age || !ratio) {
      result.textContent = "____";
      return;
    }

    if(gender === "female") {
      result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
    }
    if(gender === "male") {
      result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
    }
  }
  calcTotal();

  function getStaticInfo(selector, activeClass) {
    const elemets = document.querySelectorAll(selector);

    elemets.forEach(item => {
      item.addEventListener("click", (e) => {
        if(e.target.getAttribute("data-ratio")) {
          ratio = +e.target.getAttribute("data-ratio");
          localStorage.setItem("ratio", ratio);
        } else {
          gender = e.target.getAttribute("id");
          localStorage.setItem("gender", gender);
        }
  
        console.log(gender, ratio);
  
        elemets.forEach(elem => {
          elem.classList.remove(activeClass);
        });
  
        e.target.classList.add(activeClass);
  
        calcTotal();
      });
    });
  }

  getStaticInfo("#gender div", "calculating__choose-item_active");
  getStaticInfo(".calculating__choose_big div", "calculating__choose-item_active");

  function getDynamicInfo(selector) {
    const input = document.querySelector(selector);

    input.addEventListener("input", (e) => {
      if (input.value.match(/\D/g)) {
        input.style.border = "2px solid red";
      } else {
        input.style.border = "2px solid green";
      }
      switch(input.getAttribute("id")) {
        case "height":
          height = +input.value;
          break;
        case "weight":
          weight = +input.value;
          break;
        case "age":
          age = +input.value;
          break;
      }

      calcTotal();
    });
  }

  getDynamicInfo("#height");
  getDynamicInfo("#weight");
  getDynamicInfo("#age");
});
