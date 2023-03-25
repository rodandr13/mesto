class Card {
  constructor(data, templateSelector) {
    this._link = data.link;
    this._name = data.name;
    this._templateSelector = templateSelector;
  }

  _toggleLike(event) {
    event.target.classList.toggle('element__button_like-active');
  }

  _removeCard(event) {
    event.target.closest('.element').remove();
  }

  _getTemplate() {
    this._card = document.querySelector(this._templateSelector).content.cloneNode(true);
    return this._card
  }

  _setEventListener() {
    this._card.querySelector('.element__header').textContent = this._name;
    this._card.querySelector('.element__button_type_remove').addEventListener('click', this._removeCard);
    this._card.querySelector('.element__button_type_like').addEventListener('click', this._toggleLike);
  }

  createCard() {
    this._getTemplate();
    this._setEventListener();
    const cardImage = this._card.querySelector('.element__image');
    cardImage.alt = 'Фотография: ' + this._name;
    cardImage.src = this._link;
    return this._card;
  }
}

export {Card}
