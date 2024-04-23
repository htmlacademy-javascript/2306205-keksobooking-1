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

// const checkWifi = document.querySelector('#filter-wifi');
// const checkDishwasher = document.querySelector('#filter-dishwasher');
// const checkParking = document.querySelector('#filter-parking');
// const checkWasher = document.querySelector('#filter-washer');
// const checkElevator = document.querySelector('#filter-elevator');
// const checkConditioner = document.querySelector('#filter-conditioner');

// Array.from(checkboxes).every((checkbox) => {
//   if (checkbox.checked) {
//     return [element.offer.features].includes('wifi');
//   } else if (checkDishwasher.checked) {
//     return [element.offer.features].includes('dishwasher');
//   } else if (checkParking.checked) {
//     return [element.offer.features].includes('parking');
//   } else if (checkWasher.checked) {
//     return [element.offer.features].includes('washer');
//   } else if (checkElevator.checked) {
//     return [element.offer.features].includes('elevator');
//   } else if (checkConditioner.checked) {
//     return [element.offer.features].includes('conditioner');
//   }
// });

const checkFeatures = (element) => {
  Array.from(checkboxes).forEach((checkbox) => {
    if (checkbox.checked) {
      if (element.offer.features) {
        console.log(element.offer.features.includes(checkbox.value));
      }
    } else {
      return true;
    }
  });
};

export {filterTypes, filterRooms, filterGuests, filterPrice, checkFeatures, setFilterFormChangeHandler};


