const forms = document.querySelectorAll('form');

const getFormDisabled = () => {

  forms.forEach((form) => {
    form.classList.add(`${form.className}--disabled`);

    const formElements = Array.from(form.children);
    formElements.forEach((formElement) => {
      formElement.setAttribute('disabled', '');
    });
  });
};

getFormDisabled();


// Функция для активации формы
const getFormActivated = (formClass) => {
  forms.forEach((form) => {

    form.classList.remove(`${formClass}--disabled`);

    const formElements = Array.from(form.children);
    formElements.forEach((formElement) => {
      formElement.removeAttribute('disabled', '');
    });
  });
};

export {getFormActivated};
