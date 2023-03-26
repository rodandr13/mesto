export class Card {
  constructor(data, templateSelector, openPopupImage) {
    this._link = data.link;
    this._name = data.name;
    this._templateSelector = templateSelector;
    this._openPopupImage = openPopupImage;
  }

  _toggleLike = (evt) => {
    console.log(this)
    evt.target.classList.toggle('element__button_like-active');
  }

  _removeCard = (event) => {
    event.target.closest('.element').remove();
  }

  _getTemplate() {
    this._card = document.querySelector(this._templateSelector).content.cloneNode(true).children[0];
    return this._card
  }

  _setEventListener() {
    this._card.querySelector('.element__button_type_remove').addEventListener('click', this._removeCard);
    this._card.querySelector('.element__link-full-image').addEventListener(
      'click',
      (evt) => this._openPopupImage(evt, {name: this._name, link: this._link})
    );
    this._card.querySelector('.element__button_type_like').addEventListener('click', this._toggleLike);
  }

  createCard() {
    this._card = this._getTemplate();
    const cardImage = this._card.querySelector('.element__image');

    this._card.querySelector('.element__header').textContent = this._name;
    cardImage.alt = 'Фотография: ' + this._name;
    cardImage.src = this._link;

    this._setEventListener();

    return this._card;
  }
}

export default Card
