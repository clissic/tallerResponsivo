// Este script tiene la única funcionalidad de agregar cuadrados a la página de forma dinámica

const items = document.querySelector(".flex-container");

for (let i = 1; i <= 8; i++) {
  const square = document.createElement("div");
  square.appendChild(document.createTextNode(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, soluta quae? Fuga quam nulla possimus consectetur et! Delectus, maxime placeat. ${i}`));
  square.classList.add("square");
  square.classList.add("text-bg-light");
  square.classList.add("miClase");
  items.appendChild(square);
}

$(document).ready(function() {
  $('#myCarousel').carousel();
  setInterval(function() {
      $('#myCarousel').carousel('next');
  }, 2000);
});