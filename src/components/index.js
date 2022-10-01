import "../index.css";
import {enableValidation} from "./validate.js";
import {openPopUp, closePopUp, closePopupEsc, closePopupOverlay} from "./modal.js";
import {createCardsSet, initialCards} from "./cards.js";
import {createPopupZoom, handleFormSubmitProfile, handleFormSubmitContent} from "./utils.js";
import {buttonProfileEdit, nameInput, profileName, jobInput,profileJob, buttonAddContent, popupAdd, popupEditClose, popupEdit,
    popupAddClose, popupZoomClose, popupZoom, formSubmitProfile, formSubmitContent} from "./variables.js"

// слушатели кликов 
buttonProfileEdit.addEventListener("click", () => {
    openPopUp(popupEdit);
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;});
buttonAddContent.addEventListener("click", () => openPopUp(popupAdd));
popupEditClose.addEventListener("click", () => closePopUp(popupEdit));
popupAddClose.addEventListener("click", () => closePopUp(popupAdd));
popupZoomClose.addEventListener("click", () => closePopUp(popupZoom));
formSubmitProfile.addEventListener("click", handleFormSubmitProfile);
formSubmitContent.addEventListener("click", handleFormSubmitContent);

//  загрузка  стартовый набор карточек
createCardsSet(initialCards);
// вызов функции валидации
enableValidation ({
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__button_type_submit',
    inactiveButtonClass: 'form__button_inactive',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'form__input-error_active',
  });
  
  
  



