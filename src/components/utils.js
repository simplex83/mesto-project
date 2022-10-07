import { popupZoom, imageZoom, textZoom, profileName, profileJob, profileAva, popupEdit, nameInput, jobInput, linkInput, placeInput, popupAdd, formSubmitContent, formSubmitAva, popupAva, avaInput, buttonLike, formSubmitProfile} from "./variables";
import { openPopUp, closePopUp } from "./modal.js";
import { createNewCard, elements, renderCards } from "./cards.js";
import { updateUserInfo, addNewCard, updateAva, addLike, removeLike } from "./api.js"
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
  renderLoading(true, formSubmitProfile);
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  updateUserInfo()
    .then((data) => {
      console.log(data);
      closePopUp(popupEdit);
    })
    .catch((err) => console.log(err))
    .finally(() => {
      renderLoading(false,formSubmitProfile);
    });
}
//  добавление новой карточки через окно
export function handleFormSubmitContent(evt) {
  evt.preventDefault();
  renderLoading(true,formSubmitContent);
  addNewCard()
    .then((dataCard) => {
      renderCards(dataCard, dataCard.name, dataCard.link, dataCard.likes);
      linkInput.value = '';
      placeInput.value = '';
      formSubmitContent.setAttribute("disabled", true);
      closePopUp(popupAdd);
    })
    .catch((err) => console.log(err))
    .finally(() => {
      renderLoading(false,formSubmitContent);
    });

}
// получение данных о пользователе
export function renderUserInfo(name, job, avatar) {
  profileName.textContent = name;
  profileJob.textContent = job;
  profileAva.src = avatar;
}
//  обновление аватара
export function handleFormSubmitAva(evt) {
  evt.preventDefault();
  formSubmitAva.setAttribute("disabled", true);
  renderLoading(true, formSubmitAva);
  profileAva.src = avaInput.value;
  updateAva()
    .then((data) => {
    avaInput.value = '';
    closePopUp(popupAva);
    })
    .catch((err) => console.log(err))
    .finally(() => {
      renderLoading(false,formSubmitAva );
    });
}
//  нажатие на лайк
export function pressLike(cardId, number, button) {
  if (button.classList.contains("card__like_dark")) {
    removeLike(number, cardId)
      .then((data) => {
        number.textContent = data.likes.length;
        button.classList.remove("card__like_dark");
      })
      .catch((err) => console.log(err));
    
  } else {
    addLike(number, cardId)
      .then((data) => {
        number.textContent = data.likes.length;
        button.classList.add("card__like_dark");
      })
      .catch((err) => console.log(err));
  }
}
//загрузка на сервер
export function renderLoading(isLoading, button) {
  if (isLoading) {
    button.textContent = "Сохранение...";
  } else {
    button.textContent = "Сохранить";
  }
}

