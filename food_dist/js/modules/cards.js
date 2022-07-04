import { getCards } from "../services/services";

function cards() {
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

  getCards("http://localhost:3000/menu").then((data) => {
    data.map((card) => {
      new Card(card, ".menu__field .container").render();
    });
  });
  // Class cards end
}

export default cards;