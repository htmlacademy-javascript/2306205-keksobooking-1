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


const getRandomArray = (array) => {
  const currentArray = [];
  const amountElements = getRandomInteger(1, array.length);
  const indexElement = createRandomIdFromRangeGenerator(0, array.length - 1);

  while (currentArray.length < amountElements) {
    currentArray.push(array[indexElement()]);
  }
  return currentArray;
};

const getRandomPoint = (min, max, digits) =>
  ([min, max, digits].find((element) => element < 0 || typeof element !== 'number')) ?
    NaN : (Math.random() * (max - min) + min).toFixed(digits);

const getLocationPoint = () => ({
  lat: getRandomPoint(35.65000, 35.70000, 5),
  lng: getRandomPoint(139.70000, 139.80000, 5),
});


export {getRandomInteger, createRandomIdFromRangeGenerator, getRandomArray, getRandomPoint, getLocationPoint};
