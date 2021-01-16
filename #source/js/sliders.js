// Bild Swiper Slider ============================================================================

// Example =====================
// <div class = "swiper"></div>

// Default

let sliders = document.querySelectorAll(".swiper");

if (sliders.length > 0) {
  sliders.forEach((slider) => {
    if (!slider.classList.contains("swiper-bild")) {
      let sliderItems = slider.children;

      let sliderWrapper = document.createElement("div");
      sliderWrapper.classList.add("swiper-wrapper");

      for (let index = 0; index < sliderItems.length; index++) {
        let sliderItem = sliderItems[index];

        let slideForWrapper = document.createElement("div");
        slideForWrapper.className = "swiper-slide";

        let sliderItemWrapper = document.createElement("div");
        sliderItemWrapper.className = sliderItem.getAttribute("class");
        sliderItemWrapper.innerHTML = sliderItem.innerHTML;

        slideForWrapper.append(sliderItemWrapper);
        sliderWrapper.append(slideForWrapper);
      }

      slider.innerHTML = "";
      slider.append(sliderWrapper);
      slider.classList.add("swiper-bild");
    }
  });
}

// Bild Services slider ============================================================================

if (document.querySelector(".services")) {
  let myProductSlider = new Swiper(".services__slider", {

    loop: true,
		speed: 800,
		observer: true,
    observeParents: true,
    slidesPerGroup: 1,
    slidesPerView: 3,

    grabCursor: false,
		slideToClickedSlide: false,


    // Стрелки
    navigation: {
      nextEl: ".pagination-services__arrow_prev",
      prevEl: ".pagination-services__arrow_next",
    },

    // // Пагинация
    // pagination: {
    //   el: ".main-intro-content__pagination",
    //   // Буллеты
    //   type: "bullets",
    //   clickable: true,
    // },

    // // Автопрокрутка
    // autoplay: {
    //   // Пауза между прокруткой
    //   delay: 5000,
    //   // Закончить на последнем слайде
    //   stopOnLastSlide: false,
    //   // Отключить после ручного переключения
    //   disableOnInteraction: false,
    // },

    // Брейкпоинты
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
				slidesPerView: 1,
				autoHeight = true,
      },
      992: {
				slidesPerView: 2,		
      },
      1180: {
        slidesPerView: 3,
      },
    },
	});

}
