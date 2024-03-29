export default class Card {
  constructor(data, templateSelector, userId, openPopupImage, removeCard, handleLike) {
    this._link = data.link;
    this._name = data.name;
    this._owner = data.owner;
    this._likes = data.likes;
    this._cardId = data._id;
    this._templateSelector = templateSelector;
    this._openPopupImage = openPopupImage
    this._removeCard = removeCard;
    this._handleLike = handleLike;
    this._userId = userId;
  }

  toggleLike = () => {
    this._like.classList.toggle('element__button_like-active');
  }

  updateLikeCount() {
    this._likeCountElement.textContent = this._likes.length;
  }

  updateData(newData) {
    this._likes = newData.likes;
  }


  _deleteCard = () => {
    this._removeCard(() => this._card.remove(), this._cardId);
  }

  _getTemplate() {
    this._card = document.querySelector(this._templateSelector).content.cloneNode(true).children[0];
    return this._card
  }

  isLiked() {
    return this._likes.some((like) => this._userId === like._id)
  }

  _setEventListener() {
    this._card.querySelector('.element__button_type_remove').addEventListener('click', this._deleteCard);
    this._card.querySelector('.element__link-full-image').addEventListener(
      'click',
      (evt) => {
        evt.preventDefault();
        this._openPopupImage({name: this._name, link: this._link});
      }
    );
    this._card.querySelector('.element__button_type_like').addEventListener('click', () => {
      this._handleLike(this._cardId);
    });
  }

  createCard() {
    this._card = this._getTemplate();
    const cardImage = this._card.querySelector('.element__image');
    this._card.querySelector('.element__header').textContent = this._name;
    cardImage.alt = 'Фотография: ' + this._name;
    cardImage.src = this._link;
    this._like = this._card.querySelector('.element__button_type_like');
    this._likeCountElement = this._card.querySelector('.element__count-likes');
    if (this._owner._id !== this._userId) {
      this._card.querySelector('.element__button_type_remove').classList.add('element__button_hidden');
    }
    this.updateLikeCount();
    if (this.isLiked()) {
      this._like.classList.toggle('element__button_like-active');
    }
    this._setEventListener();

    return this._card;
  }
}
