$('.js-toggle-search').on('click', function(){
  $('.sp-search-content').toggleClass('is-hide');
});

var swiper = new Swiper('.swiper-container', {
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev',
  pagination: '.swiper-pagination',
  paginationClickable: true,
  slidesPerView: 3,
  spaceBetween: 20,
  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    }
  }
});

// var swiper = new Swiper('.swiper-container', {
//   nextButton: '.swiper-button-next',
//   prevButton: '.swiper-button-prev',
//   pagination: '.swiper-pagination',
//   paginationClickable: true,
//   // Disable preloading of all images
//   preloadImages: false,
//   // Enable lazy loading
//   lazyLoading: true
// });
