import {getCards,deleteCard } from './api.js'
import {createPopupZoom, pressLike} from "./utils.js"
import {myId} from "./variables.js"

// шаблон карточки и контейнер для нее
const templateCards = document.querySelector("#cards").content;
export const elements = document.querySelector(".elements__list");

// создание карточки
export function createNewCard(data, name, link, like) {
  const cardNew = templateCards.cloneNode(true);// клон шаблона

  const cardRemove = cardNew.querySelector(".card__remove");
  const arrLike = Array.from(like);
  const buttonLike = cardNew.querySelector(".card__like");
  const likeNumber = cardNew.querySelector(".card__number");

  if (!(data.owner._id === myId.id)) {
    cardRemove.classList.add("card__remove_inactive");//  проверка моя/чужая карточка
  };
  arrLike.forEach((element) => {
    if (element._id === myId.id) {
      buttonLike.classList.add("card__like_dark");//проверка ставил ли лайк на карточке
    }
  });
  // наполнение карточки
  cardNew.querySelector(".card__image").src = link;
  cardNew.querySelector(".card__image").alt = name;
  cardNew.querySelector(".card__title").textContent = name;
  likeNumber.textContent = like.length;
  // события
  buttonLike.addEventListener("click", () => {
    pressLike(data._id, likeNumber, buttonLike);//лайк
  });
  cardNew.querySelector(".card__image").addEventListener("click", createPopupZoom);//зум
  cardRemove.addEventListener("click", (evt) => {
    deleteCard(data._id)
    .then((data) => {
      evt.target.closest(".card").remove()
      })
    .catch((err) => console.log(err)) //удаление
  });
  return cardNew;
}
// добавление карточки 
export function renderCards(data, name, link, like) {
    const card = createNewCard(data, name, link, like);
    elements.prepend(card);
}


