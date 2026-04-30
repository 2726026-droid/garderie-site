// Galerie : cliquer sur une image pour l’agrandir
const imagesGalerie = document.querySelectorAll(".grid-galerie img");

const overlay = document.createElement("div");
overlay.classList.add("overlay-image");

const grandeImage = document.createElement("img");
overlay.appendChild(grandeImage);

document.body.appendChild(overlay);

imagesGalerie.forEach((image) => {
  image.addEventListener("click", () => {
    grandeImage.src = image.src;
    grandeImage.alt = image.alt;
    overlay.classList.add("active");
  });
});

overlay.addEventListener("click", () => {
  overlay.classList.remove("active");
});

// Animation au scroll
const elements = document.querySelectorAll(
  ".presentation, .services, .card, .galerie, .footer"
);

function afficherElements() {
  elements.forEach((element) => {
    const position = element.getBoundingClientRect().top;
    const hauteurEcran = window.innerHeight;

    if (position < hauteurEcran - 100) {
      element.classList.add("visible");
    }
  });
}

const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}

window.addEventListener("scroll", afficherElements);
window.addEventListener("load", afficherElements);