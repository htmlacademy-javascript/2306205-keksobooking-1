
// Вспомогательные функции и массивы

const getRandomPoint = (min, max, digits) => {
  return ([min, max, digits].find((element) => element < 0 || typeof element !== 'number')) ?
  NaN : (Math.random() * (max - min) + min).toFixed(digits);
}


function getRandomInteger (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}


function createRandomIdFromRangeGenerator (min, max) {
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
}

function getRandomArray (array) {
  let amountElements = getRandomInteger(1, array.length);
  let indexElement = createRandomIdFromRangeGenerator(0, array.length - 1);
  const currenArray = [];

  while (currenArray.length < amountElements) {
    currenArray.push(array[indexElement()]);
  }
  return currenArray;
  }


const typeAccommodation = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const time = ['12:00', '13:00', '14:00'];
const facilities = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner']; // Создать новый массив со случаным количеством лементов их этого
const photoLinks = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];


// Объекты

let author = {
  avatar: 'img/avatars/user' + createRandomIdFromRangeGenerator(1, 10)() + '.png'
}

let location = {
  lat: getRandomPoint(35.65000, 35.70000, 5),
  lng: getRandomPoint(139.70000, 139.80000, 5),
}

let offer = {
  title: 'Лучшее жилье на побережье',
  address: location,
  price: getRandomInteger(1000, 10000),
  type: typeAccommodation[getRandomInteger(0, typeAccommodation.length - 1)],
  rooms: getRandomInteger(1, 10),
  guests: getRandomInteger(1, 5),
  checkin: time[getRandomInteger(0, 2)],
  checkout: time[getRandomInteger(0, 2)],
  features: getRandomArray(facilities),
  description: 'Пять минут пешком до моря, стоянка на два автомобиля, прекрасный сад и бассейн во дворе',
  photos: getRandomArray(photoLinks)
}


function Advert(author, offer, location) {
  this.author = author;
  this.offer = offer;
  this.location = location;
}



// Массив объектов

let rentAdvertsList = [];

function getRentAdvertsList () {

while (rentAdvertsList.length <= 10) {
  let rentAdvert = new Advert (author, offer, location);
  rentAdvertsList.push(rentAdvert);
}

return rentAdvertsList
}

console.log(getRentAdvertsList());
