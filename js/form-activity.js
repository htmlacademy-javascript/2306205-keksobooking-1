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

// Функция для активации форм и фильтров

// const getFormActivated = () => {
//   forms.forEach((form) => {
//     form.classList.remove(form.className.contains([class='*--disabled']));

//     const formElements = Array.from(form.children);
//     formElements.forEach((formElement) => {
//       formElement.removeAttribute('disabled', '');
//     });
//   });
// };

