(function () {
  "use strict";

  function validate(form) {
    var valid = true;
    form.querySelectorAll("[required]").forEach(function (field) {
      var wrapper = field.closest(".field");
      var empty = !field.value.trim();
      var emailInvalid = field.type === "email" && field.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value);
      var invalid = empty || emailInvalid;
      wrapper.classList.toggle("is-invalid", invalid);
      field.setAttribute("aria-invalid", String(invalid));
      if (invalid) valid = false;
    });
    return valid;
  }

  function connectForm(selector, message) {
    var form = document.querySelector(selector);
    if (!form) return;
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (!validate(form)) return;
      form.reset();
      form.querySelectorAll(".field").forEach(function (field) {
        field.classList.remove("is-invalid");
      });
      if (window.showDemoToast) window.showDemoToast(message);
      var status = form.querySelector("[data-form-status]");
      if (status) {
        status.textContent = message;
        status.hidden = false;
      }
    });
    form.querySelectorAll("[required]").forEach(function (field) {
      field.addEventListener("input", function () {
        field.closest(".field").classList.remove("is-invalid");
        field.removeAttribute("aria-invalid");
      });
    });
  }

  connectForm("[data-partner-form]", "Спасибо. Информация о сотрудничестве успешно сохранена в демо-версии.");
  connectForm("[data-contact-form]", "Спасибо. Ваше сообщение успешно сохранено в демо-версии.");
})();
