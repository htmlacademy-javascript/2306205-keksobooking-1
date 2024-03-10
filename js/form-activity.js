
const getFormDisabled = (formClass, formFieldsclass) => {

  const form = document.querySelector(`.${formClass}`);
  const formFields = document.querySelectorAll(`.${formFieldsclass}`);

  form.classList.add(`${formClass}--disabled`);

  formFields.forEach((formField) => {
    formField.setAttribute('disabled', 'disabled');
  });
};


getFormDisabled('ad-form', 'ad-form__element');
getFormDisabled('map__filters', 'map__filter');


// Функция для активации формы и фильтров

// const getFormActive = (formClass, formFieldsclass) => {

//   const form = document.querySelector(`.${formClass}`);
//   const formFields = document.querySelectorAll(`.${formFieldsclass}`);

//   form.classList.remove(`${formClass}--disabled`);

//   formFields.forEach((formField) => {
//     formField.removeAttribute('disabled', 'disabled');
//   });
// };

// getFormActive('ad-form', 'ad-form__element');
// getFormActive('map__filters', 'map__filter');
