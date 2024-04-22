import {createBaloons, removeBaloons} from './create-baloons.js';

const mainFilter = document.querySelector('.map__filters');
const priceField = document.querySelector('#housing-price');
const typesField = document.querySelector('#housing-type');
const roomsField = document.querySelector('#housing-rooms');
const guestsField = document.querySelector('#housing-guests');


const setFilterFormChangeHandler = (data) => {
  mainFilter.addEventListener('change', () => {
    removeBaloons();
    createBaloons(data);
  });
};


const filterPrice = (element) => {
  if (priceField.value === 'any') {
    return true;
  } else if (priceField.value === 'low') {
    return element.offer.price < 10000;
  } else if (priceField.value === 'high') {
    return element.offer.price > 50000;
  } else if (priceField.value === 'middle') {
    return element.offer.price >= 10000 && element.offer.price <= 50000;
  }
};

function filterTypes (element) {
  if (typesField.value === 'any') {
    return true;
  } else {
    return element.offer.type === typesField.value;
  }
}

const filterRooms = (element) => {
  if (roomsField.value === 'any') {
    return true;
  } else {
    return element.offer.rooms === Number(roomsField.value);
  }
};

const filterGuests = (element) => {
  if (guestsField.value === 'any') {
    return true;
  } else {
    return element.offer.guests === Number(guestsField.value);
  }
};


const filterfeatures = (element) => {
  const wifiField = document.querySelector('#filter-wifi');
  const dishwasherField = document.querySelector('#filter-dishwasher');
  const parkingField = document.querySelector('#filter-parking');
  const washerField = document.querySelector('#filter-washer');
  const elevatorField = document.querySelector('#filter-elevator');
  const conditionerField = document.querySelector('#filter-conditioner');


  if (wifiField.checked) {
    console.log(element.offer.features);
  } else if (dishwasherField.checked) {
    return element.offer.features.includes('dishwasher');
  } else if (parkingField.checked) {
    return element.offer.features.includes('parking');
  } else if (washerField.checked) {
    return element.offer.features.includes('washer');
  } else if (elevatorField.checked) {
    return element.offer.features.includes('elevator');
  } else if (conditionerField.checked) {
    return element.offer.features.includes('conditioner');
  } else {
    return true;
  }
};


export {filterTypes, filterRooms, filterGuests, filterPrice, filterfeatures, setFilterFormChangeHandler};


