import {price, priceSliderField} from './form-validator.js';

noUiSlider.create(priceSliderField, {
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

priceSliderField.noUiSlider.on('slide', () => {
  price.value = priceSliderField.noUiSlider.get();
});

price.addEventListener('input', () => {
  priceSliderField.noUiSlider.set(price.value);

  if (price.value === '') {
    priceSliderField.noUiSlider.reset();
  }
});
