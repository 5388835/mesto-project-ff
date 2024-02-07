// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы
const placesList = document.querySelector('.places__list');

// @todo: Функция создания карточки
function createCard(cardData, deleteCardCallback) {
  // клонируем содержимое тега template
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');
  const cardDeleteBtn = cardElement.querySelector('.card__delete-button');

  // наполняем содержимым
  cardTitle.textContent = cardData.name;
  cardImage.src = cardData.link;

  // обработчик на кнопке удаления
  cardDeleteBtn.addEventListener('click', function () {
    deleteCardCallback(cardElement);
  });
  return cardElement;
}

// @todo: Функция удаления карточки
function deleteCard(cardElement) {
  cardElement.remove();
}

// @todo: Вывести карточки на страницу
function renderInitialCards() {
  initialCards.forEach((cardData) => {
    const cardElement = createCard(cardData, deleteCard);
    placesList.append(cardElement);
  });
}

renderInitialCards();

// Сначала неправильно поняла задание и начала работу с попапов. Жалко удалять, вдруг понадобится ещё! :)

// Открытие попапа
// const popups = document.querySelectorAll('.popup');
// const editProfileBtn = document.querySelector('.profile__edit-button');
// const popupEditProfile = document.querySelector('.popup_type_edit');
// const addNewPlaceBtn = document.querySelector('.profile__add-button');
// const popupNewCard = document.querySelector('.popup_type_new-card');
// const openedImage = document.querySelector('.popup_type_image');

// function openPopup(popupElement) {
//   popupElement.classList.add('popup_is-opened');
// }

// // Закрытие попапа
// function closePopup(popupElement) {
//   popupElement.classList.remove('popup_is-opened');
// }
// popups.forEach(function (popup) {
//   const closePopupBtn = popup.querySelector('.popup__close');
//   closePopupBtn.addEventListener('click', function () {
//     closePopup(popup);
//   });
// });

// // Сохранить данные из попапа
// popups.forEach(function (popup) {
//   const savePopupBtn = popup.querySelector('.popup__button');
//   savePopupBtn.addEventListener('click', function () {});
// });

// // Попап добавления места
// addNewPlaceBtn.addEventListener('click', function () {
//   openPopup(popupNewCard);
// });

// // Попап редактирования профиля
// editProfileBtn.addEventListener('click', function () {
//   openPopup(popupEditProfile);
// });
