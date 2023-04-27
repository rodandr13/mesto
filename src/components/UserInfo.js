export default class UserInfo {
  constructor({nameSelector, jobSelector, avatarSelector}) {
    this._nameSelector = document.querySelector(nameSelector);
    this._jobSelector = document.querySelector(jobSelector);
    this._avatarSelector = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    return {
      name: this._nameSelector.textContent,
      about: this._jobSelector.textContent,
      userId: this._id
    }
  }

  setAvatar({avatar}) {
    this._avatarSelector.src = avatar;
  }

  setUserInfo = ({name, about, _id, avatar}) => {
    this._nameSelector.textContent = name;
    this._jobSelector.textContent = about;
    this._avatarSelector.src = avatar;
    this._id = _id;
  }
}
