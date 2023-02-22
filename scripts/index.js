const addPlaceBtn = document.querySelector('.profile__add-button');
let popupAddPlace = document.querySelector('.popup_type_add-place');
let popupAddPlaceCloseBtn = popupAddPlace.querySelector('.popup__close-button');

let editProfileBtn = document.querySelector('.profile__edit-button');
let profileName = document.querySelector('.profile__header');
let profileJob = document.querySelector('.profile__subheader');

let popupEditProfile = document.querySelector('.popup');
let formElement = document.querySelector('.popup__form');
let popupEditProfileCloseBtn = document.querySelector('.popup__close-button');
let nameInput = document.querySelector('.form__input_type_name');
let jobInput = document.querySelector('.form__input_type_job');

let elements = document.querySelectorAll('.element');

function removeElem(event) {
  event.target.closest('.element').remove();
}

elements.forEach(function (elem) {
  elem.querySelector('.element__button_type_remove').addEventListener('click', removeElem);
});

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

editProfileBtn.addEventListener('click', popupEditProfileOpen);
popupEditProfileCloseBtn.addEventListener('click', popupEditProfileClose);
formElement.addEventListener('submit', handleFormSubmit);

addPlaceBtn.addEventListener('click', popupAddPlaceOpen);
popupAddPlaceCloseBtn.addEventListener('click', popupAddPlaceClose);
