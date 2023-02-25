const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const addElemBtn = document.querySelector('.profile__add-button');
const popupAddElem = document.querySelector('.popup_type_add-place');

const popupAddElemFormSubmit = document.querySelector('.popup__form_type_add-place');
const imageName = popupAddElem.querySelector('.form__input_type_image-name');
const imageLink = popupAddElem.querySelector('.form__input_type_image-link');
const popupAddElemCloseBtn = popupAddElem.querySelector('.popup__close-button');

const popupFullImage = document.querySelector('.popup_type_image');
const fullImage = popupFullImage.querySelector('.popup__image');
const fullImageCaption = popupFullImage.querySelector('.popup__image-caption')
const popupFullImageCloseBtn = popupFullImage.querySelector('.popup__close-button');

const editProfileBtn = document.querySelector('.profile__edit-button');
const popupEditProfile = document.querySelector('.popup_type_profile');
const formProfile = popupEditProfile.querySelector('.popup__form');
const profileName = document.querySelector('.profile__header');
const profileJob = document.querySelector('.profile__subheader');
const popupEditProfileCloseBtn = document.querySelector('.popup__close-button');
const nameInput = document.querySelector('.form__input_type_name');
const jobInput = document.querySelector('.form__input_type_job');

const elementTemplate = document.querySelector('#element').content;
const elementsList = document.querySelector('.elements__list');

function generateElements(elem) {
  const element = elementTemplate.querySelector('.element').cloneNode(true);
  element.querySelector('.element__header').textContent = elem.name;
  element.querySelector('.element__image').alt = 'Фотография: ' + elem.name;
  element.querySelector('.element__image').src = elem.link;
  element.querySelector('.element__link-full-image').addEventListener('click', openPopupImage);
  element.querySelector('.element__button_type_remove').addEventListener('click', removeElem);
  element.querySelector('.element__button_type_like').addEventListener('click', likeToggle);

  elementsList.prepend(element);
}

function openPopupImage(event) {
  event.preventDefault();
  const imageCaption = event.target.closest('.element').querySelector('.element__header').textContent;
  fullImage.src = event.target.src;
  fullImage.alt = 'Фотография: ' + imageCaption;
  fullImageCaption.textContent = imageCaption;
  openPopupFullImage();
}

function openPopupFullImage() {
  popupFullImage.classList.toggle('popup_opened');
}

function removeElem(event) {
  event.target.closest('.element').remove();
}

function likeToggle(event) {
  event.target.classList.toggle('element__button_like-active');
}

function popupAddElemToggle(event) {
  popupAddElem.classList.toggle('popup_opened')
}

function popupEditProfileOpen() {
  popupEditProfile.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function popupEditProfileClose() {
  popupEditProfile.classList.remove('popup_opened');
}

function handleFormSubmit(event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  popupEditProfileClose();
}

function handleFormAddElementSubmit(event) {
  event.preventDefault();
  const element = {'name': imageName.value, 'link': imageLink.value};
  generateElements(element);
  popupAddElemToggle();
  event.target.reset();
}

popupAddElemFormSubmit.addEventListener('submit', handleFormAddElementSubmit);

popupFullImageCloseBtn.addEventListener('click', openPopupFullImage);

editProfileBtn.addEventListener('click', popupEditProfileOpen);
popupEditProfileCloseBtn.addEventListener('click', popupEditProfileClose);
formProfile.addEventListener('submit', handleFormSubmit);

addElemBtn.addEventListener('click', popupAddElemToggle);
popupAddElemCloseBtn.addEventListener('click', popupAddElemToggle);

function initialData() {
  initialCards.forEach(function (elem) {
    generateElements(elem);
  })
}

initialData();
