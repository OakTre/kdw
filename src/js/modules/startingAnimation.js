import gsap from "gsap";
import {
  ScrollTrigger
} from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default () => {
  const firstHeading = document.querySelector(".js-first-anim");
  const secondHeading = document.querySelector(".js-second-anim");
  const thidrHeading = document.querySelector(".js-third-anim");
  const animatedContainer = document.querySelector(".js-animated-container");
  const header = document.querySelector(".header");
  const sectionNumbders =document.querySelector(".numbers");
  const icon = document.querySelector(".intro__scroll-by-icon");
  const timeline = gsap.timeline();
  const preloader = document.querySelector(".preloder");

  timeline
    .to(preloader, {yPercent: -120, duration: 0.9, ease: "power3.out"});

  if (!firstHeading) return;

  gsap.set(".js-intro-text", {xPercent: -170});
  gsap.set(animatedContainer, {opacity: 0, y: "3rem"});
  gsap.set(header, {opacity: 0, y: "-1rem"});
  gsap.set(sectionNumbders, {opacity: 0, y: "1rem"});
  gsap.set(icon, {opacity: 0});

  timeline
    .to(firstHeading, {xPercent: 0, duration: 0.9, ease: "power3.out", clearProps: "all"})
    .to(secondHeading, {xPercent: 0, duration: 0.9, ease: "power3.out", clearProps: "all"}, "-=0.4")
    .to(thidrHeading, {xPercent: 0, duration: 0.9, ease: "power3.out", clearProps: "all"}, "-=0.6")
    .to(animatedContainer, {opacity: 1, y: 0, duration: 0.5, ease: "power3.out", clearProps: "all"}, "-=0.7")
    .to(header, {opacity: 1, y: 0, duration: 0.5, ease: "power3.out", clearProps: "all"}, "-=0.5")
    .to(sectionNumbders, {opacity: 1, y: 0, duration: 0.5, ease: "power3.out", clearProps: "all"}, "-=0.5")
    .to(icon, {opacity: 1, duration: 0.8, ease: "power3.out", clearProps: "all"});
};
