import {renderUserInfo,renderLoading,handleFormSubmitContent } from "./utils.js"
import {profileName, profileJob, profileAva, avaInput } from "./variables.js"
import{renderCards} from "./cards.js"
import {nameInput,jobInput,linkInput, placeInput } from "./variables";
const config = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-15',
  methodGet: "GET",
  methodPost: "POST",
  methhodDel: "DELETE",
  methodPatch: "PATCH",
  methodPut: "PUT",
  headers: {
    authorization: 'ad43b36a-9d63-4c81-aad8-2cd0b6705448',
    'Content-Type': 'application/json'
  },
};
// проверка response
function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
}
// получение данных пользователя
export function getUserInfo() {
  return fetch(`${config.baseUrl}/users/me`, {
    method: config.methodGet,
    headers: config.headers,
  })
  .then((res) => checkResponse(res))
}
// получение набор карточек
export function getCards() {
  return fetch(`${config.baseUrl}/cards`, {
    method: config.methodGet,
    headers: config.headers,
  })
  .then((res) => checkResponse(res))
}
// обновление информации о пользователе
export function updateUserInfo() {
  return fetch(`${config.baseUrl}/users/me`, {
    method: config.methodPatch,
    headers: config.headers,
    body: JSON.stringify({
      name: nameInput.value,
      about: jobInput.value
    })
  })
  .then((res) => checkResponse(res))
}
// добавление новой карточки через окно
export function addNewCard() {
  return fetch(`${config.baseUrl}/cards`, {
    method: config.methodPost,
    headers: config.headers,
    body: JSON.stringify({
      name: placeInput.value,
      link: linkInput.value
    })
  })
  .then((res) => checkResponse(res))
}
// обновление аватара
export function updateAva() {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: config.methodPatch,
    headers: config.headers,
    body: JSON.stringify({
      avatar: avaInput.value,
    })
  })
  .then((res) => checkResponse(res))
}
// удаление карточки 
export function deleteCard(cardId) {
  return fetch(`${config.baseUrl}/cards/${cardId}`, {
    method: config.methhodDel,
    headers: config.headers,
    })
    .then((res) => checkResponse(res))
}
// удаление лайка
export function removeLike(number,cardId) {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: config.methhodDel,
    headers: config.headers,
  })
    .then((res) => checkResponse(res))
}
// добавление лайка
export function addLike(number,cardId) {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: config.methodPut,
    headers: config.headers,
  })
  .then((res) => checkResponse(res))
}