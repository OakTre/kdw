import Swiper, {
  Navigation
} from 'swiper/swiper-bundle';

Swiper.use([Navigation]);

export default () => {
  let sliderexposure = new Swiper(".js-exposure-slider", {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
      nextEl: '.js-exposure-btn-next',
      prevEl: '.js-exposure-btn-prev',
    },
    breakpoints: {
      280: {
        slidesPerView: 1.2,
        spaceBetween: 25
      },
      767: {
        slidesPerView: 1,
        spaceBetween: 0,
      }
    }
  });
}
