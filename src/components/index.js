import '../pages/index.css';

import initialCards from '../utils/constants.js';
import Card from './Card.js';
import FormValidator from './FormValidator.js';
import PopupWithImage from "./PopupWithImage.js";
import Section from "./Section.js";
import PopupWithForm from "./PopupWithForm.js";
import UserInfo from "./UserInfo.js";

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

const userInfo = new UserInfo({
  nameSelector: '.profile__header',
  jobSelector: '.profile__subheader'
});

const createCard = (element) => {
  const card = new Card(element, '#element', (evt) => {
    evt.preventDefault();
    imagePopup.open(element);
  });
  return card.createCard();
}

const editProfile = new PopupWithForm(
  {
    popupSelector: '.popup_type_profile',
    submitHandler: (data) => {
      console.log(data)
      userInfo.setUserInfo(data);
      editProfile.close();
    }
  }
);

const addPlacePopup = new PopupWithForm(
  {
    popupSelector: '.popup_type_add-place',
    submitHandler: (element) => {
      render.addItem(createCard(element));
      addPlacePopup.close();
    }
  }
);

const imagePopup = new PopupWithImage('.popup_type_image');

const openEditProfile = () => {
  const {name, job} = userInfo.getUserInfo();
  editProfile.open();
  nameInput.value = name;
  jobInput.value = job;
}

editProfileBtn.addEventListener('click', openEditProfile);
addElemBtn.addEventListener('click', addPlacePopup.open);

const render = new Section({
    items: initialCards,
    renderer: (element) => {
      render.addItem(createCard(element));
    }
  },
  '.elements__list'
);

render.renderItems();

formList.forEach((formElement) => {
  const formValidator = new FormValidator(validationOptions, formElement);
  formValidator.enableValidation();
})
