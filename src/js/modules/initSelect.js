import Choices from 'choices.js';

export default function initSelects() {
  const customSelects = Array.from(document.querySelectorAll('.js-custom-select'));
  const customSelectsWithSearch = Array.from(document.querySelectorAll('.js-custom-select-search'));
  const clearBtns = document.querySelectorAll(".js-choises-clear");

  if (document.querySelectorAll('.js-custom-select')) {
    customSelects.forEach((select) => {
      let slct = new Choices(select, {
        searchEnabled: false,
        itemSelectText: '',
        shouldSort: false,
				allowHTML: true,
      });
    });
  }
};
