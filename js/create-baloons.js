import {getAdvertsList} from './create-adverts-list.js';
import {getWordRoom, getWordGuests} from './util.js';
import {map} from './create-map.js';

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

// Функция для формирования попапа для маркеров карты
const createBaloon = (card) => {
  const cardTemplate = document.querySelector('#card')
    .content
    .querySelector('.popup');

  const cardsItem = cardTemplate.cloneNode(true);

  cardsItem.querySelector('.popup__avatar').src = card.author.avatar;
  cardsItem.querySelector('.popup__title').textContent = card.offer.title;
  cardsItem.querySelector('.popup__text--address').textContent = card.offer.address;
  cardsItem.querySelector('.popup__text--price').textContent = `${card.offer.price} ₽/сутки`;
  cardsItem.querySelector('.popup__type').textContent = getAccommodationType(card.offer.type);
  cardsItem.querySelector('.popup__text--capacity').textContent = `${card.offer.rooms} ${getWordRoom(card)} для ${card.offer.guests} ${getWordGuests(card)}`;
  cardsItem.querySelector('.popup__text--time').textContent = `Заезд после ${card.offer.checkin}, выезд до ${card.offer.checkout}`;
  cardsItem.querySelector('.popup__description').textContent = (card.offer.description) ? card.offer.description : '';
  somePhotos(cardsItem, '.popup__photos', card.offer.photos);
  addFeatures(cardsItem, card.offer.features);
  return cardsItem;
};

// Меняем иконку на карте
const smallIcon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

// Размещаем маркеры моковых карточек
cards.forEach((card) => {
  const marker = L.marker(
    {
      lat: card.location.lat,
      lng: card.location.lng,
    },
    {
      icon: smallIcon,
    },
  );
  marker.addTo(map)
    .bindPopup(createBaloon(card));
});
