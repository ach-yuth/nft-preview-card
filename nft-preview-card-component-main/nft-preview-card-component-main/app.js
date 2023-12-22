const icon = document.querySelector(".view");
const h1 = document.querySelector(".data-container h1");
const span = document.querySelector(".logo span");
icon.addEventListener("click", () => {
  h1.classList.toggle("some");
  span.classList.toggle("another");
});
