const intialCards = [
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

// Edit Profile Modal
profileEditButton.addEventListener("click", () => {
  profileNameInput.value = profileNameEl.textContent;
  profileAboutInput.value = profileAboutEl.textContent;
  openModal(editModal);
});

editModalCloseButton.addEventListener("click", () => closeModal(editModal));

editModalForm.addEventListener("submit", (event) => {
  event.preventDefault();
  profileNameEl.textContent = profileNameInput.value;
  profileAboutEl.textContent = profileAboutInput.value;
  closeModal(editModal);
});

// Add Post Modal
addPostButton.addEventListener("click", () => openModal(addPostModal));
addPostCloseButton.addEventListener("click", () => closeModal(addPostModal));

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

// Create Card Element
function getCardsElement(card) {
  const cardElement = document.createElement("li");
  cardElement.classList.add("card");

  const cardImage = document.createElement("img");
  cardImage.classList.add("card__image");
  cardImage.src = card.link;
  cardImage.alt = card.name;

  const cardTextbox = document.createElement("div");
  cardTextbox.classList.add("card__textbox");

  const cardText = document.createElement("h2");
  cardText.classList.add("card__text");
  cardText.textContent = card.name;

  const likeButton = document.createElement("button");
  likeButton.classList.add("card__like-button");
  likeButton.setAttribute("aria-label", "Like Button");
  likeButton.type = "button";

  cardTextbox.appendChild(cardText);
  cardTextbox.appendChild(likeButton);
  cardElement.appendChild(cardImage);
  cardElement.appendChild(cardTextbox);

  return cardElement;
}

intialCards.forEach(function (item)  {
  console.log(item.name);
  console.log(item.link);
});