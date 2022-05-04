import { Modal } from "./Modal";
import clearForm from "../helpers/clearForm";

export default () => {
  const modal = new Modal({
    isOpen: (modal) => {
      const prevActiveElmnt = modal.previousActiveElement;

      console.log(prevActiveElmnt.hasAttribute("data-reg-form"));

      if (prevActiveElmnt.hasAttribute("data-reg-form")) {
        const regType = modal.modalContainer.querySelector(".registration-type");
        const regTypeLables = Array.from(modal.modalContainer.querySelectorAll(".js-registration-label"));
        const btn = regType.querySelector(".registration-type__btn");

        regTypeLables.forEach(label => {
          if (label.value === "speeker") {
            label.checked = true;

            btn.classList.remove("disabled");
            btn.dataset.form = "speeker";
          }
        });
      }
    },
    isClose: (modal) => {
      if (modal.modalContainer.classList.contains("js-modal-registrtion")) {
        const forms = Array.from(modal.modalContainer.querySelectorAll(".registration-form"));
        const regType = modal.modalContainer.querySelector(".registration-type");
        const regTypeLables = Array.from(modal.modalContainer.querySelectorAll(".js-registration-label"));
        const btn = regType.querySelector(".registration-type__btn");

        regTypeLables.forEach(label => label.checked = false);

        regType.classList.remove("is-hidden");
        btn.classList.add("disabled");

        forms.forEach(form => {
          form.classList.remove("is-active");
          clearForm(form);
        });
      }

      if (modal.modalContainer.classList.contains("js-modal-callbak")) {
        const callbackForm = modal.modalContainer.querySelector(".callback__form");
        clearForm(callbackForm);
      }
    },
  });
};
