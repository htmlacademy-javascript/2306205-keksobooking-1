import {getRandomLinksId} from './create-links.js';

const getAuthor = () => ({
  avatar: `img/avatars/user${getRandomLinksId()}.png`
});
export {getAuthor};
