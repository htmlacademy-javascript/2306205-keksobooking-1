import {AMOUNT_USERS} from './data.js';
import {getAdvert} from './create-advert.js';

const getAdvertsList = () => Array.from({ length: AMOUNT_USERS }, getAdvert);

export {getAdvertsList};
