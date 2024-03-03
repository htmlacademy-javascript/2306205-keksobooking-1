import {getAdvertsList} from './create-adverts-list.js';

const cardTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

const mapCanvas = document.querySelector('.map__canvas');

const cards = getAdvertsList();

// Тип жилья
const getAccommodationType = (AccommodationType) => {
  switch (AccommodationType) {
    case 'palace':
      return 'Дворец';
    case 'flat':
      return 'Квартира';
    case 'house':
      return 'Дом';
    case 'bungalow':
      return 'Бунгало';
    case 'hotel':
      return 'Отель';
    default:
      return 'Уточнить у владельца';
  }
};

// Функция для добавления фото
const somePhotos = (cardsItem, listClass, arrayPhotos) => {
  const listPhotos = cardsItem.querySelector(listClass);
  listPhotos.querySelector('img').src = arrayPhotos[0];

  for (let i = 1; i < arrayPhotos.length; i++) {
    const theImage = listPhotos.querySelector('img').cloneNode(true);
    theImage.src = arrayPhotos[i];
    listPhotos.appendChild(theImage);
  }
};


// Функция для добавления характеристик жилья
const addFeatures = (cardsItem, featuresArray) => {

  const featuresContainer = cardsItem.querySelector('.popup__features');
  const featuresList = featuresContainer.querySelectorAll('.popup__feature');

  featuresList.forEach((featureItem) => {
    const isNecessary = featuresArray.some(
      (feature) => featureItem.classList.contains(`popup__feature--${feature}`),
    );

    if (!isNecessary) {
      featureItem.remove();
    }
  });
};

// Формируем карточки
cards.forEach((card) => {
  const cardsItem = cardTemplate.cloneNode(true);

  // Заменяю форму слова
  const wordRoom = () => {
    if (card.offer.rooms === 1) {
      return 'комната';
    } else if (card.offer.rooms > 4) {
      return 'комнат';
    }
    return 'комнаты';
  };
  // Сделал сначала через переменную с тернарным оператором, но линтер не позволяет использовать, это ошибка?
  // const wordRoom = (card.offer.rooms > 4) ? 'комнат' : (card.offer.rooms = 1) ? 'комната' : 'комнаты';


  cardsItem.querySelector('.popup__avatar').src = card.author.avatar;

  cardsItem.querySelector('.popup__title').textContent = card.offer.title;
  cardsItem.querySelector('.popup__text--address').textContent = card.offer.address;
  cardsItem.querySelector('.popup__text--price').textContent = `${card.offer.price} ₽/сутки`;
  cardsItem.querySelector('.popup__type').textContent = getAccommodationType(card.offer.type);
  cardsItem.querySelector('.popup__text--capacity').textContent = `${card.offer.rooms} ${wordRoom()} для ${card.offer.guests} гостей`;
  cardsItem.querySelector('.popup__text--time').textContent = `Заезд после ${card.offer.checkin}, выезд до ${card.offer.checkout}`;
  cardsItem.querySelector('.popup__description').textContent = (card.offer.description) ? card.offer.description : '';
  somePhotos(cardsItem, '.popup__photos', card.offer.photos);
  addFeatures(cardsItem, card.offer.features);

  mapCanvas.append(cardsItem);
});


// Скроем все карточки, кроме первой
const allCards = document.querySelectorAll('.popup');
for (let i = 1; i < allCards.length; i++) {
  allCards[i].classList.add('visually-hidden');
}
