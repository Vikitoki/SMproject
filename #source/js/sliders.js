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

if (document.querySelector(".services__slider")) {
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
      },
      992: {
        slidesPerView: 2,
      },
      1180: {
        slidesPerView: 3,
      },
    },
  });

  // Get height to services image ===========================================

  const images = document.querySelectorAll(".item-services__image");
  const servicesTops = document.querySelectorAll(".item-services__row_main");
  const servicesHeights = [];

  servicesTops.forEach((top) => {
    let elementHeight = getComputedStyle(top).height;

    servicesHeights.push(parseInt(elementHeight));
  });

  let maxHeight = Math.max(...servicesHeights);

  images.forEach((img) => {
    img.style.height = `${maxHeight}px`;
  });
}

// Bild Blog slider ============================================================================

if (document.querySelector(".slider-blog")) {
  let myBlogSlider = new Swiper(".slider-blog__container", {
    loop: true,
    speed: 800,
    observer: true,
    observeParents: true,
    slidesPerGroup: 1,
    slidesPerView: 1,

    grabCursor: false,
    slideToClickedSlide: false,

    effect: "fade",

    // // Стрелки
    // navigation: {
    //   nextEl: ".pagination-services__arrow_prev",
    //   prevEl: ".pagination-services__arrow_next",
    // },

    // Пагинация
    pagination: {
      el: ".slider-blog__pagination",

      // Буллеты
      type: "bullets",
      clickable: true,
    },

    // Автопрокрутка
    autoplay: {
      // Пауза между прокруткой
      delay: 2000,
      // Закончить на последнем слайде
      stopOnLastSlide: false,
      // Отключить после ручного переключения
      disableOnInteraction: true,
    },

    // // Брейкпоинты
    // breakpoints: {
    //   0: {
    //     slidesPerView: 1,
    //   },
    //   768: {
    // 		slidesPerView: 1,
    // 		autoHeight = true,
    //   },
    //   992: {
    // 		slidesPerView: 2,
    //   },
    //   1180: {
    //     slidesPerView: 3,
    //   },
    // },
  });
}

// Take background to pagination bullets

let windowWith = document.documentElement.clientWidth;
const sliderItemImages = document.querySelectorAll(".slider-blog__item img"),
  paginationItems = document.querySelectorAll(".slider-blog__pagination span");

window.addEventListener("resize", function (event) {
  windowWith = document.documentElement.clientWidth;

  takeBackgroundToPagination(windowWith);
});

takeBackgroundToPagination(windowWith);

function takeBackgroundToPagination(w) {
  if (w > 480) {
    paginationItems.forEach((item, index) => {
      let background = sliderItemImages[index].src;

      item.style.backgroundImage = `url(${background})`;
    });
  } else {
    paginationItems.forEach((item) => {
      item.style.backgroundImage = "";
    });
  }
}
