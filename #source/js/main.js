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

  burgerMenuBtn.addEventListener("click", showIntroMenu);

  function showIntroMenu(params) {
    this.classList.toggle("active");
    introWrapper.classList.toggle("active");
    introMenu.classList.toggle("active");
    introBackground.classList.toggle("active");
    header.classList.toggle("active");
    document.body.classList.toggle("lock");
  }

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
    }
  });
});
