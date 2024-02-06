const getOffer = (anyParameter) => ({
  title: 'Лучшее жилье на побережье',
  address: `${anyParameter.lat}, ${anyParameter.lng}`,
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
export {getOffer};
