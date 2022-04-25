import Swiper, {
  Navigation
} from 'swiper/swiper-bundle';

Swiper.use([Navigation]);

export default () => {
  const sliders = Array.from(document.querySelectorAll(".js-participants-slider"));

  sliders.forEach(slider=>{
    const parentContainer = slider.closest(".participants__slider-wrapper");

    let sliderparticipants = new Swiper(slider, {
      slidesPerView: 4,
      spaceBetween: 32,
      navigation: {
        nextEl: parentContainer.querySelector(".js-participants-btn-next"),
        prevEl: parentContainer.querySelector(".js-participants-btn-prev"),
      },
      breakpoints: {
        280: {
          slidesPerView: 1.2,
          spaceBetween: 30
        },
        767: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 32
        },
      }
    });
  });

}
