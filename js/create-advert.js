const getAdvert = () => {
  const locationPoint = getLocationPoint();
  return {
    author: getAuthor(),
    offer: getOffer(locationPoint),
    location: locationPoint
  };
};
export {getAdvert};
