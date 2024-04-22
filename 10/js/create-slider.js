import {price} from './form-validator.js';

const priceSlider = document.querySelector('.ad-form__slider');

noUiSlider.create(priceSlider, {
  range: {
    min: 0,
    max: 100000,
  },
  start: 0,
  step: 100,
  connect: 'lower',

  format: {
    to: function (value) {
      return value.toFixed(0);
    },
    from: function (value) {
      return parseFloat(value);
    },
  }
});

priceSlider.noUiSlider.on('slide', () => {
  price.value = priceSlider.noUiSlider.get();
});

price.addEventListener('input', () => {
  priceSlider.noUiSlider.set(price.value);
});
