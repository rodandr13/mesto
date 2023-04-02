export default class FormValidator {
  constructor(options, form) {
    this._form = form;
    this._options = options;
  }

  _showInputError = (inputElement, errorMessage) => {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._options.inputErrorClass);
    errorElement.classList.add(this._options.errorClass);
    errorElement.textContent = errorMessage;
  }

  _hideInputError = (inputElement) => {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._options.inputErrorClass);
    errorElement.classList.remove(this._options.errorClass);
    errorElement.textContent = '';
  }
  _checkInputValidity = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _hasInvalidInput = () => this._inputList.some(inputElement => !inputElement.validity.valid);

  _toggleButtonState = () => {
    this._buttonElement.classList.toggle(this._options.inactiveButtonClass, this._hasInvalidInput());
    this._buttonElement.disabled = this._hasInvalidInput();
  }

  _resetForm = () => {
    setTimeout(() => {
      this._inputList.forEach(this._hideInputError);
      this._toggleButtonState();
    }, 0);
  }

  _setEventListener = () => {
    this._inputList = Array.from(this._form.querySelectorAll(this._options.inputSelector));
    this._buttonElement = this._form.querySelector(this._options.submitButtonSelector);

    this._form.addEventListener('reset', this._resetForm);

    this._inputList.forEach(inputElement => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }

  enableValidation() {
    this._setEventListener();
  }

}
