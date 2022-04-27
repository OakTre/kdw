import gsap from "gsap";
import {
  ScrollTrigger
} from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default () => {
  const headerHeight = document.querySelector(".header").offsetHeight;

  const timelime = gsap.timeline({
    scrollTrigger: {
      trigger: ".programm__themes",
      start: `top ${headerHeight + 2}rem`,
      end: '+=1950rem',
      pin: ".programm",
      scrub: true,
    }
  });

  const timelime2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".programm__themes",
      start: `top ${headerHeight + 2}rem`,
      end: '+=1950rem',
      scrub: true,
    }
  });

  // gsap.utils.toArray(".programm__themes ul li").forEach(li=>{
  //   gsap.set(li, {opacity: 0});
  // });
  gsap.set(".programm__themes-btn", {opacity: 0});

  timelime
    .to(".programm__themes ul li", {
      color: 'white',
      duration: 1,
      stagger: 0.4,
    })
    .to(".programm__themes-btn", {opacity: 1, clearProps: "all"});

  timelime2
    .to(".programm__themes ul li span", {
      color: "#07D827",
      transformOrigin: "left",
      scale: 1.3,
      duration: 1,
      stagger: 0.4,
      ease: "none",
    })
    .to(".programm__themes ul li span", {
      color: "white",
      scale: 1,
      stagger: 0.4,
      ease: "none",
    }, "-=2")
};
