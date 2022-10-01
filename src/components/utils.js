import {popupZoom, imageZoom,textZoom, profileName, profileJob, popupEdit,nameInput,jobInput, linkInput, placeInput,popupAdd,formSubmitContent} from "./variables";
import {openPopUp, closePopUp} from "./modal.js";
import {createNewCard, elements} from "./cards.js";
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
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopUp(popupEdit);
}
//  добавление новой карточки через модальное окно
export function handleFormSubmitContent(evt) {
  evt.preventDefault();
  formSubmitContent.setAttribute("disabled", true);
  const newCard = createNewCard(linkInput.value, placeInput.value);
  elements.prepend(newCard);
  linkInput.value ='';
  placeInput.value = '';
  closePopUp(popupAdd);
}