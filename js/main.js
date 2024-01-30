
// Вспомогательные функции и массивы
const AMOUNT_USERS = 10;

const getRandomPoint = (min, max, digits) =>
  ([min, max, digits].find((element) => element < 0 || typeof element !== 'number')) ?
    NaN : (Math.random() * (max - min) + min).toFixed(digits);


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

const createRandomLinksId = createRandomIdFromRangeGenerator(1, AMOUNT_USERS);

const getRandomLinksId = () => {
  const currentLinksId = createRandomLinksId();
  return (currentLinksId < AMOUNT_USERS) ? `${0}${currentLinksId}` : currentLinksId;
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


const typesAccommodation = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const checkTimes = ['12:00', '13:00', '14:00'];
const facilities = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const photoLinks = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];


// Объекты
const getAuthor = () => ({
  avatar: `img/avatars/user${getRandomLinksId()}.png`
});


const getLocationPoint = () => ({
  lat: getRandomPoint(35.65000, 35.70000, 5),
  lng: getRandomPoint(139.70000, 139.80000, 5),
});

const getOffer = (locationPoint) => ({
  title: 'Лучшее жилье на побережье',
  address: `${locationPoint.lat}, ${locationPoint.lng}`,
  price: getRandomInteger(1000, 10000),
  type: typesAccommodation[getRandomInteger(0, typesAccommodation.length - 1)],
  rooms: getRandomInteger(1, AMOUNT_USERS),
  guests: getRandomInteger(1, 5),
  checkin: checkTimes[getRandomInteger(0, 2)],
  checkout: checkTimes[getRandomInteger(0, 2)],
  features: getRandomArray(facilities),
  description: 'Пять минут пешком до моря, стоянка на два автомобиля, прекрасный сад и бассейн во дворе',
  photos: getRandomArray(photoLinks),
});

const getAdvert = () => {
  const locationPoint = getLocationPoint();
  return {
    author: getAuthor(),
    offer: getOffer(locationPoint),
    location: locationPoint
  };
};

const getadvertsList = () => Array.from({ length: AMOUNT_USERS }, getAdvert);

getadvertsList();
