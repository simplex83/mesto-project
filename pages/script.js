// находим места клика на кнопки для открытия и закрытия модальных окон
const buttonProfileEdit = document.querySelector(".profile__edit");
const buttonAddContent = document.querySelector(".profile__add");
const popupEdit = document.querySelector(".popup_type_edit");
const popupAdd = document.querySelector(".popup_type_add");
const popupZoom = document.querySelector(".popup_type_zoom");
const popupEditClose = popupEdit.querySelector(".popup__toggle");
const popupAddClose = popupAdd.querySelector(".popup__toggle");
const popupZoomClose = popupZoom.querySelector(".popup__toggle");
const imageCard = document.querySelector(".card__image");
// находим места редактирования профиля и добавления контента
const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__subtitle");
const formSubmitProfile = document.querySelector("#submitProfile");
const nameInput = document.querySelector("#name");
const jobInput = document.querySelector("#job");
const formSubmitContent = document.querySelector("#submitContent");
const placeInput = document.querySelector("#place");
const linkInput = document.querySelector("#link");
// находим шаблон карточек и место их размещения
const templateCards = document.querySelector("#cards").content;
const elements = document.querySelector(".elements__list");
// находим место размещение контента на зум-попапе
const imageZoom = popupZoom.querySelector(".popup__image");
const textZoom = popupZoom.querySelector(".popup__text");
// массив со стартовым набором карточек
const initialCards = [
    {
        name: "Монтевидео",
        link: "https://images.unsplash.com/photo-1583270425012-1de82718620e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    },
    {
        name: "Буэнос-Айрес",
        link: "https://images.unsplash.com/photo-1605771086192-286aba8706a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    },
    {
        name: "Сантьяго",
        link: "https://images.unsplash.com/photo-1586980217877-88d1a8a36b4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    },
    {
        name: "Рио-де-Жанейро",
        link: "https://images.unsplash.com/photo-1619546952812-520e98064a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    },
    {
        name: "Ушуая",
        link: "https://images.unsplash.com/photo-1615656543085-130a54570311?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
    },
    {
        name: "Остров Пасхи",
        link: "https://images.unsplash.com/photo-1617925173097-f7084b2534cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
];
// объявление функций открытия и закрытия модальных окон
function openPopUp(popUp) {
    popUp.classList.add("popup_opened");
}
function closePopUp(popUp) {
    popUp.classList.remove("popup_opened");
}
// объявление функции редактирование профиля
function handleFormSubmitProfile(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopUp(popupEdit);
}
// объявление функции добавления новой карточки
function createNewCard(newImage, newTitle) {
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
function createCardsSet(Cards) {
    Cards.forEach(function (element) {
        const card = createNewCard(element.link, element.name);
        elements.append(card);
    });
}
//  загружаем стартовый набор карточек
createCardsSet(initialCards);
//  объявление функции создания зум-попапа
function createPopupZoom(evt) {
    imageZoom.src = evt.target.src;
    imageZoom.alt = evt.target.alt;
    textZoom.textContent = evt.target.alt;
    openPopUp(popupZoom)
}
// объявление функции добавления новой карточки через модальное окно
function handleFormSubmitContent(evt) {
    evt.preventDefault();
    const newCard = createNewCard(linkInput.value, placeInput.value);
    elements.prepend(newCard);
    linkInput.value ='';
    placeInput.value = '';
    closePopUp(popupAdd);
}

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
