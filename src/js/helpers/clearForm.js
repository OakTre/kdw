import $ from 'jquery';

export default (form) => {
  const inputs = Array.from(form.querySelectorAll("input"));
  const textareas = Array.from(form.querySelectorAll("textarea"));
  const checkboxs = Array.from(form.querySelectorAll("input[type=checkbox]"));
  const validatedForms = Array.from(window.kdwAPI.parsleyForms);

  inputs.forEach(inpt => {
    inpt.value = "";
  });
  textareas.forEach(txtarea => {
    txtarea.value = "";
  });
  checkboxs.forEach(chckBox => {
    chckBox.checked = false;
  });

  validatedForms.forEach(form => {
    form.reset();
  });
};
