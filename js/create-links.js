import {createRandomIdFromRangeGenerator} from './util.js';
import {AMOUNT_USERS} from './data.js';

const createRandomLinksId = createRandomIdFromRangeGenerator(1, AMOUNT_USERS);

const getRandomLinksId = () => {
  const currentLinksId = createRandomLinksId();
  return (currentLinksId < AMOUNT_USERS) ? `0${currentLinksId}` : currentLinksId;
};

export {getRandomLinksId};
