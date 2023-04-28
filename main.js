(()=>{"use strict";var t={formSelector:".popup__form",inputSelector:".form__input",submitButtonSelector:".form__button",inactiveButtonClass:"form__button_inactive",inputErrorClass:"form__input_type_error",errorClass:"form__input-error_active"};function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,o(r.key),r)}}function r(t,e,n){return(e=o(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t){var n=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===e(n)?n:String(n)}var i=function(){function t(e,n,o,i,u,c){var a=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),r(this,"toggleLike",(function(){a._like.classList.toggle("element__button_like-active")})),r(this,"_deleteCard",(function(){a._removeCard((function(){return a._card.remove()}),a._cardId)})),this._link=e.link,this._name=e.name,this._owner=e.owner,this._likes=e.likes,this._cardId=e._id,this._templateSelector=n,this._openPopupImage=i,this._removeCard=u,this._handleLike=c,this._userId=o}var e,o;return e=t,(o=[{key:"updateLikeCount",value:function(){this._likeCountElement.textContent=this._likes.length}},{key:"updateData",value:function(t){this._likes=t.likes}},{key:"_getTemplate",value:function(){return this._card=document.querySelector(this._templateSelector).content.cloneNode(!0).children[0],this._card}},{key:"isLiked",value:function(){var t=this;return this._likes.some((function(e){return t._userId===e._id}))}},{key:"_setEventListener",value:function(){var t=this;this._card.querySelector(".element__button_type_remove").addEventListener("click",this._deleteCard),this._card.querySelector(".element__link-full-image").addEventListener("click",(function(e){e.preventDefault(),t._openPopupImage({name:t._name,link:t._link})})),this._card.querySelector(".element__button_type_like").addEventListener("click",(function(){t._handleLike(t._cardId)}))}},{key:"createCard",value:function(){this._card=this._getTemplate();var t=this._card.querySelector(".element__image");return this._card.querySelector(".element__header").textContent=this._name,t.alt="Фотография: "+this._name,t.src=this._link,this._like=this._card.querySelector(".element__button_type_like"),this._likeCountElement=this._card.querySelector(".element__count-likes"),this._owner._id!==this._userId&&this._card.querySelector(".element__button_type_remove").classList.add("element__button_hidden"),this.updateLikeCount(),this.isLiked()&&this._like.classList.toggle("element__button_like-active"),this._setEventListener(),this._card}}])&&n(e.prototype,o),Object.defineProperty(e,"prototype",{writable:!1}),t}();function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,l(r.key),r)}}function a(t,e,n){return(e=l(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t){var e=function(t,e){if("object"!==u(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===u(e)?e:String(e)}var s=function(){function t(e,n){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),a(this,"_showInputError",(function(t,e){var n=r._form.querySelector(".".concat(t.id,"-error"));t.classList.add(r._options.inputErrorClass),n.classList.add(r._options.errorClass),n.textContent=e})),a(this,"_hideInputError",(function(t){var e=r._form.querySelector(".".concat(t.id,"-error"));t.classList.remove(r._options.inputErrorClass),e.classList.remove(r._options.errorClass),e.textContent=""})),a(this,"_checkInputValidity",(function(t){t.validity.valid?r._hideInputError(t):r._showInputError(t,t.validationMessage)})),a(this,"_hasInvalidInput",(function(){return r._inputList.some((function(t){return!t.validity.valid}))})),a(this,"_toggleButtonState",(function(){r._buttonElement.classList.toggle(r._options.inactiveButtonClass,r._hasInvalidInput()),r._buttonElement.disabled=r._hasInvalidInput()})),a(this,"_resetForm",(function(){setTimeout((function(){r._inputList.forEach(r._hideInputError),r._toggleButtonState()}),0)})),a(this,"_setEventListener",(function(){r._inputList=Array.from(r._form.querySelectorAll(r._options.inputSelector)),r._buttonElement=r._form.querySelector(r._options.submitButtonSelector),r._form.addEventListener("reset",r._resetForm),r._inputList.forEach((function(t){t.addEventListener("input",(function(){r._checkInputValidity(t),r._toggleButtonState()}))}))})),this._form=n,this._options=e}var e,n;return e=t,(n=[{key:"enableValidation",value:function(){this._setEventListener()}}])&&c(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,b(r.key),r)}}function y(t,e,n){return(e=b(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function b(t){var e=function(t,e){if("object"!==f(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==f(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===f(e)?e:String(e)}var m=function(){function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),y(this,"_handleEscClose",(function(t){"Escape"===t.key&&n.close()})),y(this,"_closePopupByOverlayClick",(function(t){t.target.classList.contains("popup")&&n.close()})),this._popupSelector=e,this._popup=document.querySelector(this._popupSelector)}var e,n;return e=t,(n=[{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("click",this._closePopupByOverlayClick),this._popup.querySelector(".popup__close-button").addEventListener("click",(function(){t.close()}))}},{key:"open",value:function(){document.addEventListener("keydown",this._handleEscClose),this._popup.classList.add("popup_opened")}},{key:"close",value:function(){document.removeEventListener("keydown",this._handleEscClose),this._popup.classList.remove("popup_opened")}}])&&p(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function v(t,e){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},v(t,e)}function _(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function h(){return h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=S(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},h.apply(this,arguments)}function S(t){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},S(t)}function g(t){var e=function(t,e){if("object"!==d(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==d(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===d(e)?e:String(e)}var w=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&v(t,e)}(i,t);var e,n,r,o=(n=i,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=S(n);if(r){var o=S(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===d(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return _(t)}(this,t)});function i(t){var e,n,r,u,c;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),r=_(n=o.call(this,t)),c=function(t){var r=t.name,o=t.link;h((e=_(n),S(i.prototype)),"open",e).call(e),n._image.src=o,n._image.alt="Фотография: "+r,n._imageCaption.textContent=r},(u=g(u="open"))in r?Object.defineProperty(r,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):r[u]=c,n._image=n._popup.querySelector(".popup__image"),n._imageCaption=n._popup.querySelector(".popup__image-caption"),n}return e=i,Object.defineProperty(e,"prototype",{writable:!1}),e}(m);function k(t){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},k(t)}function j(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==k(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==k(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===k(o)?o:String(o)),r)}var o}var E=function(){function t(e){var n=e.renderer,r=e.selector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=n,this._container=document.querySelector(r)}var e,n;return e=t,(n=[{key:"addItem",value:function(t){this._container.prepend(t)}},{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){return e._renderer(t)}))}}])&&j(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function O(t){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(t)}function P(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,T(r.key),r)}}function L(t,e){return L=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},L(t,e)}function C(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function I(){return I="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=q(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},I.apply(this,arguments)}function q(t){return q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},q(t)}function R(t,e,n){return(e=T(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function T(t){var e=function(t,e){if("object"!==O(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==O(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===O(e)?e:String(e)}var B=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&L(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=q(r);if(o){var n=q(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===O(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return C(t)}(this,t)});function u(t){var e,n,r,o=t.popupSelector,c=t.submitHandler;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),R(C(r=i.call(this,o)),"setEventListeners",(function(){I((e=C(r),q(u.prototype)),"setEventListeners",e).call(e),r._form.addEventListener("submit",(function(t){t.preventDefault(),r._submitHandler(r._getInputValues())}))})),R(C(r),"open",(function(){r._form.reset(),I((n=C(r),q(u.prototype)),"open",n).call(n)})),r._submitHandler=c,r._form=r._popup.querySelector(".popup__form"),r._inputList=r._form.querySelectorAll(".form__input"),r._submitBtn=r._form.querySelector(".form__button"),r}return e=u,(n=[{key:"_getInputValues",value:function(){var t=this;return this._inputValues={},this._inputList.forEach((function(e){t._inputValues[e.name]=e.value})),this._inputValues}},{key:"setInputValues",value:function(t){this._inputList.forEach((function(e){e.value=t[e.name]}))}},{key:"setLoadingStatus",value:function(t){var e=this._submitBtn.textContent;this._submitBtn.textContent=t?"Сохранение...":e}}])&&P(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(m);function x(t){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},x(t)}function D(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,N(r.key),r)}}function U(t,e){return U=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},U(t,e)}function V(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function A(){return A="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=H(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},A.apply(this,arguments)}function H(t){return H=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},H(t)}function N(t){var e=function(t,e){if("object"!==x(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==x(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===x(e)?e:String(e)}var J=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&U(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=H(r);if(o){var n=H(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===x(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return V(t)}(this,t)});function u(t){var e,n,r,o,c,a=t.popupSelector;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),r=V(n=i.call(this,a)),c=function(){A((e=V(n),H(u.prototype)),"setEventListeners",e).call(e),n._form.addEventListener("submit",(function(t){t.preventDefault(),n._handleRemove()}))},(o=N(o="setEventListeners"))in r?Object.defineProperty(r,o,{value:c,enumerable:!0,configurable:!0,writable:!0}):r[o]=c,n._form=n._popup.querySelector(".popup__form"),n}return e=u,(n=[{key:"open",value:function(t){this._handleRemove=t,A(H(u.prototype),"open",this).call(this)}}])&&D(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(m);function F(t){return F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},F(t)}function z(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,G(r.key),r)}}function G(t){var e=function(t,e){if("object"!==F(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==F(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===F(e)?e:String(e)}var M=function(){function t(e){var n,r,o,i=this,u=e.nameSelector,c=e.jobSelector,a=e.avatarSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,o=function(t){var e=t.name,n=t.about,r=t._id,o=t.avatar;i._nameSelector.textContent=e,i._jobSelector.textContent=n,i._avatarSelector.src=o,i._id=r},(r=G(r="setUserInfo"))in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,this._nameSelector=document.querySelector(u),this._jobSelector=document.querySelector(c),this._avatarSelector=document.querySelector(a)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._nameSelector.textContent,about:this._jobSelector.textContent,userId:this._id}}},{key:"setAvatar",value:function(t){var e=t.avatar;this._avatarSelector.src=e}}])&&z(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function K(t){return K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},K(t)}function Q(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==K(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==K(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===K(o)?o:String(o)),r)}var o}var W=function(){function t(e){var n=e.baseUrl,r=e.headers;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.baseUrl=n,this.headers=r}var e,n;return e=t,(n=[{key:"_sendRequest",value:function(t){var e=t.endpoint,n=t.method,r=t.body,o={method:n,headers:this.headers};r&&(o.body=r);var i="".concat(this.baseUrl).concat(e);return fetch(i,o).then((function(t){return t.ok?t.json():Promise.reject("Error")}))}},{key:"get",value:function(t){return this._sendRequest({endpoint:t,method:"GET"})}},{key:"post",value:function(t,e){return this._sendRequest({endpoint:t,method:"POST",body:JSON.stringify(e)})}},{key:"put",value:function(t,e){return this._sendRequest({endpoint:t,method:"PUT",body:JSON.stringify(e)})}},{key:"patch",value:function(t,e){return this._sendRequest({endpoint:t,method:"PATCH",body:JSON.stringify(e)})}},{key:"delete",value:function(t){return this._sendRequest({endpoint:t,method:"DELETE"})}}])&&Q(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),X=document.querySelectorAll(".form"),Y=document.querySelector(".profile__add-button"),Z=document.querySelector(".profile__avatar-link"),$=document.querySelector(".profile__edit-button"),tt=(document.querySelector(".form__input_type_name"),document.querySelector(".form__input_type_job"),new M({nameSelector:".profile__header",jobSelector:".profile__subheader",avatarSelector:".profile__avatar"})),et=new W({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-64",headers:{authorization:"e088005e-e78f-4b2a-a43d-652e65680dd5","Content-Type":"application/json"}}),nt=et.get("/users/me"),rt=et.get("/cards"),ot=new J({popupSelector:".popup_type_confirm"});ot.setEventListeners();var it=function(t){var e=new i(t,"#element",tt.getUserInfo().userId,(function(){lt.open(t)}),(function(t,e){ot.open((function(){et.delete("/cards/".concat(e)).then((function(){t(),ot.close()})).catch((function(t){console.log(t)}))}))}),(function(t){e.isLiked()?et.delete("/cards/".concat(t,"/likes")).then((function(t){e.updateData(t),e.updateLikeCount(),e.toggleLike()})).catch((function(t){console.log(t)})):et.put("/cards/".concat(t,"/likes")).then((function(t){e.updateData(t),e.updateLikeCount(),e.toggleLike()})).catch((function(t){console.log(t)}))}));return e.createCard()},ut=new B({popupSelector:".popup_type_profile",submitHandler:function(t){ut.setLoadingStatus(!0),et.patch("/users/me",t).then((function(t){tt.setUserInfo(t),ut.close()})).catch((function(t){console.error(t)})).finally((function(){return ut.setLoadingStatus(!1)}))}});ut.setEventListeners();var ct=new B({popupSelector:".popup_type_avatar",submitHandler:function(t){ct.setLoadingStatus(!0),et.patch("/users/me/avatar",t).then((function(t){tt.setAvatar(t),ct.close(),ct.setLoadingStatus(!1)})).catch((function(t){console.error(t)})).finally((function(){return ct.setLoadingStatus(!1)}))}});ct.setEventListeners();var at=new B({popupSelector:".popup_type_add-place",submitHandler:function(t){at.setLoadingStatus(!0),et.post("/cards",t).then((function(t){ft.addItem(it(t)),at.close()})).catch((function(t){console.error(t)})).finally((function(){return at.setLoadingStatus(!1)}))}});at.setEventListeners();var lt=new w(".popup_type_image");lt.setEventListeners(),$.addEventListener("click",(function(){var t=tt.getUserInfo();ut.open(),ut.setInputValues(t)})),Y.addEventListener("click",at.open),Z.addEventListener("click",ct.open);var st,ft=new E({renderer:function(t){ft.addItem(it(t))},selector:".elements__list"});X.forEach((function(e){new s(t,e).enableValidation()})),st=[nt,rt],Promise.all(st).then((function(t){tt.setUserInfo(t[0]),ft.renderItems(t[1].reverse())})).catch((function(t){return console.log(t)}))})();