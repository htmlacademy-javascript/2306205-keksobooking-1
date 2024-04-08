import {getFormActivated} from './form-activity.js';
import {showAlert, getSuccessMessage, getErrorMessage} from './util.js';
import {AMOUNT_USERS} from './data.js';
import {baloons} from './create-baloons.js';
import {addAdvertForm} from './form-validator.js';

const getData = (classForm, onSuccess) => {
  fetch('https://28.javascript.htmlacademy.pro/keksobooking/data')
    .then((response) => {
      if (response.ok) {
        getFormActivated(classForm);
        return response.json();
      } else {
        throw new Error(`${response.status}`);
      }
    })
    .then((data) => {
      onSuccess(data.slice(0, AMOUNT_USERS));
    })
    .catch((error) => showAlert(`Не удалось загрузить данные с сервера. ${error}. Попробуйте обновить страницу`));
};

const sendData = (formBody) => {
  fetch(
    'https://28.javascript.htmlacadem.pro/keksobooking',
    {
      method: 'POST',
      body: formBody
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error;
      } else {
        getSuccessMessage();
        addAdvertForm.reset();
      }
    })
    .catch((error) => getErrorMessage(error));
};

getData('map__filters', baloons);


export {sendData};
