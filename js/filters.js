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

const checkboxes = document.querySelectorAll('.map__checkbox');


const checkFeatures = (element) => Array.from(checkboxes).every((checkbox) => {
  if (checkbox.checked) {
    if (element.offer.features) {
      return element.offer.features.includes(checkbox.value);
    }
  } else {
    return true;
  }
});

export {filterTypes, filterRooms, filterGuests, filterPrice, checkFeatures, setFilterFormChangeHandler};


