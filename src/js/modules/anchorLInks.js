import gsap from "gsap";
import {
  ScrollToPlugin
} from "gsap/dist/ScrollToPlugin";
import { disableScroll, enableScroll } from "../helpers/disableScroll";

gsap.registerPlugin(ScrollToPlugin);

export default function anchorLinks() {
  const header = document.querySelector('.header');
  const menu = document.querySelector(".menu");
  const OFFSET = 120;
  const DURATION = 1;
  const scrollByHash = (hash) => {
    const elementToScroll = document.querySelector(hash);
    if (elementToScroll) {
      if (header.classList.contains("menu-is-opened") && window.flag === true) {
        header.classList.remove("menu-is-opened");
        header.querySelector('.header__burger-btn').classList.remove("is-active");
        menu.classList.remove("is-active");

        enableScroll();
        window.flag = false;
      }
      gsap.to(window, {
        duration: DURATION,
        ease: "power2.out",
        scrollTo: {
          y: elementToScroll,
          autoKill: false,
          offsetY: header ? header.offsetHeight * 1.3 : OFFSET,
        },
      });
    } else {
      console.error("No element to scroll");
    }
  };
  document.addEventListener("click", (event) => {
    if (event.target.matches("a") || event.target.closest("a")) {
      const link = event.target.matches("a") ?
        event.target :
        event.target.closest("a");
      const hash = link.hash;

      // console.log('Hash', hash);

      const url = new URL(link.href);
      const pageUrl = new URL(window.location);

      if (pageUrl.pathname !== url.pathname) return;

      if (hash) {
        event.preventDefault();
        scrollByHash(hash);
      }
    }
  });

  if (window.location.hash) {
    scrollByHash(window.location.hash);
  }
}
