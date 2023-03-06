const popupList = document.querySelectorAll('.popup');

const addElemBtn = document.querySelector('.profile__add-button');
const popupAddElem = document.querySelector('.popup_type_add-place');

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

const elementTemplate = document.querySelector('#element').content;
const elementsList = document.querySelector('.elements__list');

const closeButtons = document.querySelectorAll('.popup__close-button');

closeButtons.forEach(button => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
})

const generateElements = (wrap, elem) => wrap.prepend(createCard(elem));

const openPopupImage = (event, element) => {
  event.preventDefault();
  const imageCaption = element.name;
  fullImage.src = element.link;
  fullImage.alt = 'Фотография: ' + imageCaption;
  fullImageCaption.textContent = imageCaption;
  openPopup(popupFullImage);
}

const createCard = elem => {
  const card = elementTemplate.cloneNode(true);
  const cardImage = card.querySelector('.element__image');
  cardImage.alt = 'Фотография: ' + elem.name;
  cardImage.src = elem.link;
  card.querySelector('.element__header').textContent = elem.name;
  card.querySelector('.element__link-full-image').addEventListener('click', event => openPopupImage(event, elem));
  card.querySelector('.element__button_type_remove').addEventListener('click', removeElem);
  card.querySelector('.element__button_type_like').addEventListener('click', toggleLike);
  return card;
}

const removeElem = event => event.target.closest('.element').remove();

const toggleLike = event => event.target.classList.toggle('element__button_like-active');

const openEditProfile = () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  validateForm(editProfileForm, validationOptions);
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
  generateElements(elementsList, element);
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
  validateForm(popupAddElemFormSubmit, validationOptions);
  openPopup(popupAddElem);
}

popupList.forEach(popup => popup.addEventListener('click', closePopupByOverlayClick));
popupAddElemFormSubmit.addEventListener('submit', handleAddElementSubmit);
editProfileBtn.addEventListener('click', openEditProfile);
addElemBtn.addEventListener('click', openAddCardPopup);
formProfile.addEventListener('submit', handleProfileSubmit);

const initialData = () => initialCards.forEach(elem => generateElements(elementsList, elem));

initialData();
