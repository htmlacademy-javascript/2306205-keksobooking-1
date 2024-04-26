const AMOUNT_USERS = 10;

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

const roomsOption = {
  '100': '0',
  '1': '1',
  '2': ['1', '2'],
  '3': ['1', '2', '3'],
};

const priceOption = {
  'bungalow': '0',
  'flat': '1000',
  'hotel': '3000',
  'house': '5000',
  'palace': '10000',
};

export {AMOUNT_USERS, roomsOption, priceOption, getAccommodationType};
