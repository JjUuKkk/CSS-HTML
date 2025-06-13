const pets = [
  {
    name: "Katrine",
    image: "/image/pets-katrine.png",
    link: "#",
  },
  {
    name: "Jennifer",
    image: "/image/pets-jennifer.png",
    link: "#",
  },
  {
    name: "Woody",
    image: "/image/pets-woody.png",
    link: "#",
  },
];
const gallery = document.getElementById("petsGallery");
function createPetCards() {
  let cardsHTML = "";

  pets.forEach((pet) => {
    cardsHTML += `
      <div class="pet-card">
        <img src="${pet.image}" alt="${pet.name}" class="pet-card__image">
        <h3 class="pet-card__name">${pet.name}</h3>
        <a href="${pet.link}" class="pet-card__button">Learn more</a>
      </div>
    `;
  });

  gallery.innerHTML = cardsHTML;
}
document.addEventListener("DOMContentLoaded", createPetCards);
