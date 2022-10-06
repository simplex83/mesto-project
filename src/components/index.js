import "../index.css";
import {enableValidation} from "./validate.js";
import {openPopUp, closePopUp, closePopupEsc, closePopupOverlay} from "./modal.js";
import {createPopupZoom, handleFormSubmitProfile, handleFormSubmitContent, handleFormSubmitAva } from "./utils.js";
import {buttonProfileEdit, nameInput, profileName, jobInput,profileJob, buttonAddContent, buttonAvaEdit, popupAdd, 
        popupEditClose, popupEdit, popupAva, popupAddClose, popupZoomClose, popupZoom, formSubmitProfile, formSubmitContent, formSubmitAva } from "./variables.js";
import {getUserInfo,getCards} from "./api.js";

// клики по кнопкам открытия окон
buttonProfileEdit.addEventListener("click", () => {
    openPopUp(popupEdit);
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;});
buttonAddContent.addEventListener("click", () => openPopUp(popupAdd));
buttonAvaEdit.addEventListener("click", () => openPopUp(popupAva));
// клики по сабмитам окон
formSubmitProfile.addEventListener("click", handleFormSubmitProfile);
formSubmitContent.addEventListener("click", handleFormSubmitContent);
formSubmitAva.addEventListener("click", handleFormSubmitAva);

// вызов функции валидации
enableValidation ({
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__button_type_submit',
    inactiveButtonClass: 'form__button_inactive',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'form__input-error_active',
  });
// получение набора карточек, получение информации о пользователе
  getUserInfo();
  getCards();

  




