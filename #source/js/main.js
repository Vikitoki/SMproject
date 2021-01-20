document.addEventListener("DOMContentLoaded", function () {
  //@prepros-append dynamicAdapt.js
  //@prepros-append sliders.js

  // Turn img to background ===========================================

  const ibgBlocks = document.querySelectorAll(".ibg");

  function setImgToBackground() {
    ibgBlocks.forEach((block) => {
      let image = block.querySelector("img");

      block.style.cssText = `
			background: url(${image.getAttribute("src")}) center no-repeat;
			background-size : cover;
		`;

      image.style.display = "none";
    });
  }

  setImgToBackground();

  // Intro menu ===========================================

  const burgerMenuBtn = document.querySelector(".header__burger"),
    introWrapper = document.querySelector(".intro__wrapper"),
    introMenu = document.querySelector(".intro__menu"),
    introBackground = document.querySelector(".intro__background"),
    header = document.querySelector(".header");

  // Header ==================================================

  const introBlock = document.querySelector(".intro");
  let scrollYOffset = window.pageYOffset;

  toggleFixToHeader(scrollYOffset);

  window.addEventListener("scroll", function () {
    scrollYOffset = window.pageYOffset;

    toggleFixToHeader(scrollYOffset);
  });

  function toggleFixToHeader(scrollTop) {
    if (
      scrollTop >=
      introBlock.clientHeight - document.documentElement.clientHeight / 3
    ) {
      header.classList.add("fixed");
    } else {
      header.classList.remove("fixed");
    }
  }

  // Menu

  burgerMenuBtn.addEventListener("click", function (event) {
    event.preventDefault();

    this.classList.toggle("active");
    introWrapper.classList.toggle("active");
    introMenu.classList.toggle("active");
    introBackground.classList.toggle("active");
    document.body.classList.toggle("lock");

    if (
      scrollYOffset <
      introBlock.clientHeight - document.documentElement.clientHeight / 3
    ) {
      header.classList.toggle("active");
    } 
  });


  // Show form`s select =========================================

  const selectBtn = document.querySelector(".main-form__select-default"),
    selectBlock = document.querySelector(".main-form__ways"),
    selectWays = document.querySelectorAll(".ways-form-main__list li"),
    feedback = document.querySelector(".feedback");

  selectBtn.addEventListener("click", function (event) {
    event.preventDefault();

    selectBlock.classList.toggle("active");
    this.classList.toggle("active");
  });

  selectWays.forEach((way) => {
    way.addEventListener("click", function (event) {
      event.preventDefault();

      let value = way.textContent;
      selectBtn.textContent = value;

      selectBlock.classList.remove("active");
      selectBtn.classList.remove("active");
    });
  });

  feedback.addEventListener("click", function (event) {
    event.preventDefault();

    if (event.target && !event.target.closest(".main-form__select")) {
      selectBlock.classList.remove("active");
      selectBtn.classList.remove("active");
    }
  });

  // Footer =========================================

  const footerLogo = document.querySelector(".content-footer__logo");

  footerLogo.addEventListener("click", function (event) {
    event.preventDefault();

    document.documentElement.scrollTop = 0;
  });
});
