import Choices from 'choices.js';

export default () => {
  const url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/country";
  const token = "a289c2b7ddef08f438c0c3d326f474d32a3e4a7c";
  const dadataSelects = Array.from(document.querySelectorAll(".js-dadata-select"));

  let timerDelay;
  dadataSelects.forEach((select) => {
    let slct = new Choices(select, {
      searchEnabled: true,
      itemSelectText: '',
      searchPlaceholderValue: "Например Россия",
      noResultsText: 'Не найдено',
      shouldSort: false,
      allowHTML: true,
    });

    slct.passedElement.element.addEventListener(
      'search',
      function(event) {
        clearTimeout(timerDelay);

        timerDelay = setTimeout(() => {
          let query = event.detail.value;

          const options = {
            method: "POST",
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
              "Authorization": "Token " + token
            },
            body: JSON.stringify({ query: query })
          }

          fetch(url, options)
            .then((response) => response.text())
            .then((result) => {
              const resultData = JSON.parse(result);
              slct.clearChoices();

              for (const item of resultData.suggestions) {
                const country = item.value;
                console.log(item);

                slct.setChoices([
									{ value: country, label: country, selected: false }
								]);
              }
            })
            .catch(error => console.log("error", error));
        }, 300);
      }
    );
  });
};
