import '../pages/index.css';

import initialCards from './constants.js';
import Card from './Card.js';
import FormValidator from './FormValidator.js';
import Popup from './Popup.js';
import Section from "./Section.js";

const popupList = document.querySelectorAll('.popup');
const formList = document.querySelectorAll('.form');

const addElemBtn = document.querySelector('.profile__add-button');
const popupAddElem = document.querySelector('.popup_type_add-place');

const test = new Popup('.popup_type_add-place');
console.log(test);

const popupAddElemFormSubmit = document.querySelector('.popup__form_type_add-place');
const imageName = popupAddElem.querySelector('.form__input_type_image-name');
const imageLink = popupAddElem.querySelector('.form__input_type_image-link');

const popupFullImage = document.querySelector('.popup_type_image');
const fullImage = popupFullImage.querySelector('.popup__image');
const fullImageCaption = popupFullImage.querySelector('.popup__image-caption')

const editProfileForm = document.querySelector('.popup__form_type_edit-profile');
const editProfileBtn = document.querySelector('.profile__edit-button');
const popupEditProfile = document.querySelector('.popup_type_profile');
const formProfile = popupEditProfile.querySelector('.popup__form');
const profileName = document.querySelector('.profile__header');
const profileJob = document.querySelector('.profile__subheader');
const nameInput = document.querySelector('.form__input_type_name');
const jobInput = document.querySelector('.form__input_type_job');

const elementsList = document.querySelector('.elements__list');

const closeButtons = document.querySelectorAll('.popup__close-button');

const validationOptions = {
  formSelector: '.popup__form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_inactive',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
}

closeButtons.forEach(button => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
})

const renderCards = new Section({
    items: initialCards,
    renderer: (element) => {
      const card = new Card(element, '#element', openPopupImage);
      renderCards.addItem(card.createCard());
    }
  },
  '.elements__list'
);

renderCards.renderItems();

const openPopupImage = (event, element) => {
  event.preventDefault();
  const imageCaption = element.name;
  fullImage.src = element.link;
  fullImage.alt = 'Фотография: ' + imageCaption;
  fullImageCaption.textContent = imageCaption;
  openPopup(popupFullImage);
}

const openEditProfile = () => {
  editProfileForm.reset();
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(popupEditProfile);
}

const handleProfileSubmit = event => {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupEditProfile);
}

const handleAddElementSubmit = event => {
  event.preventDefault();
  const element = {'name': imageName.value, 'link': imageLink.value};
  const card = new Card(element, '#element', openPopupImage);
  renderCards.addItem(card.createCard());
  closePopup(popupAddElem);
  event.target.reset();
}

const handleKeyDown = evt => {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

const closePopup = popup => {
  document.removeEventListener('keydown', handleKeyDown);
  popup.classList.remove('popup_opened');
}

const openPopup = popup => {
  document.addEventListener('keydown', handleKeyDown);
  popup.classList.add('popup_opened');
}

const closePopupByOverlayClick = evt => {
  if (evt.target.classList.contains('popup')) {
    closePopup(evt.target);
  }
}

const openAddCardPopup = () => {
  popupAddElemFormSubmit.reset();
  openPopup(popupAddElem);
}

popupList.forEach(popup => popup.addEventListener('click', closePopupByOverlayClick));
popupAddElemFormSubmit.addEventListener('submit', handleAddElementSubmit);
editProfileBtn.addEventListener('click', openEditProfile);
addElemBtn.addEventListener('click', test.open);
formProfile.addEventListener('submit', handleProfileSubmit);

formList.forEach((formElement) => {
  const formValidator = new FormValidator(validationOptions, formElement);
  formValidator.enableValidation();
})
