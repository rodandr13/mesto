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


const elementTemplate = document.querySelector('#element').content;
const elementsList = document.querySelector('.elements__list');

const addPlaceBtn = document.querySelector('.profile__add-button');
const popupAddPlace = document.querySelector('.popup_type_add-place');

const popupAddPlaceFormSubmit = document.querySelector('.popup__form_type_add-place');
const imageName = popupAddPlace.querySelector('.form__input_type_image-name');
const imageLink = popupAddPlace.querySelector('.form__input_type_image-link');
const popupAddPlaceCloseBtn = popupAddPlace.querySelector('.popup__close-button');

const popupFullImage = document.querySelector('.popup_type_image');
const popupFullImageCloseBtn = popupFullImage.querySelector('.popup__close-button');

const editProfileBtn = document.querySelector('.profile__edit-button');
const profileName = document.querySelector('.profile__header');
const profileJob = document.querySelector('.profile__subheader');

const popupEditProfile = document.querySelector('.popup');
const formElement = document.querySelector('.popup__form');
const popupEditProfileCloseBtn = document.querySelector('.popup__close-button');
const nameInput = document.querySelector('.form__input_type_name');
const jobInput = document.querySelector('.form__input_type_job');

function generateElements(elem) {
  const element = elementTemplate.querySelector('.element').cloneNode(true);
  element.querySelector('.element__header').textContent = elem.name;
  element.querySelector('.element__image').src = elem.link;
  element.querySelector('.element__link-full-image').addEventListener('click', popupImage);
  element.querySelector('.element__button_type_remove').addEventListener('click', removeElem);
  element.querySelector('.element__button_type_like').addEventListener('click', likeToggle);
  elementsList.append(element);
}

function popupImage(event) {
  event.preventDefault();
  popupFullImage.querySelector('.popup__image').src = event.target.src;
  popupFullImage.querySelector('.popup__image-caption').textContent = event.target.closest('.element').querySelector('.element__header').textContent;
  popupImageToggle();
}

function popupImageToggle() {
  popupFullImage.classList.toggle('popup_opened');
}

function removeElem(event) {
  event.target.closest('.element').remove();
}

function likeToggle(event) {
  event.target.classList.toggle('element__button_like-active');
}

function popupAddPlaceToggle(event) {
  popupAddPlace.classList.toggle('popup_opened')
}

function popupEditProfileOpen() {
  popupEditProfile.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function popupEditProfileClose() {
  popupEditProfile.classList.remove('popup_opened');
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  popupEditProfileClose();
}

function handleFormAddElementSubmit(event) {
  event.preventDefault();
  const element = {'name': imageName.value, 'link': imageLink.value};
  generateElements(element);
  popupAddPlaceToggle();
}

popupAddPlaceFormSubmit.addEventListener('submit', handleFormAddElementSubmit);

popupFullImageCloseBtn.addEventListener('click', popupImageToggle);

editProfileBtn.addEventListener('click', popupEditProfileOpen);
popupEditProfileCloseBtn.addEventListener('click', popupEditProfileClose);
formElement.addEventListener('submit', handleFormSubmit);

addPlaceBtn.addEventListener('click', popupAddPlaceToggle);
popupAddPlaceCloseBtn.addEventListener('click', popupAddPlaceToggle);

function initialData() {
  // Предзагрузка элементов
  initialCards.forEach(function (elem) {
    generateElements(elem);
  })
}

initialData();
