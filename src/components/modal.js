// открытие и закрытие модальных окон
export function openPopUp(popUp) {
  popUp.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupEsc); //размещается обработчик Escape
}
export function closePopUp(popUp) {
  popUp.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupEsc); //удаляется обработчик Escape
}
//   закрытие через Esc
export const closePopupEsc = (evt) => {
  if (evt.key === "Escape") {
    const popupOpened = document.querySelector(".popup_opened");
    closePopUp(popupOpened);
  }
};
//   закрытие по клику на оверлей
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