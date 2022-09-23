/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */
const button = document.querySelector('.toggle-button');
const link = document.querySelector('.links');

// const width = window.matchMedia('(min-width: 1200px)');

// function check(e) {
//   if (e.matches) {
//     console.log('da');
//     link.setAttribute('class', 'd');
//   } else {
//     console.log('nu');
//     link.setAttribute('class', 'n');
//   }
// }

// check(width);

// width.addEventListener('change', check);

button.addEventListener('click', () => {
  link.classList.toggle('d');
});

// const swiper1 = new Swiper('.mySwiper', {
//   cssMode: true,
//   loop: true,
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   pagination: {
//     el: '.swiper-pagination',
//     // dynamicBullets: true,
//   },
//   // mousewheel: true,
//   keyboard: true,
// });

const swiperGallery = new Swiper('#gallery', {
  // cssMode: true,
  loop: true,
  centeredSlides: true,
  allowTouchMove: true,
  slidesPerView: 5,
  spaceBetween: 10,
  // autoHeight: true,
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,

  },
  clickable: true,
  // mousewheel: true,
  keyboard: true,

});

const swiperPrices = new Swiper('#prices', {
  // cssMode: true,
  loop: true,
  // centeredSlides: true,
  allowTouchMove: true,
  slidesPerView: 1,
  // spaceBetween: 10,
  // autoHeight: true,
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },
  speed: 2000,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  // pagination: {
  //   el: '.swiper-pagination',
  //   dynamicBullets: true,

  // },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 2,
    },
    // when window width is >= 640px
    1280: {
      slidesPerView: 3,
    },
  },
  clickable: true,
  // mousewheel: true,
  // keyboard: true,
});

const hide = document.querySelector('.toggle-button');
const cont = document.querySelectorAll('.container-fluid');

let count = 0;

hide.addEventListener('click', () => {
  count += 1;
  if (count === 1) {
    cont.forEach((element) => {
      element.classList.add('d-none');
      element.classList.remove('d-block');
    });
  } else {
    count -= 2;
    cont.forEach((element) => {
      element.classList.add('d-block');
      element.classList.remove('d-none');
    });
    console.log(count);
  }
});

const getTitle = document.querySelector('.title');
const getBtnOne = document.querySelector('.btn-one');
const getBtnTwo = document.querySelector('.btn-two');
getBtnOne.addEventListener('click', () => {
  getTitle.innerHTML = 'LIFE STYLE';
});

getBtnTwo.addEventListener('click', () => {
  getTitle.innerHTML = 'MEDIA & ADVERTISEMENT';
});
