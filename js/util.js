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

export {getRandomInteger, createRandomIdFromRangeGenerator, getRandomArray};
