import clearForm from '../helpers/clearForm.js';

export default () => {
  const labels = Array.from(document.querySelectorAll(".js-registration-label"));
  const btn = document.querySelector(".registration-type__btn");
  const forms = Array.from(document.querySelectorAll(".registration-form"));
  const backBtns = Array.from(document.querySelectorAll(".js-registration-btn-back"));
  const regType = document.querySelector(".registration-type");

  labels.forEach(label => {
    label.onchange = () => {
      let tabVal = label.value;

      btn.classList.remove("disabled");
      btn.dataset.form = tabVal;
    }
  });

  btn.addEventListener("click", () => {
    forms.forEach(form => {
      if (form.dataset.formName === btn.dataset.form) {
        forms.forEach(form => form.classList.remove("is-active"));

        regType.classList.add("is-hidden");
        form.classList.add("is-active");
        form.querySelector(".js-registration-btn-back").dataset.formBack = btn.dataset.form;
      };
    });
  });

  backBtns.forEach(backBtn => {
    backBtn.addEventListener("click", ()=> {
      forms.forEach(form => {
        if (backBtn.dataset.formBack === form.dataset.formName) {
          regType.classList.remove("is-hidden");
          forms.forEach(form => form.classList.remove("is-active"));
          clearForm(form);
        };
      });
    });
  });
};
