import {popupZoom, imageZoom,textZoom, profileName, profileJob, profileAva, popupEdit,nameInput,jobInput, linkInput, placeInput,popupAdd,formSubmitContent,formSubmitAva, popupAva, avaInput,buttonLike} from "./variables";
import {openPopUp, closePopUp} from "./modal.js";
import {createNewCard, elements} from "./cards.js";
import{updateUserInfo,addNewCard,updateAva, addLike, removeLike} from "./api.js"
//  создания зум-попапа
export function createPopupZoom(evt) {
  imageZoom.src = evt.target.src;
  imageZoom.alt = evt.target.alt;
  textZoom.textContent = evt.target.alt;
  openPopUp(popupZoom)
}
// редактирование профиля
export function handleFormSubmitProfile(evt) {
  evt.preventDefault();
  renderLoading(true);
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  updateUserInfo();
  closePopUp(popupEdit);
}
//  добавление новой карточки через окно
export function handleFormSubmitContent(evt) {
  evt.preventDefault();
  formSubmitContent.setAttribute("disabled", true);
  renderLoading(true);
  addNewCard(placeInput.value, linkInput.value);
  // evt.target.reset();
  linkInput.value ='';
  placeInput.value = '';
  closePopUp(popupAdd);
}
// получение данных о пользователе
export function renderUserInfo(name,job,avatar) {
  profileName.textContent = name;
  profileJob.textContent = job;
  profileAva.src = avatar;
}
//  обновление аватара
export function handleFormSubmitAva(evt) {
  evt.preventDefault();
  formSubmitAva.setAttribute("disabled", true);
  renderLoading(true);
  profileAva.src = avaInput.value;
  updateAva();
  avaInput.value ='';
  closePopUp(popupAva);
}
//  нажатие на лайк
export function pressLike(cardId, number, button) {
  if (button.classList.contains("card__like_dark")) {
    removeLike(number, cardId);
    button.classList.remove("card__like_dark");
  } else {
    addLike(number,cardId);
    button.classList.add("card__like_dark");
  }
}
//загрузка на сервер
export function renderLoading(isLoading) {
  const buttonSubmit = document.querySelector(".form__button_type_submit");
  if (isLoading) {
    buttonSubmit.textContent = "Сохранение...";
  } else {
    buttonSubmit.textContent = "Сохранить";
  }
}

