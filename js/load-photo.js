const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const avatarFileChooser = document.querySelector('#avatar');
const avatarPreview = document.querySelector('.ad-form-header__preview').querySelector('img');
const imageFileChooser = document.querySelector('.ad-form__input');
const imagePreview = document.querySelector('.ad-form__photo');

const checkFiles = (imageFile) => {
  const fileName = imageFile.name.toLowerCase();
  const matches = FILE_TYPES.some((el) => fileName.endsWith(el));
  return matches;
};

avatarFileChooser.addEventListener('change', () => {
  const avatar = avatarFileChooser.files[0];

  if (checkFiles(avatar)) {
    avatarPreview.src = URL.createObjectURL(avatar);
  }
});


imageFileChooser.addEventListener('change', () => {
  const imageAdvert = imageFileChooser.files[0];

  if (checkFiles(imageAdvert)) {
    const imageContainer = document.createElement('img');
    imageContainer.width = '70';
    imageContainer.src = URL.createObjectURL(imageAdvert);
    imagePreview.appendChild(imageContainer);
  }
});

const removeAdvertImages = () => {
  while (imagePreview.firstChild) {
    imagePreview.removeChild(imagePreview.firstChild);
    avatarPreview.src = 'img/muffin-grey.svg';
  }
};

export {removeAdvertImages};
