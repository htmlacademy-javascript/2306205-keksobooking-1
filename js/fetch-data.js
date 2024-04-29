import {getFormActivated} from './form-activity.js';
import {showAlert, getSuccessMessage, getErrorMessage} from './util.js';

const BASE_URL = 'https://28.javascript.htmlacademy.pro/keksobooking';
const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};

// Получение данных
const getData = (cb) => {
  fetch(`${BASE_URL}${Route.GET_DATA}`)
    .then((response) => {
      if (response.ok) {
        getFormActivated('map__filters');
        return response.json();
      } else {
        throw new Error();
      }
    })
    .then(cb)
    .catch(() => showAlert('Не удалось загрузить все данные с сервера. Попробуйте обновить страницу'));
};


// Отправка данных
const sendData = (formBody, clearForm) => {
  fetch(
    `${BASE_URL}${Route.SEND_DATA}`,
    {
      method: 'POST',
      body: formBody
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error;
      } else {
        getSuccessMessage();
        clearForm();
      }
    })
    .catch(() => getErrorMessage());
};

export {sendData, getData};
