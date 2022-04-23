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
    // breakpoints: {
    //   320: {
    //     slidesPerView: 1.1,
    //     spaceBetween: 10
    //   },
    //   767: {
    //     slidesPerView: 2,
    //     spaceBetween: 20
    //   },
    //   1200: {
    //     slidesPerView: 3,
    //     spaceBetween: 20
    //   },
    // }
  });
}
