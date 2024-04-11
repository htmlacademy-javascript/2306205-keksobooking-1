import {getWordRoom, getWordGuests} from './util.js';
import {map} from './create-map.js';

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
const createImages = (parentItem, imageListClass, arrayPhotos) => {
  const listImages = parentItem.querySelector(imageListClass);
  const imageElement = listImages.querySelector('img');
  imageElement.src = arrayPhotos[0];

  if (arrayPhotos.length > 1) {
    for (let i = 1; i < arrayPhotos.length; i++) {
      const additionalImageElement = imageElement.cloneNode(true);
      additionalImageElement.src = arrayPhotos[i];
      listImages.appendChild(additionalImageElement);
    }
  } else if (arrayPhotos.length === 0) {
    listImages.remove();
  }
};


// // Функция для добавления характеристик жилья
const addFeatures = (cardsItem, featuresArray) => {

  const featuresContainer = cardsItem.querySelector('.popup__features');
  const featuresList = featuresContainer.querySelectorAll('.popup__feature');

  if (featuresArray) {
    featuresList.forEach((featureItem) => {
      const isNecessary = featuresArray.some(
        (feature) => featureItem.classList.contains(`popup__feature--${feature}`),
      );
      if (!isNecessary) {
        featureItem.remove();
      }
    });
  }
};

// Функция для формирования попапа для маркеров карты
const createPopup = (card) => {
  const popupTemplate = document.querySelector('#card').content.querySelector('.popup');
  const popupItem = popupTemplate.cloneNode(true);

  popupItem.querySelector('.popup__avatar').src = card.author.avatar;
  popupItem.querySelector('.popup__title').textContent = card.offer.title;
  popupItem.querySelector('.popup__text--address').textContent = card.offer.address;
  popupItem.querySelector('.popup__text--price').textContent = `${card.offer.price} ₽/сутки`;
  popupItem.querySelector('.popup__type').textContent = getAccommodationType(card.offer.type);
  popupItem.querySelector('.popup__text--capacity').textContent = `${card.offer.rooms} ${getWordRoom(card)} для ${card.offer.guests} ${getWordGuests(card)}`;
  popupItem.querySelector('.popup__text--time').textContent = `Заезд после ${card.offer.checkin}, выезд до ${card.offer.checkout}`;
  popupItem.querySelector('.popup__description').textContent = (card.offer.description) ? card.offer.description : '';
  createImages(popupItem, '.popup__photos', card.offer.photos);
  addFeatures(popupItem, card.offer.features);
  return popupItem;
};


// Меняем иконку на карте
const smallIcon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});


// Размещаем маркеры карточек
const createBaloons = (cards) => {
  cards.forEach((element) => {
    const marker = L.marker(
      {
        lat: element.location.lat,
        lng: element.location.lng,
      },
      {
        icon: smallIcon,
      },
    );
    marker.addTo(map)
      .bindPopup(createPopup(element));
  });
};

export {createBaloons};
