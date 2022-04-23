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
