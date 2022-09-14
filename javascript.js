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

const swiper1 = new Swiper('.mySwiper', {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    // dynamicBullets: true,
  },
  // mousewheel: true,
  keyboard: true,
});

const swiperTestimonial = new Swiper('.testimonialSwiper', {
  // cssMode: true,
  loop: true,
  centeredSlides: true,
  allowTouchMove: true,
  // autoHeight: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    // el: '.swiper-pagination',
    // dynamicBullets: true,

  },
  clickable: true,
  // mousewheel: true,
  keyboard: true,

});

// const swipertest = new Swiper('.testimonialSwiper', {
//   spaceBetween: 30,
//   cssMode: true,
//   loop: true,
//   pagination2: {
//     el: '.swiper-pagination2',
//     clickable: true,
//   },
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });

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
// hide.addEventListener('click', () => {
//   cont.forEach((element) => {
//     element.setAttribute('class', 'd-none');
//   });
// });
