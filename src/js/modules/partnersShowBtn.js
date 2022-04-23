export default() => {
  const btns = Array.from(document.querySelectorAll(".js-partners-show-btn"));

  btns.forEach(btn=>{
    const items = btn.closest(".js-partners-container").querySelectorAll(".partners__item");

    if (items.length <= 8) {
      btn.style.display = "none";
    }

    btn.addEventListener("click", ()=>{
      const parentContainer = btn.closest(".js-partners-container");
      const list = parentContainer.querySelector(".partners__list");

      list.classList.toggle("is-all");
      btn.classList.toggle("is-active");
    });
  });
};
