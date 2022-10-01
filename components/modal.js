// объявление функций открытия и закрытия модальных окон
export function openPopUp(popUp) {
  popUp.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupEsc); //размещаем слушатель нажатия на кнопку
}
export function closePopUp(popUp) {
  popUp.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupEsc); //удаляем слушатель нажатия на кнопку
}
//   закрытие попапа Esc
export const closePopupEsc = (evt) => {
  if (evt.key === "Escape") {
    const popupOpened = document.querySelector(".popup_opened");
    closePopUp(popupOpened);
  }
};
//   закрытие попапов по клику на оверлей
export const closePopupOverlay = document.querySelectorAll('.popup').forEach((popup) => {
  popup.addEventListener("mousedown", (evt) => {
    if (
      evt.target.classList.contains("popup") ||
      evt.target.classList.contains("popup__toggle")
    ) {
      closePopUp(popup);
    }
  });
});