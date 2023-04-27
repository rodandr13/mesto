export default class Card {
  constructor(data, templateSelector, userId, openPopupImage, handleLike) {
    this._link = data.link;
    this._name = data.name;
    this._owner = data.owner;
    this._likes = data.likes;
    this._cardId = data._id;
    this._templateSelector = templateSelector;
    this._openPopupImage = openPopupImage;
    this._handleLike = handleLike;
    this._userId = userId;
  }

  _toggleLike = () => {
    this.updateLikeCount();
    if (this.isLiked()) {
      this._like.classList.toggle('element__button_like-active');
    } else {
      this._like.classList.toggle('element__button_like-active');
    }
    this._handleLike(this._cardId);

  }

  updateLikeCount() {
    const likeCount = this._card.querySelector('.element__count-likes');
    likeCount.textContent = this._likes.length;
  }

  updateData(newData) {
    this._likes = newData.likes;
  }


  _removeCard = (event) => {
    event.target.closest('.element').remove();
  }

  _getTemplate() {
    this._card = document.querySelector(this._templateSelector).content.cloneNode(true).children[0];
    return this._card
  }

  isLiked() {
    return this._likes.some((like) => this._userId === like._id)
  }

  _setEventListener() {
    this._card.querySelector('.element__button_type_remove').addEventListener('click', this._removeCard);
    this._card.querySelector('.element__link-full-image').addEventListener(
      'click',
      (evt) => {
        evt.preventDefault();
        this._openPopupImage({name: this._name, link: this._link});
      }
    );
    this._card.querySelector('.element__button_type_like').addEventListener('click', this._toggleLike);
  }

  createCard() {
    this._card = this._getTemplate();
    const cardImage = this._card.querySelector('.element__image');

    this._card.querySelector('.element__header').textContent = this._name;
    cardImage.alt = 'Фотография: ' + this._name;
    cardImage.src = this._link;
    this._like = this._card.querySelector('.element__button_type_like');
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
