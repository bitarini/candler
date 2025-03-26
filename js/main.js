// mobile menu button

const menuBtn = document.querySelector('.mobile-menu__btn');
const menuMobile = document.querySelector('.mobile__menu-list');

menuBtn.addEventListener('click', function () {
    menuMobile.classList.toggle('mobile__menu-open');
});

const swiperOne = new Swiper('.feedback__slider', {
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
    },
    
  });

const swiperTwo = new Swiper('.certificates__slider', {
    loop: true,
    slidesPerView: "3",
    spaceBetween: 20,

    breakpoints: {
      640: {
        slidesPerView: 3,
      },

      480: {
        slidesPerView: 2,
      },

      360: {
        slidesPerView: 1,
      },
    },
  
    pagination: {
      el: '.swiper-pagination',
    },
    
  });

  const accordeon = document.querySelector('.accordeon');
  const accordeonTitles = document.querySelectorAll('.accordeon__btn--title');

  accordeonTitles.forEach.call(accordeonTitles, function(accordeonTitle) {
    accordeonTitle.addEventListener('click', function() {
      const currentText = accordeonTitle.parentElement.querySelector('.accordeon__text');
      accordeonTitle.classList.toggle('accordeon__btn--title--active');
      currentText.classList.toggle('accordeon__text--visible');

      if (currentText.classList.contains('accordeon__text--visible')) {
        currentText.style.maxHeight = currentText.scrollHeight + 'px'
      }
      else {
        currentText.style.maxHeight =  null
      }
    });
  });