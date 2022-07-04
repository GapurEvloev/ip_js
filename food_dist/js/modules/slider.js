function slider() {
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
  // Slider end 
}

module.exports = slider;