import {AMOUNT_USERS} from './data.js';

const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const createRandomIdFromRangeGenerator = (min, max) => {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      // console.error('Перебраны все числа из диапазона от ' + min + ' до ' + max);
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};


const getRandomArray = (array) => {
  const currentArray = [];
  const amountElements = getRandomInteger(1, array.length);
  const indexElement = createRandomIdFromRangeGenerator(0, array.length - 1);

  while (currentArray.length < amountElements) {
    currentArray.push(array[indexElement()]);
  }
  return currentArray;
};

const getRandomPoint = (min, max, digits) =>
  ([min, max, digits].find((element) => element < 0 || typeof element !== 'number')) ?
    NaN : (Math.random() * (max - min) + min).toFixed(digits);

const getLocationPoint = () => ({
  lat: getRandomPoint(35.65000, 35.70000, 5),
  lng: getRandomPoint(139.70000, 139.80000, 5),
});


// Заменяю форму слов
const getWordRoom = (card) => {
  if (card.offer.rooms === 1) {
    return 'комната';
  } else if (card.offer.rooms > 4) {
    return 'комнат';
  }
  return 'комнаты';
};

const getWordGuests = (card) => (card.offer.guests === 1) ? 'гостя' : 'гостей';


const createRandomLinksId = createRandomIdFromRangeGenerator(1, AMOUNT_USERS);

const getRandomLinksId = () => {
  const currentLinksId = createRandomLinksId();
  return (currentLinksId < AMOUNT_USERS) ? `0${currentLinksId}` : currentLinksId;
};

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '1000';
  alertContainer.style.position = 'absolute';
  alertContainer.style.minWidth = '300px';
  alertContainer.style.left = 'calc(50% - 150px)';
  alertContainer.style.top = '20%';
  alertContainer.style.right = 'calc(50% - 150px)';
  alertContainer.style.padding = '10px 5px';
  alertContainer.style.fontSize = '14px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, 5000);
};

const getSuccessMessage = () => {
  const successMessage = document.querySelector('#success').content.querySelector('.success').cloneNode(true);
  document.body.appendChild(successMessage);

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      document.body.removeChild(successMessage);
    }
  });

  document.addEventListener('click', () => {
    document.body.removeChild(successMessage);
  });
};

const getErrorMessage = () => {
  const errorMessage = document.querySelector('#error').content.querySelector('.error').cloneNode(true);
  document.body.appendChild(errorMessage);

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      document.body.removeChild(errorMessage);
    }
  });

  document.addEventListener('click', () => {
    document.body.removeChild(errorMessage);
  });
};


export {getRandomInteger, createRandomIdFromRangeGenerator, getRandomArray, getRandomPoint, getLocationPoint, getWordRoom, getWordGuests, getRandomLinksId, showAlert, getSuccessMessage, getErrorMessage};
