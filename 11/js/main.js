import './create-baloons.js';
import './form-activity.js';
import './form-validator.js';
import './create-map.js';
import './create-slider.js';
import './load-photo.js';
import {getData} from './fetch-data.js';
import {setFilterFormChangeHandler} from './filters.js';
import {createBaloons} from './create-baloons.js';

getData((data) => {
  createBaloons(data);
  setFilterFormChangeHandler(data);
});
