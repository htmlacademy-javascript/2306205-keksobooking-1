import {getFormActivated} from './form-activity.js';
import {showAlert, getSuccessMessage, getErrorMessage} from './util.js';
import {AMOUNT_USERS} from './data.js';
import {createBaloons} from './create-baloons.js';
import {addAdvertForm} from './form-validator.js';

const BASE_URL = 'https://28.javascript.htmlacademy.pro/keksobooking';
const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};

const getData = (classForm, onSuccess) => {
  fetch(`${BASE_URL}${Route.GET_DATA}`)
    .then((response) => {
      if (response.ok) {
        getFormActivated(classForm);
        return response.json();
      } else {
        throw new Error();
      }
    })
    .then((data) => {
      onSuccess(data.slice(0, AMOUNT_USERS));
    })
    .catch(() => showAlert('Не удалось загрузить все данные с сервера. Попробуйте обновить страницу'));
};

const sendData = (formBody) => {
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
        addAdvertForm.reset();
      }
    })
    .catch(() => getErrorMessage());
};

getData('map__filters', createBaloons);


export {sendData};
