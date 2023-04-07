import '../pages/index.css';

import initialCards from './constants.js';
import Card from './Card.js';
import FormValidator from './FormValidator.js';
import PopupWithImage from "./PopupWithImage.js";
import Section from "./Section.js";
import PopupWithForm from "./PopupWithForm";

const formList = document.querySelectorAll('.form');
const addElemBtn = document.querySelector('.profile__add-button');

const editProfileForm = document.querySelector('.popup__form_type_edit-profile');
const editProfileBtn = document.querySelector('.profile__edit-button');
const popupEditProfile = document.querySelector('.popup_type_profile');
const formProfile = popupEditProfile.querySelector('.popup__form');
const profileName = document.querySelector('.profile__header');
const profileJob = document.querySelector('.profile__subheader');
const nameInput = document.querySelector('.form__input_type_name');
const jobInput = document.querySelector('.form__input_type_job');

const validationOptions = {
  formSelector: '.popup__form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_inactive',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
}

const addPlacePopup = new PopupWithForm(
  {
    popupSelector: '.popup_type_add-place',
    submitHandler: (element) => {
      const card = new Card(element, '#element', (evt) => {
        evt.preventDefault();
        imagePopup.open(element);
      });
      render.addItem(card.createCard());
      addPlacePopup.close();
    }
  }
);

const imagePopup = new PopupWithImage('.popup_type_image');

const render = new Section({
    items: initialCards,
    renderer: (element) => {
      const card = new Card(element, '#element', (evt) => {
        evt.preventDefault();
        imagePopup.open(element);
      });
      render.addItem(card.createCard());
    }
  },
  '.elements__list'
);

render.renderItems();

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

editProfileBtn.addEventListener('click', openEditProfile);
formProfile.addEventListener('submit', handleProfileSubmit);

addElemBtn.addEventListener('click', addPlacePopup.open);

formList.forEach((formElement) => {
  const formValidator = new FormValidator(validationOptions, formElement);
  formValidator.enableValidation();
})
