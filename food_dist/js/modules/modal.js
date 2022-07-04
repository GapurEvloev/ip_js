function handelModalClose(modalSelector) {
  const modal = document.querySelector(modalSelector);

  modal.classList.remove("show");
  modal.classList.add("hide");
  document.body.style.overflow = "auto";
}

function handelModalOpen(modalSelector, modalTimerId) {
  const modal = document.querySelector(modalSelector);

  modal.classList.add("show");
  modal.classList.remove("hide");
  document.body.style.overflow = "hidden";

  console.log(modalTimerId);
  if (modalTimerId) {
    clearInterval(modalTimerId);
  }
}

function modal (triggerSelector, modalSelector, modalTimerId) {
  // Modal start
  const modal = document.querySelector(modalSelector);
  const modalTriggers = document.querySelectorAll(triggerSelector);

  modalTriggers.forEach((el) => {
    el.addEventListener("click", () => handelModalOpen(modalSelector, modalTimerId));
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target.getAttribute("data-modal") === "close") {
      handelModalClose(modalSelector);
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && modal.classList.contains("show")) {
      handelModalClose(modalSelector);
    }
  });

  function showModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
      handelModalOpen(modalSelector, modalTimerId);
      window.removeEventListener("scroll", showModalByScroll);
    }
  }

  window.addEventListener("scroll", showModalByScroll);
  // Modal end
}

export {handelModalClose, handelModalOpen};
export default modal;