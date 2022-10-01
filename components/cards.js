const montevideo = new URL('../images/Montevideo.jpg', import.meta.url); 
const buenos = new URL('../images/buenos_ajres.jpg', import.meta.url);
const santiago = new URL('../images/santiago.jpg', import.meta.url);
const rio = new URL('../images/rio.jpg', import.meta.url);
const ushuaya = new URL('../images/ushuayya.jpg', import.meta.url);
const island = new URL('../images/island.jpg', import.meta.url);
// массив со стартовым набором карточек
export const initialCards = [
  {
      name: "Монтевидео",
      link: montevideo,
  },
  {
      name: "Буэнос-Айрес",
      link: buenos,
  },
  {
      name: "Сантьяго",
      link: santiago,
  },
  {
      name: "Рио-де-Жанейро",
      link: rio,
  },
  {
      name: "Ушуая",
      link: ushuaya,
  },
  {
      name: "Остров Пасхи",
      link: island,
  },
];
import {createPopupZoom} from "./utils"
// находим шаблон карточек и место их размещения
const templateCards = document.querySelector("#cards").content;
export const elements = document.querySelector(".elements__list");
// объявление функции добавления новой карточки
export function createNewCard(newImage, newTitle) {
  // создаем клон шаблона
  const cardNew = templateCards.cloneNode(true);
  // добавляем элементы наполнения
  cardNew.querySelector(".card__image").src = newImage;
  cardNew.querySelector(".card__image").alt = newTitle;
  cardNew.querySelector(".card__title").textContent = newTitle;
  // прикрепляем события (лайк, зум, удаление)
  cardNew.querySelector(".card__like").addEventListener("click", function (evt) {
      evt.target.classList.toggle("card__like_dark");
  });
  cardNew.querySelector(".card__image").addEventListener("click", createPopupZoom);
  cardNew.querySelector(".card__remove").addEventListener("click", function (evt) {
      evt.target.closest(".card").remove();
  });
  return cardNew;
}
// объявление функции добавления стартового набора карточек
export function createCardsSet(Cards) {
  Cards.forEach(function (element) {
      const card = createNewCard(element.link, element.name);
      elements.append(card);
  });
}
