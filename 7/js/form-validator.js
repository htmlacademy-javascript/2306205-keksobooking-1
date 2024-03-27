// Проверка комнат и количества гостей

const addAdvertForm = document.querySelector('.ad-form');
const rooms = addAdvertForm.querySelector('#room_number');
const guests = addAdvertForm.querySelector('#capacity');


const pristine = new Pristine(addAdvertForm, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
  errorClass: 'ad-form__element--invalid'
});

const roomsOption = {
  '100': '0',
  '1': '1',
  '2': ['1', '2'],
  '3': ['1', '2', '3'],
};


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

// Изменение минимального значения и плейсхолдера цены в зависимости от типа жилья
const price = addAdvertForm.querySelector('#price');
const type = addAdvertForm.querySelector('#type');

const priceOption = {
  'bungalow': '0',
  'flat': '1000',
  'hotel': '3000',
  'house': '5000',
  'palace': '10000',
};

price.addEventListener('focus', () => {
  price.min = priceOption[type.value];
});

type.addEventListener('change', () => {
  price.placeholder = priceOption[type.value];
});

function validatePrice () {
  return +price.min <= +price.value;
}

function getErrorPriceMessage () {
  return `Минимальная цена ${price.min} руб.`;
}

pristine.addValidator(price, validatePrice, getErrorPriceMessage);
pristine.addValidator(rooms, validateGuests, getErrorGuestsMessage);

// Связывание полей заезда и выезда
const timein = addAdvertForm.querySelector('#timein');
const timeout = addAdvertForm.querySelector('#timeout');

timein.addEventListener('change', () => {
  timeout.value = timein.value;
});

timeout.addEventListener('change', () => {
  timein.value = timeout.value;
});


// Слушатель и валидация
// addAdvertForm.addEventListener('change', () => {
//   pristine.validate();
// });

addAdvertForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
