const initialCards = [
  {
    name: "Golden Gate Brich ",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/7-photo-by-griffin-wooldridge-from-pexels.jpg",
  },

  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    name: "Restaurant terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
  },
  {
    name: "An outdoor cafe",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },
  {
    name: "A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
  },
  {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },
  {
    name: "Mountain house",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
  },
];

// DOM element queries (move to the top)
const profileEditButton = document.querySelector(".profile__edit-button");
const editModal = document.querySelector("#edit-modal");
const editModalCloseButton = editModal.querySelector(".modal__close-btn");
const editModalForm = editModal.querySelector(".modal__form");
const profileNameEl = document.querySelector(".profile__name");
const profileAboutEl = document.querySelector(".profile__about");
const profileNameInput = editModal.querySelector("#profile-name-input");
const profileAboutInput = editModal.querySelector("#profile-description-input");

const addPostButton = document.querySelector("#add-button");
const addPostModal = document.querySelector("#add-post-modal");
const addPostCloseButton = document.querySelector("#add-post-close-btn");
const addPostForm = document.querySelector("form[name='add-post-form']");
const cardsList = document.querySelector(".cards__list");

const previewModal = document.querySelector("#preview-modal");
const modalImage = previewModal.querySelector(".modal__image");
const modalCaption = previewModal.querySelector(".modal__caption");
const previewModalCloseButton = previewModal.querySelector(".modal__close-btn");

const template = document.querySelector("#card-template"); // Select the template

// Open Modal
function openModal(modal) {
  modal.classList.add("modal_opened");
  const firstInput = modal.querySelector("input");
  if (firstInput) firstInput.focus();
}

// Close Modal
function closeModal(modal) {
  modal.classList.remove("modal_opened");
}

// Open Edit Profile Modal
profileEditButton.addEventListener("click", () => {
  profileNameInput.value = profileNameEl.textContent;
  profileAboutInput.value = profileAboutEl.textContent;
  openModal(editModal); // Use openModal function
});

// Close Edit Profile Modal
editModalCloseButton.addEventListener("click", () => closeModal(editModal));

// Handle Edit Profile Form Submission
editModalForm.addEventListener("submit", (event) => {
  event.preventDefault();
  profileNameEl.textContent = profileNameInput.value;
  profileAboutEl.textContent = profileAboutInput.value;
  closeModal(editModal);
});

// Open Add Post Modal
addPostButton.addEventListener("click", () => {
  openModal(addPostModal); // Use openModal function
});

// Close Add Post Modal
addPostCloseButton.addEventListener("click", () => closeModal(addPostModal));

// Handle Add Post Form Submission
addPostForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const postTitle = document.querySelector("#post-title").value.trim();
  const postImage = document.querySelector("#post-image").value.trim();

  if (!postTitle || !postImage) {
    alert("Please fill out both fields.");
    return;
  }

  const newCard = { name: postTitle, link: postImage };
  const newCardElement = getCardsElement(newCard);
  cardsList.prepend(newCardElement);

  closeModal(addPostModal);
  addPostForm.reset();
});

// Update getCardsElement to use the global template variable
function getCardsElement(card) {
  const cardElement = template.content.cloneNode(true); // Clone the template content

  // Select the title and image elements from the cloned content
  const cardImage = cardElement.querySelector(".card__image"); // Image element
  const cardText = cardElement.querySelector(".card__text"); // Title element

  // Populate the cloned elements with data
  cardImage.src = card.link;
  cardImage.alt = card.name;
  cardText.textContent = card.name;

  const cardLikeBtnEl = cardElement.querySelector(".card__like-button");
  cardLikeBtnEl.addEventListener("click", () => {
    cardLikeBtnEl.classList.toggle("card__like-button_active");
  });

  const cardDeleteBtnEl = cardElement.querySelector(".card__delete-button");
  cardDeleteBtnEl.addEventListener("click", (event) => {
    const cardToRemove = event.target.closest(".card");
    if (cardToRemove) {
      cardToRemove.remove();
    }
  });

  // Use the cached previewModal, modalImage, and modalCaption
  cardImage.addEventListener("click", () => {
    modalImage.src = card.link;
    modalImage.alt = card.name;
    modalCaption.textContent = card.name;
    openModal(previewModal);
  });

  // Return the card element
  return cardElement;
}

// Render Initial Cards
initialCards.forEach(function (item) {
  const cardElement = getCardsElement(item);
  cardsList.appendChild(cardElement);
});

// Close Preview Modal (image modal)
previewModalCloseButton.addEventListener("click", () => closeModal(previewModal));
