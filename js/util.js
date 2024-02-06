const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
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

export {getRandomInteger, getRandomArray};
