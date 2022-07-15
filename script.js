const profileEdit = document.querySelector('.profile__edit');
const popUp = document.querySelector('.popup');
const popClose = document.querySelector('.popup__toggle')

const formSubmit = document.querySelector('.form__button_type_submit');
const nameInput = document.querySelector('.form__input_type_name');
const jobInput = document.querySelector('.form__input_type_descrition');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');

const templateCards = document.querySelector('#cards').content;

const elements = document.querySelector('.elements__list');


const initialCards = [
  {
    name: 'Монтевидео',
    link: 'https://images.unsplash.com/photo-1583270425012-1de82718620e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
  },
  {
    name: 'Буэнос-Айрес',
    link: 'https://images.unsplash.com/photo-1605771086192-286aba8706a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
  },
  {
    name: 'Сантьяго',
    link: 'https://images.unsplash.com/photo-1586980217877-88d1a8a36b4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
  },
  {
    name: 'Рио-де-Жанейро',
    link: 'https://images.unsplash.com/photo-1619546952812-520e98064a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'
  },
  {
    name: 'Ушуая',
    link: 'https://images.unsplash.com/photo-1615656543085-130a54570311?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80'
  },
  {
    name: 'Остров Пасхи',
    link:  'https://images.unsplash.com/photo-1617925173097-f7084b2534cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  },
  ];

// Открытие и закртие модального окна

function PopupOpen() {
  popUp.classList.add('popup_opened');
};
function PopupClose() {
  popUp.classList.remove('popup_opened');
};
  profileEdit.addEventListener('click', PopupOpen);
  popClose.addEventListener('click', PopupClose);

// Редактирование профиля
  
  function formSubmitHandler(evt) {
     evt.preventDefault(); 
     profileName.textContent = nameInput.value;
     profileJob.textContent = jobInput.value;
     PopupClose();
  };
  formSubmit.addEventListener('click', formSubmitHandler);

// Добавление стартового набора карточек

  initialCards.forEach(function(element) {
    const cardsItems = templateCards.cloneNode(true);
    cardsItems.querySelector('.card__image').src = element.link;
    cardsItems.querySelector('.card__image').alt = element.name;
    cardsItems.querySelector('.card__title').textContent = element.name;
    elements.append(cardsItems);
  });
  

  
    

  






