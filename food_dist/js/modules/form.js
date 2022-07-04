import {handelModalClose, handelModalOpen} from "./modal";
import { postData } from "../services/services";

function form(formSelector, modalTimerId) {
  // Forms start
  const forms = document.querySelectorAll(formSelector);

  const formMessages = {
    loading: "img/form/spinner.svg",
    success: "Success!",
    failure: "Failure. Something went wrong...",
  };

  forms.forEach((item) => {
    bindPostData(item);
  });

  

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
    handelModalOpen(".modal", modalTimerId);

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
      handelModalClose(".modal");
    }, 4000);
  }
  // Forms end
}

export default form;