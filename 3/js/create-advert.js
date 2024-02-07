import {getLocationPoint} from './create-location.js';
import {getAuthor} from './create-user.js';
import {getOffer} from './create-offer.js';

const getAdvert = () => {
  const locationPoint = getLocationPoint();
  return {
    author: getAuthor(),
    offer: getOffer(locationPoint),
    location: locationPoint
  };
};
export {getAdvert};
