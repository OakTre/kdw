import { Modal } from "./Modal";
import clearForm from "../helpers/clearForm";

export default () => {
  const modal = new Modal({
    isOpen: (modal) => {

    },
    isClose: (modal) => {
      if (modal.modalContainer.classList.contains("js-modal-registrtion")) {
        const forms = Array.from(modal.modalContainer.querySelectorAll(".registration-form"));
        const regType = modal.modalContainer.querySelector(".registration-type");
        const regTypeLables = Array.from(modal.modalContainer.querySelectorAll(".js-registration-label"));

        regTypeLables.forEach(label => label.checked = false);

        regType.classList.remove("is-hidden");

        forms.forEach(form => {
          form.classList.remove("is-active");
          clearForm(form);
        });
      }
    },
  });
};
