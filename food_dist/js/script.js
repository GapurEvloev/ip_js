"use strict";

import tabs from "./modules/tabs";
import modal from "./modules/modal";
import timer from "./modules/timer";
import cards from "./modules/cards";
import calc from "./modules/calc";
import form from "./modules/form";
import slider from "./modules/slider";
import { handelModalOpen } from "./modules/modal";

document.addEventListener("DOMContentLoaded", () => {

  const modalTimerId = setTimeout(() => handelModalOpen(".modal", modalTimerId), 50000);
  
  tabs(".tabheader__item", ".tabcontent", ".tabheader__items", "tabheader__item_active");
  modal("[data-modal='open']", ".modal", modalTimerId);
  timer(".timer", "2022-07-11");
  cards();
  calc();
  form("form", modalTimerId);
  slider({
    container: ".offer__slider",
    nextArrow: ".offer__slider-prev",
    prevArrow: ".offer__slider-next",
    slide: ".offer__slide",
    totalCounter: "#total",
    currentCounter: "#current",
    wrapper: ".offer__slider-wrapper",
    field: ".offer__slider-inner",
  });

});
