import Swiper, {
  Navigation
} from 'swiper/swiper-bundle';

Swiper.use([Navigation]);

export default () => {
  let slidergallery = new Swiper(".js-gallery-slider", {
    slidesPerView: 'auto',
    spaceBetween: 0,
    initialSlide: 1,
    watchOverflow: true,
    speed: 500,
    centeredSlides: true,
    navigation: {
      nextEl: '.js-gallery-btn-next',
      prevEl: '.js-gallery-btn-prev',
    },
    breakpoints: {
      280: {
        slidesPerView: 1.2,
        spaceBetween: 25,
        centeredSlides: false,
        initialSlide: 0,
      },
      1200: {
        slidesPerView: 'auto',
        spaceBetween: 0
      },
    }
  });
}
