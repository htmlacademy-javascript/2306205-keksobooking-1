import {map, mainMarker} from './create-map.js';
import {sendData} from './fetch-data.js';
import {roomsOption, priceOption} from './data.js';
import {removeAdvertImages} from './load-photo.js';

const priceSliderField = document.querySelector('.ad-form__slider');
const addAdvertForm = document.querySelector('.ad-form');
const rooms = addAdvertForm.querySelector('#room_number');
const guests = addAdvertForm.querySelector('#capacity');
const price = addAdvertForm.querySelector('#price');
const type = addAdvertForm.querySelector('#type');
const timein = addAdvertForm.querySelector('#timein');
const timeout = addAdvertForm.querySelector('#timeout');
const buttonResetForm = addAdvertForm.querySelector('.ad-form__reset');


// Проверка комнат и количества гостей
const pristine = new Pristine(addAdvertForm, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
  errorClass: 'ad-form__element--invalid'
});

function validateGuests () {
  return roomsOption[rooms.value].includes(guests.value);
}

function getErrorGuestsMessage () {
  if (rooms.value === '100') {
    return 'Для вашего королевского двора выберите "не для гостей"';
  } else if (guests.value === '0') {
    return 'Здесь подойдет только 100 комнат';
  } else if (rooms.value === '1' || rooms.value === '2' || rooms.value === '3') {
    return `Для ${guests.value}-х гостей нужно не менее ${guests.value}-х комнат`;
  }
}

pristine.addValidator(rooms, validateGuests, getErrorGuestsMessage);

// Изменение минимального значения и плейсхолдера цены в зависимости от типа жилья
price.min = priceOption['flat'];

type.addEventListener('change', () => {
  price.placeholder = priceOption[type.value];
  price.min = priceOption[type.value];
});


function validatePrice () {
  return +price.min <= +price.value;
}

function getErrorPriceMessage () {
  return `Минимальная цена ${price.min} руб.`;
}

pristine.addValidator(price, validatePrice, getErrorPriceMessage);

// Связывание полей заезда и выезда
timein.addEventListener('change', () => {
  timeout.value = timein.value;
});

timeout.addEventListener('change', () => {
  timein.value = timeout.value;
});


// Слушатель и валидация
addAdvertForm.addEventListener('change', () => {
  pristine.validate();
});


// Данные в поле координат
const address = addAdvertForm.querySelector('#address');
const initialLatLng = mainMarker.getLatLng();
address.value = `${initialLatLng.lat}, ${initialLatLng.lng}`;

mainMarker.on('moveend', (evt) => {
  const newLatLng = evt.target.getLatLng();
  address.value = `${newLatLng.lat.toFixed(5)}, ${newLatLng.lng.toFixed(5)}`;
});


// Функция очистки формы
const resetForm = () => {
  map.setView({
    lat: 35.6895,
    lng: 139.69171,
  }, 12);
  mainMarker.setLatLng({
    lat: 35.6895,
    lng: 139.69171,
  });
  addAdvertForm.reset();
  removeAdvertImages();
  address.value = `${initialLatLng.lat}, ${initialLatLng.lng}`;
  price.placeholder = '1000';
  pristine.reset();
  price.min = priceOption['flat'];
  priceSliderField.noUiSlider.reset();
  map.closePopup();
};


// Функция отправки формы
addAdvertForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const formData = new FormData(evt.target);
  const isFormValidated = pristine.validate();

  if (isFormValidated) {
    sendData(formData, resetForm);
  }
});

// Функция сброса формы
buttonResetForm.addEventListener('click', (evt) => {
  evt.preventDefault();
  resetForm();
});


export {price, type, priceOption, addAdvertForm, priceSliderField};
