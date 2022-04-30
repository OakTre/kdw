import gsap from "gsap";
import {
  ScrollTrigger
} from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default () => {
  const headerHeight = document.querySelector(".header").offsetHeight;
  const programmPosition = Array.from(document.querySelectorAll(".programm__themes ul li"));
  const programmNumbersCount = document.querySelector(".programm__nubmers-count");
  const programmNumber = document.querySelector(".programm__nubmers-position");
  programmNumbersCount.innerHTML = "0" + programmPosition.length;

  let num = 0;

  programmPosition.forEach(position => {
    num++;
    let layout = `
      <span class="_number">0${num}</span>
    `;
    programmNumber.innerHTML += layout;
  });

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

  const timelime3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".programm__themes",
      start: `top ${headerHeight + 2}rem`,
      end: '+=1950rem',
      scrub: true,
    }
  });

  gsap.utils.toArray(".programm__themes ul li").forEach(li => {
    gsap.set(li, { visibility: "hidden" });
  });
  gsap.utils.toArray(".programm__nubmers-position ._number").forEach(number => {
    gsap.set(number, { visibility: "hidden" });
  });
  gsap.set(".programm__themes-btn", { opacity: 0 });

  timelime
    .to(".programm__themes ul li", {
      // color: 'white',
      visibility: "visible",
      duration: 1,
      stagger: 0.4,
    })
    .to(".programm__themes-btn", { opacity: 1, clearProps: "all" });

  timelime2
    .fromTo(".programm__nubmers", {
      opacity: 0
    }, {
      opacity: 1
    })
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
    }, "-=1.3")

  timelime3
    .to(".programm__nubmers-position ._number", {
      visibility: "visible",
      stagger: 0.4,
      duration: 1,
      "--offsetWidth": (index, element) => {
        return element.offsetWidth + "px";
      }
    })
    .to(".programm__nubmers-position ._number:not(:last-child)", { visibility: "hidden", stagger: 0.4 }, "-=2");
};
