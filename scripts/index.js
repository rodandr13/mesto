let editProfileBtn = document.querySelector(".profile__edit-button");
let profileName = document.querySelector(".profile__header");
let profileJob = document.querySelector(".profile__subheader");

let popupEditProfile = document.querySelector(".popup");
let formElement = document.querySelector(".popup__form");
let popupEditProfileCloseBtn = document.querySelector(".popup__close-button");
let nameInput = document.querySelector(".form__input_type_name");
let jobInput = document.querySelector(".form__input_type_job");

function popupEditProfileOpen() {
  popupEditProfile.classList.add("popup_opened");
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function popupEditProfileClose() {
  popupEditProfile.classList.remove("popup_opened");
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
