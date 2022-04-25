import Swiper, {
  Pagination
} from 'swiper/swiper-bundle';

Swiper.use([Pagination]);

export default () => {
  if (window.matchMedia("(max-width: 767px)").matches) {
    let slidergallery = new Swiper(".numbers__slider", {
      slidesPerView: 1,
      spaceBetween: 0,
      pagination: {
        el: ".numbers__slider-pagination",
        type: "bullets"
      }
    });
  }
}
