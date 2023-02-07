let editProfileBtn = document.querySelector(".profile__edit-button");
let profileName = document.querySelector(".profile__header");
let profileJob = document.querySelector(".profile__subheader");

let popupEditProfile = document.querySelector(".popup");
let formElement = document.querySelector(".popup__form");
let popupEditProfileCloseBtn = document.querySelector(".popup__close-button");
let nameInput = document.querySelector();
let jobInput = 0;

function popupEditProfileOpen() {
  popupEditProfile.classList.add("popup_opened");

}

function popupEditProfileClose() {
  popupEditProfile.classList.remove("popup_opened");
}

function handleFormSubmit (evt) {
    evt.preventDefault();

    // Получите значение полей jobInput и nameInput из свойства value

    // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent
}

editProfileBtn.addEventListener('click', popupEditProfileOpen);
popupEditProfileCloseBtn.addEventListener('click', popupEditProfileClose);
formElement.addEventListener('submit', handleFormSubmit);
