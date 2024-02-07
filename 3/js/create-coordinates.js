const getRandomPoint = (min, max, digits) =>
  ([min, max, digits].find((element) => element < 0 || typeof element !== 'number')) ?
    NaN : (Math.random() * (max - min) + min).toFixed(digits);

export {getRandomPoint};
