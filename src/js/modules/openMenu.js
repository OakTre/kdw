import { disableScroll, enableScroll } from "../helpers/disableScroll";

export default() => {
  const menu = document.querySelector(".menu");
  const menuOpenBtn = document.querySelector(".js-open-menu");
  const header = document.querySelector(".header");

  let flag = false;
  window.flag = flag;

  menuOpenBtn.addEventListener("click", ()=>{
    menuOpenBtn.classList.toggle("is-active");
    menu.classList.toggle("is-active");
    header.classList.toggle("menu-is-opened");

    switch (window.flag) {
      case false:
        console.log(window.flag);
        disableScroll();
        window.flag = true;
        break;
      case true:
        enableScroll();
        window.flag = false;
        break;
    }
  });
};
