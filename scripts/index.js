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
let popupAddPlace = document.querySelector('.popup_type_add-place');
let popupAddPlaceCloseBtn = popupAddPlace.querySelector('.popup__close-button');

const popupFullImage = document.querySelector('.popup_type_image');
let popupFullImageCloseBtn = popupFullImage.querySelector('.popup__close-button');

let editProfileBtn = document.querySelector('.profile__edit-button');
let profileName = document.querySelector('.profile__header');
let profileJob = document.querySelector('.profile__subheader');

let popupEditProfile = document.querySelector('.popup');
let formElement = document.querySelector('.popup__form');
let popupEditProfileCloseBtn = document.querySelector('.popup__close-button');
let nameInput = document.querySelector('.form__input_type_name');
let jobInput = document.querySelector('.form__input_type_job');

let elements = document.querySelectorAll('.element');

function generateElements() {

  initialCards.forEach(function (elem) {
    const element = elementTemplate.querySelector('.element').cloneNode(true);
    element.querySelector('.element__header').textContent = elem.name;
    element.querySelector('.element__image').src = elem.link;
    elementsList.append(element);
  })

}

generateElements();

function popupImage(event) {
  event.preventDefault();
  popupFullImage.querySelector('.popup__image').src = event.target.src;
  popupFullImage.querySelector('.popup__image-caption').textContent = event.target.closest('.element').querySelector('.element__header').textContent;
  popupImageOpen();
}

function popupImageOpen() {
  popupFullImage.classList.add('popup_opened');
}

function popupImageClose() {
  popupFullImage.classList.remove('popup_opened')
}

function removeElem(event) {
  event.target.closest('.element').remove();
}

elements.forEach(function (elem) {
  elem.querySelector('.element__link-full-image').addEventListener('click', popupImage);
  elem.querySelector('.element__button_type_remove').addEventListener('click', removeElem);
  elem.querySelector('.element__button_type_like').addEventListener('click', likeToggle);
});

function likeToggle(event) {
  event.target.classList.toggle('element__button_like-active');
}

function popupAddPlaceOpen() {
  popupAddPlace.classList.add('popup_opened')
}

function popupAddPlaceClose() {
  popupAddPlace.classList.remove('popup_opened')
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

popupFullImageCloseBtn.addEventListener('click', popupImageClose);

editProfileBtn.addEventListener('click', popupEditProfileOpen);
popupEditProfileCloseBtn.addEventListener('click', popupEditProfileClose);
formElement.addEventListener('submit', handleFormSubmit);

addPlaceBtn.addEventListener('click', popupAddPlaceOpen);
popupAddPlaceCloseBtn.addEventListener('click', popupAddPlaceClose);

