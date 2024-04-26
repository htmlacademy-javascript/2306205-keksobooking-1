// Заменяю форму слов
const getWordRoom = (card) => {
  if (card.offer.rooms === 1) {
    return 'комната';
  } else if (card.offer.rooms > 4) {
    return 'комнат';
  }
  return 'комнаты';
};

const getWordGuests = (card) => (card.offer.guests === 1) ? 'гостя' : 'гостей';


const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '1000';
  alertContainer.style.position = 'absolute';
  alertContainer.style.minWidth = '300px';
  alertContainer.style.left = 'calc(50% - 150px)';
  alertContainer.style.top = '20%';
  alertContainer.style.right = 'calc(50% - 150px)';
  alertContainer.style.padding = '10px 5px';
  alertContainer.style.fontSize = '14px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, 5000);
};

const getSuccessMessage = () => {
  const successMessage = document.querySelector('#success').content.querySelector('.success').cloneNode(true);
  document.body.appendChild(successMessage);

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      document.body.removeChild(successMessage);
    }
  });

  document.addEventListener('click', () => {
    document.body.removeChild(successMessage);
  });
};

const getErrorMessage = () => {
  const errorMessage = document.querySelector('#error').content.querySelector('.error').cloneNode(true);
  document.body.appendChild(errorMessage);

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      document.body.removeChild(errorMessage);
    }
  });

  document.addEventListener('click', () => {
    document.body.removeChild(errorMessage);
  });
};

const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};


export {getWordRoom, getWordGuests, showAlert, getSuccessMessage, getErrorMessage, debounce};
