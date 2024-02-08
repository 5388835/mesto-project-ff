// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы
const cardsContainer = document.querySelector('.places__list');

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
  cardImage.alt = `Фотография места: ${cardData.name}`;

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
    cardsContainer.append(cardElement);
  });
}

renderInitialCards();
