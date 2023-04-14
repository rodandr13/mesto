import './index.css';

import { initialCards, validationOptions } from '../utils/constants.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

const formList = document.querySelectorAll('.form');
const addElemBtn = document.querySelector('.profile__add-button');
const editProfileBtn = document.querySelector('.profile__edit-button');
const nameInput = document.querySelector('.form__input_type_name');
const jobInput = document.querySelector('.form__input_type_job');

const userInfo = new UserInfo({
  nameSelector: '.profile__header',
  jobSelector: '.profile__subheader'
});

const createCard = (element) => {
  const card = new Card(element, '#element', () => {
    imagePopup.open(element);
  });
  return card.createCard();
}

const editProfile = new PopupWithForm(
  {
    popupSelector: '.popup_type_profile',
    submitHandler: (data) => {
      userInfo.setUserInfo(data);
      editProfile.close();
    }
  }
);
editProfile.setEventListeners();

const addPlacePopup = new PopupWithForm(
  {
    popupSelector: '.popup_type_add-place',
    submitHandler: (element) => {
      render.addItem(createCard(element));
      addPlacePopup.close();
    }
  }
);
addPlacePopup.setEventListeners();

const imagePopup = new PopupWithImage('.popup_type_image');
imagePopup.setEventListeners();

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
