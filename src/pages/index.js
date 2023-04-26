import './index.css';

import {validationOptions} from '../utils/constants.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";

const formList = document.querySelectorAll('.form');
const addElemBtn = document.querySelector('.profile__add-button');
const editProfileBtn = document.querySelector('.profile__edit-button');
const nameInput = document.querySelector('.form__input_type_name');
const jobInput = document.querySelector('.form__input_type_job');

const userInfo = new UserInfo({
  nameSelector: '.profile__header',
  jobSelector: '.profile__subheader'
});

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-64',
  headers: {
    authorization: 'e088005e-e78f-4b2a-a43d-652e65680dd5',
    'Content-Type': 'application/json'
  }
});


const initialProfile = api.get('/users/me');
const initialCards = api.get('/cards');


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
      api.patch('/users/me', data)
        .then((data) => {
          userInfo.setUserInfo(data);
          editProfile.close();
        })
        .catch(error => {
          console.error(error);
        })
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
  const {name, about} = userInfo.getUserInfo();
  editProfile.open();
  nameInput.value = name;
  jobInput.value = about;
}

editProfileBtn.addEventListener('click', openEditProfile);
addElemBtn.addEventListener('click', addPlacePopup.open);

const render = new Section({
    renderer: (element) => {
      render.addItem(createCard(element));
    },
    selector: '.elements__list'
  }
);


formList.forEach((formElement) => {
  const formValidator = new FormValidator(validationOptions, formElement);
  formValidator.enableValidation();
})

function initialData(promises) {
  Promise.all(promises)
    .then((data) => {
      userInfo.setUserInfo(data[0]);
      render.renderItems(data[1]);
    })
    .catch((err) => console.log(err))
}

initialData([initialProfile, initialCards])
