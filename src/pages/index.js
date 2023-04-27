import './index.css';

import {validationOptions} from '../utils/constants.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithConfirm from "../components/PopupWithConfirm.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";

const formList = document.querySelectorAll('.form');
const addElemBtn = document.querySelector('.profile__add-button');
const editAvatarBtn = document.querySelector('.profile__avatar-link');
const editProfileBtn = document.querySelector('.profile__edit-button');
const nameInput = document.querySelector('.form__input_type_name');
const jobInput = document.querySelector('.form__input_type_job');

const userInfo = new UserInfo({
  nameSelector: '.profile__header',
  jobSelector: '.profile__subheader',
  avatarSelector: '.profile__avatar',
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

const confirmRemove = new PopupWithConfirm(
  {
    popupSelector: '.popup_type_confirm'
  }
);
confirmRemove.setEventListeners();

const createCard = (element) => {
  const card = new Card(
    element,
    '#element',
    userInfo.getUserInfo().userId,
    () => {
      imagePopup.open(element);
    },
    (handleRemove, cardId) => {
      confirmRemove.open(() => {
        api.delete(`/cards/${cardId}`)
          .then(() => {
            handleRemove();
            confirmRemove.close();
          })
          .catch((err) => {
            console.log(err);
          });
      });

    },
    (cardId) => {
      if (!card.isLiked()) {
        api.put(`/cards/${cardId}/likes`)
          .then((data) => {
            card.updateData(data)
            card.updateLikeCount()
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        api.delete(`/cards/${cardId}/likes`)
          .then((data) => {
            card.updateData(data)
            card.updateLikeCount()
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  );
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

const editAvatar = new PopupWithForm(
  {
    popupSelector: '.popup_type_avatar',
    submitHandler: (data) => {
      console.log(data)
      api.patch('/users/me/avatar', data)
        .then((data) => {
          userInfo.setAvatar(data);
          editAvatar.close();
        })
        .catch(error => {
          console.error(error);
        })
    }
  }
)
editAvatar.setEventListeners();

const addPlacePopup = new PopupWithForm(
  {
    popupSelector: '.popup_type_add-place',
    submitHandler: (element) => {
      api.post('/cards', element)
        .then((element) => {
          render.addItem(createCard(element));
          addPlacePopup.close();
        })
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
editAvatarBtn.addEventListener('click', editAvatar.open);

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
      console.log(data[0])
      userInfo.setUserInfo(data[0]);
      render.renderItems(data[1].reverse());
    })
    .catch((err) => console.log(err))
}

initialData([initialProfile, initialCards])
