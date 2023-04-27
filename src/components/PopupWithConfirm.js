import Popup from "./Popup.js";

export default class PopupWithConfirm extends Popup {
  constructor({popupSelector}) {
    super(popupSelector);
    this._form = this._popup.querySelector('.popup__form');
  }

  open(handleRemove) {
    this._handleRemove = handleRemove;
    super.open();
  }

  setEventListeners = () => {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleRemove();
    });
  }


}
