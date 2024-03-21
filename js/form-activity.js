const forms = document.querySelectorAll('form');

const getFormDisabled = () => {

  forms.forEach((form) => {
    form.classList.add(`${form.className}--disabled`);

    const formElements = Array.from(form.children);

    formElements.forEach((formElement) => {
      formElement.disabled = true;
    });
  });
};

getFormDisabled();

// Функция для активации форм и фильтров

const getFormActivated = (formClass) => {
  forms.forEach((form) => {

    form.classList.remove(`${formClass}--disabled`);

    const formElements = Array.from(form.children);
    formElements.forEach((formElement) => {
      formElement.removeAttribute('disabled', '');
    });
  });
};

getFormActivated('ad-form');
