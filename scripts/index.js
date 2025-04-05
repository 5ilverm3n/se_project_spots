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

profileEditButton.addEventListener("click", function () {
  profileNameInput.value = profileNameEl.textContent;
  profileAboutInput.value = profileAboutEl.textContent;
  editModal.classList.add("modal_opened");
});

function openModal() {
  editModal.classList.add("modal_opened");
}

function closeModal() {
  editModal.classList.remove("modal_opened");
}

profileEditButton.addEventListener("click", openModal);

editModalCloseButton.addEventListener("click", closeModal);

// Handle Edit Profile Form Submission
editModalForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent the default form submission behavior

  // Update the profile name and about text on the page
  profileNameEl.textContent = profileNameInput.value;
  profileAboutEl.textContent = profileAboutInput.value;

  // Close the modal
  closeModal();
});

// Selectors for Add Post Modal
const addPostButton = document.querySelector("#add-button");
const addPostModal = document.querySelector("#add-post-modal");
const addPostCloseButton = document.querySelector("#add-post-close-btn");
const addPostForm = document.querySelector("form[name='add-post-form']");
const cardsList = document.querySelector(".cards__list");

// Open Add Post Modal
addPostButton.addEventListener("click", () => {
  addPostModal.classList.add("modal_opened");
});

// Close Add Post Modal
addPostCloseButton.addEventListener("click", () => {
  addPostModal.classList.remove("modal_opened");
});

// Handle Add Post Form Submission
addPostForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const postTitle = document.querySelector("#post-title").value;
  const postImage = document.querySelector("#post-image").value;

  // Create a new card object
  const newCard = {
    name: postTitle,
    link: postImage,
  };

  // Add the new card to the cards list
  const newCardElement = getCardsElement(newCard);
  cardsList.prepend(newCardElement);

  // Close the modal and reset the form
  addPostModal.classList.remove("modal_opened");
  addPostForm.reset();
});
